import Meeting from '@/Components/Meeting';
import Navbar from '@/Components/Navbar';
import React, { useContext, useEffect } from 'react';
import { getLogger } from '@/Logging/log-util';
import getAccessToken from '@/Utils/getAccessTokenUtils';
import GlobalContext from '@/Store/GlobalContext';
import Spinner from '@/Components/Spinner';
import PopupAddAgenda from '@/Components/PopupAddAgenda';
import getGoogleEvents from '@/Utils/getGoogleEvents';
import Footer from '@/Components/Footer';
import { useRouter } from 'next/router';


const BookACall = ({ googleCalendarEvents }) => {

    const { isLoading, setIsLoading } = useContext(GlobalContext);
    const { showPopupAddMeetingInClientCalendar, setShowPopupAddMeetingInClientCalendar } = useContext(GlobalContext);
    const router = useRouter();

    useEffect(() => {
        // Handle loading spinner during page transitions
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));
    }, [])

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