import { TEvent } from "../types/types.ts";
import { deleteEventAsync, fetchNewEventAsync } from "./httpRequests.ts";


export async function submitOrEditActionAsync({request, params}: any) {
    const method = request.method;
    const data = await request.formData();
    const eventData: TEvent = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }

    let url = 'http://localhost:8080/events';

    if (method === 'PATCH') {
        const eventId = params.eventId;
        url = 'http://localhost:8080/events/' + eventId;
    }

    return await fetchNewEventAsync(eventData, method, url);
}

export async function deleteEventActionAsync({params, request}: any) {
    const eventId = params.eventId as string;
    return await deleteEventAsync(eventId, request);
}