import { json, redirect } from 'react-router-dom';
import { TEvent } from "../types/types.ts";

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

export async function fetchNewEvent(eventData: TEvent): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/events`, {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return json({message: `Could not fetch new event.`}, {status: 500});
        } else {
            return redirect('/events');
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

export async function submitAction({request}: any) {
    const data = await request.formData();
    const eventData: TEvent = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }

    return await fetchNewEvent(eventData);
}