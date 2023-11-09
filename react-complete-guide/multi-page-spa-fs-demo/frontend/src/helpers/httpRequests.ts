import { json, redirect } from 'react-router-dom';
import { TEvent } from "../types/types.ts";

export async function fetchEventsAsync(): Promise<any> {
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

export async function fetchEventByIdAsync(eventId: string): Promise<any> {
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

export async function fetchNewEventAsync(eventData: TEvent): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/events`, {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 422) {
            return response;
        }

        if (!response.ok) {
            return json({message: `Could not fetch new event.`}, {status: 500});
        } else {
            return redirect('/events');
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}


export async function deleteEventAsync(eventId: string, request: any): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/events/${eventId}`, {
            method: request.method
        });

        if (!response.ok) {
            return json({message: `Could not fetch delete event by id ${eventId}`}, {status: 500});
        } else {
            return redirect('/events');
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}



