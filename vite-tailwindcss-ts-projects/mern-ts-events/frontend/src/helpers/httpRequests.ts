import { json, redirect } from 'react-router-dom';
import { TEvent } from "../types/types.ts";
import { getAuthToken } from "../utils/auth.ts";

export async function fetchEventsAsync(): Promise<any> {
    try {
        const response = await fetch('http://localhost:8080/events');
        if (!response.ok) {
            throw json({message: 'Could not fetch events'}, {status: 500});
        } else {
            const resData = await response.json();
            return resData.events;
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}

export async function fetchEventByIdAsync(eventId: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/events/${eventId}`);
        if (!response.ok) {
            throw json({message: `Could not fetch event by id ${eventId}`}, {status: 500});
        } else {
            const resData = await response.json();
            return resData.event;
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}

export async function fetchNewEventAsync(eventData: TEvent, method: string, url: string): Promise<any> {
    try {
        const token = getAuthToken();
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.status === 422) {
            return response;
        }

        if (!response.ok) {
            throw json({message: `Could not fetch new event.`}, {status: 500});
        } else {
            return redirect('/events');
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}


export async function deleteEventAsync(eventId: string, request: any): Promise<any> {
    try {
        const token = getAuthToken();
        const response = await fetch(`http://localhost:8080/events/${eventId}`, {
            method: request.method,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw json({message: `Could not fetch delete event by id ${eventId}`}, {status: 500});
        } else {
            return redirect('/events');
        }
    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}


export async function authAsync(authData: { email: string, password: string }, mode: "login" | "signup"): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/${mode}`, {
            method: "POST",
            body: JSON.stringify(authData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 422 || response.status === 401) {
            return response;
        }

        if (!response.ok) {
            throw json({message: `Could not authenticate`}, {status: 500});
        }

        const resData = await response.json();
        const token = resData.token;

        localStorage.setItem('token', token);
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem('expiration', expiration.toISOString());

        return redirect('/');

    } catch (error) {
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}



