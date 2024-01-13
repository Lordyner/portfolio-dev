import Meeting from '@/Components/Meeting';
import Navbar from '@/Components/Navbar';
import React, { useContext } from 'react';
import { getLogger } from '@/Logging/log-util';
import getAccessToken from '@/Utils/getAccessTokenUtils';
import GlobalContext from '@/Store/GlobalContext';
import Spinner from '@/Components/Spinner';
import PopupAddAgenda from '@/Components/PopupAddAgenda';
import getGoogleEvents from '@/Utils/getGoogleEvents';
import Footer from '@/Components/Footer';


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
            />}
            <Navbar />
            <Meeting googleCalendarEvents={googleCalendarEvents} />
            <Footer />

        </>
    );
};

/************************************************************************************************************* */
/* There is an issue, I'm requesting a new access token each time, even if the previous one is still valid *****/
/* Write the access token in a file *****/
/************************************************************************************************************* */

export async function getStaticProps(context) {

    const logger = getLogger('BookACall - getStaticProps');

    // Retrieve the access token from Google API
    const accessToken = await getAccessToken('https://www.googleapis.com/auth/calendar.readonly');

    let calendarData = null;

    // Call Google Calendar API only if the access token is not null
    if (accessToken) {
        calendarData = await getGoogleEvents(accessToken);
    }

    return {
        props: {
            googleCalendarEvents: calendarData || []
        },
        revalidate: 3599,
    };


}

export default BookACall;