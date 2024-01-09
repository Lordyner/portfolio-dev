import Meeting from '@/Components/Meeting';
import Navbar from '@/Components/Navbar';
import React, { useContext } from 'react';
import { getLogger } from '@/Logging/log-util';
import getAccessToken from '@/Utils/getAccessTokenUtils';
import GlobalContext from '@/Store/GlobalContext';
import Spinner from '@/Components/Spinner';
import PopupAddAgenda from '@/Components/PopupAddAgenda';


const BookACall = ({ googleCalendarEvents }) => {

    const { isLoading, setIsLoading } = useContext(GlobalContext);
    const { showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar } = useContext(GlobalContext);

    const addEventInFinalUser = async () => {
        fetch('/api/addEventInFinalUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                summary: 'Rendez-vous avec le client',
                description: 'Rendez-vous avec le client',
                start: {
                    dateTime: '2021-10-15T10:00:00-07:00',
                    timeZone: 'America/Los_Angeles'
                },
                end: {
                    dateTime: '2021-10-15T10:25:00-07:00',
                    timeZone: 'America/Los_Angeles'
                },
                attendees: [
                    { email: '' },
                ],
            })
        }).then(response => {
            if (response.status === 201 || response.status === 200) {
                console.log("Event created");
            } else {
                console.log("Event not created");
            }
        })
    }

    return (
        <>
            {isLoading && <Spinner />}
            {showPopupAddMeetingInClientCalendar && <PopupAddAgenda
                showPopup={showPopupAddMeetingInClientCalendar}
                setShowPopup={setShowPopupAddMeetingInClientCalendar}
                createEventInUserCalendar={addEventInFinalUser}
            />}
            <Navbar />
            <Meeting googleCalendarEvents={googleCalendarEvents} />
        </>
    );
};


export async function getStaticProps(context) {

    const logger = getLogger('BookACall - getStaticProps');

    // Retrieve the access token from Google API
    const accessToken = await getAccessToken('https://www.googleapis.com/auth/calendar.readonly');

    let calendarData = null;

    // Call Google Calendar API only if the access token is not null
    if (accessToken) {
        // 3. Call Calendar API
        try {
            logger.info('Calling calendar API');
            const responseCalendar = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + accessToken }
            });
            const dataCalendar = await responseCalendar.json();

            // Get all the items of dataCalendar
            calendarData = dataCalendar.items;

            // Filter events to keep only the confirmed ones
            calendarData = calendarData.filter(event => event.status === 'confirmed');

            //Retrieve usefull properties of each event and if one of the properties is undefined, set it to null, only if the status equals confirmed
            calendarData = calendarData.map(event => {
                return {
                    title: 'Réservé',
                    start: event.start.dateTime || null,
                    end: event.end.dateTime || null
                }
            })

        } catch (error) {
            logger.error('Error while calling calendar API : ' + error.message);
        }
    }


    // There is an issue, I'm requesting a new access token each time, even if the previous one is still valid


    return {
        props: {
            googleCalendarEvents: calendarData || []
        },
        revalidate: 3599,
    };


}
export default BookACall;