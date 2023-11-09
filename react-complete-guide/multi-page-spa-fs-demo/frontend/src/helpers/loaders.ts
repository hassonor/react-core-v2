import { fetchEventByIdAsync, fetchEventsAsync } from "./httpRequests.ts";

export async function eventsLoaderAsync() {
    return await fetchEventsAsync();
}

export async function eventByIdLoaderAsync({params}: any) {
    const eventId = params.eventId as string;
    return await fetchEventByIdAsync(eventId);
}