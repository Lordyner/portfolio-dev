// pages/api/add-event.js

import { authenticate } from '@/Utils/calendar';
import { google } from 'googleapis';

export default async function handler(req, res) {
    try {
        // Authenticate with Google Calendar API
        const auth = await authenticate();

        // Create a Google Calendar API instance
        const calendar = google.calendar({ version: 'v3', auth });

        // Insert an event
        const event = await calendar.events.insert({
            calendarId: 'primary', // Use 'primary' for the user's primary calendar
            requestBody: {
                summary: 'Sample Event',
                description: 'This is a sample event created by the Next.js app.',
                start: {
                    dateTime: '2023-01-01T12:00:00',
                    timeZone: 'YOUR_TIMEZONE', // Replace with the user's timezone
                },
                end: {
                    dateTime: '2023-01-01T14:00:00',
                    timeZone: 'YOUR_TIMEZONE', // Replace with the user's timezone
                },
            },
        });

        console.log('Event created:', event.data);
        res.status(200).json({ message: 'Event created successfully' });
    } catch (error) {
        console.error('Error creating event:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}