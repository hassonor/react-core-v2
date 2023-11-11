import { fetchEventByIdAsync, fetchEventsAsync } from "./httpRequests.ts";
import { defer } from "react-router-dom";

export function eventsLoader(): any {
    return defer({
        events: fetchEventsAsync()
    })
}


export async function eventByIdLoaderAsync({params}: any) {
    const eventId = params.eventId as string;
    return defer({
        event: await fetchEventByIdAsync(eventId),
        events: fetchEventsAsync()
    })
}