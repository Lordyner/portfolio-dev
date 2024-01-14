import React, { useContext, useEffect, useRef, useState } from 'react';
import classes from './Meeting.module.css';
import Image from 'next/image';
import profilPic from '@/public/images/profile_pic_zoomed_a_bit.jpg';
import GlobalContext from '@/Store/GlobalContext';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { getLogger } from '@/logging/log-util';
import interactionPlugin from "@fullcalendar/interaction"
import Link from 'next/link';

const Meeting = ({ googleCalendarEvents }) => {

    const logger = getLogger('Meeting');
    const { setIsLoading } = useContext(GlobalContext);

    const [screenWidth, setScreenWidth] = useState();
    const [selectedDate, setSelectedDate] = useState();

    const { isMobileResolution, setIsMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution, setIsTabletResolution } = useContext(GlobalContext);
    const { isLaptopResolution, setIsLaptopResolution } = useContext(GlobalContext);
    const { isDesktopResolution, setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, laptopResolution, desktopResolution } = useContext(GlobalContext);
    const { setShowPopupAddMeetingInClientCalendar } = useContext(GlobalContext);

    const form = useRef();
    const fullCalendar = useRef();

    logger.info('Meeting component rendered');
    const handleMenuDisplay = () => {
        setScreenWidth(window.screen.width);

        const isMobile = screenWidth < tabletResolution;
        const isTablet = screenWidth >= tabletResolution && screenWidth < laptopResolution;
        const isLaptop = screenWidth >= laptopResolution && screenWidth < desktopResolution;
        const isDesktop = screenWidth >= desktopResolution;

        setIsMobileResolution(isMobile);
        setIsTabletResolution(isTablet);
        setIsLaptopResolution(isLaptop);
        setIsDesktopResolution(isDesktop);
    }



    // Render the event content
    function renderEventContent(eventInfo) {
        return (
            <div className={classes.meetingSlot}>
                <span className={classes.slotTitle}>{!isMobileResolution && eventInfo.event.title}</span>
            </div>

        )
    }

    // function for select callback
    function handleSelect(info) {
        setSelectedDate({
            start: info.startStr,
            end: info.endStr
        });
    }

    function clearForm() {
        form.current.message.value = '';
        form.current.mail.value = '';
        form.current.tel.value = '';
        setSelectedDate(null);
        fullCalendar.current.getApi().unselect();

    }

    useEffect(() => {
        handleMenuDisplay();
        window.addEventListener('resize', handleMenuDisplay);
    }, [screenWidth])



    const createEvent = (e) => {
        e.preventDefault();

        console.log("handleSubmit")
        // Call the api to create the event
        const params = {
            selectedDate: selectedDate,
            description: form.current.message.value,
            mail: form.current.mail.value,
            tel: form.current.tel.value
        }
        // Check if the fields are valid
        if (!params.selectedDate) {
            logger.info("No date has been selected");
            isMobileResolution ? alert('Veuillez saisir un creneau horaire en restant appuyé une seconde sur le calendrier') : alert('Veuillez saisir un créneau horaire en cliquant sur le calendrier');
            return;
        }

        setIsLoading(true);

        fetch('/api/createEvent', {
            method: 'POST',
            body: JSON.stringify({
                params: params
            }),
            headers: { 'Content-Type': 'application/json' }

        }).then(response => {
            if (response.status === 201 || response.status === 200) {
                clearForm();
                logger.info('Event created on google calendar');
                // Show popup to add event in client calendar
                setShowPopupAddMeetingInClientCalendar(true);
            } else {
                console.log("Event not created");
                logger.error('Error creating event on google calendar');
                // Show error popup
            }
        }).finally(() => {
            setIsLoading(false);
        })

    }
    return (
        <main className={classes.meeting}>
            <div className={classes.content}>
                <h1>Réserver un appel</h1>
                <p>Vous avez un besoin, une idée de projet, des maquettes à transformer en site ? Discutons-en ensemble</p>
                {(isMobileResolution || isTabletResolution) && <div className={classes.separation}></div>}
                <form ref={form} className={classes.form} onSubmit={createEvent}>
                    <div className={classes.fieldsWrapper}>
                        <div className={classes.formGroup}>
                            <label htmlFor='mail'>Mail</label>
                            <input type='email' name='mail' id='mail' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required></input>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='tel'>Téléphone</label>
                            <input type='text' name='tel' id='tel' pattern="[0-9]+" required></input>
                        </div>
                        <div className={classes.formGroup}>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' name='message' type='textarea' rows={8} required></textarea>
                        </div>
                        <FullCalendar
                            ref={fullCalendar}
                            plugins={[timeGridPlugin, interactionPlugin]}
                            initialView="timeGridWeek"
                            selectable={true}
                            // Restrict calendar selection to 16h-20h
                            selectConstraint={{
                                startTime: '16:00',
                                endTime: '20:00',
                                daysOfWeek: [0, 1, 2, 3, 4, 5, 6]
                            }}
                            // Restrict selection to 30 minutes slots
                            selectAllow={function (selectInfo) {
                                var duration = Math.abs(selectInfo.end - selectInfo.start);
                                return duration === 1800000;
                            }}
                            customButtons={{
                                prev: {
                                    click: function () {
                                        fullCalendar.current.getApi().prev();
                                        setSelectedDate(null);

                                    }
                                },
                                next: {
                                    click: function () {
                                        fullCalendar.current.getApi().next();
                                        setSelectedDate(null);

                                    }
                                },
                                today: {
                                    text: 'Aujourd\'hui',
                                    click: function () {
                                        fullCalendar.current.getApi().today();
                                        setSelectedDate(null);

                                    }
                                }
                            }}

                            headerToolbar={
                                {
                                    left: 'title',
                                    center: '',
                                    right: isMobileResolution ? 'prev,next' : 'prev,next today'
                                }
                            }
                            dayHeaderFormat={
                                {
                                    day: 'numeric',
                                    weekday: 'short'
                                }
                            }
                            eventBackgroundColor='var(--grey)'
                            eventBorderColor='var(--grey)'
                            eventTextColor='#fff'
                            unselectAuto={false}
                            allDaySlot={false}
                            titleFormat={{ year: 'numeric', month: 'long', day: 'numeric' }}
                            buttonText={{ today: 'Aujourd\'hui' }}
                            slotMinTime="16:00:00"
                            slotMaxTime="20:00:00"
                            slotDuration="00:30"
                            expandRows={true}
                            firstDay={1}
                            nowIndicator={true}
                            select={handleSelect}
                            eventContent={renderEventContent}
                            locale='fr'
                            events={googleCalendarEvents}
                        />
                    </div>

                    <div className={classes.buttonWrapper}>
                        <button className='primary-button' type='submit'>Confirmer</button>
                        <Link type='button' className='secondary-button' href="/#home">Annuler</Link>
                    </div>
                </form>
            </div >
            {(isLaptopResolution || isDesktopResolution) && <div className={classes.imageWrapper}>
                <Image src={profilPic} alt='Thomas André-Lubin en train de déveloper sur son ordinateur' />
            </div>}
        </main >
    );
};




export default Meeting;

