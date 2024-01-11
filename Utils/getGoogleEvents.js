import { getLogger } from "@/Logging/log-util";

export default async function getGoogleEvents(accessToken) {

    const logger = getLogger('getGoogleEvents method');
    let calendarData = null;
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
        return calendarData;
    } catch (error) {
        logger.error('Error while calling calendar API : ' + error.message);
        return null;
    }
}
