import { TEvent } from "../types/types.ts";

interface EventsResponse {
    events: TEvent[];
}

// CustomError class for throwing typed errors
export class CustomError extends Error {
    constructor(public message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

export async function fetchEvents(): Promise<TEvent[]> {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new CustomError('Fetching events failed.');
    }
    const resData: EventsResponse = await response.json();
    return resData.events;
}