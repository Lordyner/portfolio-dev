import { getLogger } from '@/logging/log-util';
import getAccessToken from '@/Utils/getAccessTokenUtils';

export default async function createEvent(req, res) {
    const logger = getLogger('createEvent');

    const selectedDate = req.body.params.selectedDate;
    const description = req.body.params.description;
    const mail = req.body.params.mail;
    const tel = req.body.params.tel;

    // Check if any of the fields are empty and if so, return
    if (!selectedDate || !description || !mail || !tel) {
        logger.info("One of the fields is empty");
        res.status(400).json({ message: 'One of the fields is empty' });
        return;
    }


    /*******************************************************************************************/
    /* Je peux sans doute directement utiliser cette librairies plutôt que gérer les appels moi même***/
    /*******************************************************************************************/

    // const calendar = google.calendar({ version: 'v3', auth });

    // // Insert an event
    // const event = await calendar.events.insert({
    //     calendarId: 'primary', // Use 'primary' for the user's primary calendar
    //     requestBody: {
    //         summary: 'Sample Event',
    //         description: 'This is a sample event created by the Next.js app.',
    //         start: {
    //             dateTime: '2023-01-01T12:00:00',
    //             timeZone: 'YOUR_TIMEZONE', // Replace with the user's timezone
    //         },
    //         end: {
    //             dateTime: '2023-01-01T14:00:00',
    //             timeZone: 'YOUR_TIMEZONE', // Replace with the user's timezone
    //         },
    //     },
    // });

    /*******************************************************************************************/
    /* Commented to avoid making too many requests to Google Calendar API during development ***/
    /*******************************************************************************************/

    const accessToken = await getAccessToken('https://www.googleapis.com/auth/calendar');

    // Call google calendar API to create event
    try {
        const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start: {
                    dateTime: selectedDate.start,
                    timeZone: 'Europe/Paris'
                },
                end: {
                    dateTime: selectedDate.end,
                    timeZone: 'Europe/Paris'
                },
                status: 'confirmed',
                summary: `Call with a prospect ${mail} ${tel}`,
                description: description

            }),
        });

        const data = await response.json();
        if (response.status !== 200) {
            logger.error('Error while creating event : ' + JSON.stringify(data));
            res.status(500).json({ message: 'Error while creating event' });
            return;
        }

        logger.info('Event created successfully : ' + JSON.stringify(data));
        res.status(200).json({ message: 'Event created successfully' });
    } catch (error) {
        logger.error('Error while creating event : ' + error.message);
        res.status(500).json({ message: 'Error while creating event' });
    }


}