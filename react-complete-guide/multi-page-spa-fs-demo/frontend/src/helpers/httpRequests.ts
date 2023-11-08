import { json } from 'react-router-dom';

export async function fetchEvents(): Promise<any> {
    try {
        const response = await fetch('http://localhost:8080/events');
        if (!response.ok) {
            return json({message: 'Could not fetch events'}, {status: 500});
        } else {
            return response;
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}

export async function fetchEventById(eventId: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/events/${eventId}`);
        if (!response.ok) {
            return json({message: `Could not fetch event by id ${eventId}`}, {status: 500});
        } else {
            return response;
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}


export async function eventsLoader() {
    return await fetchEvents();
}

export async function eventByIdLoader({params}: any) {
    const eventId = params.eventId as string;
    return await fetchEventById(eventId);
}