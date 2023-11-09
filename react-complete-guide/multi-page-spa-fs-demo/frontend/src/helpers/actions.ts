import { TEvent } from "../types/types.ts";
import { deleteEventAsync, fetchNewEventAsync } from "./httpRequests.ts";


export async function submitActionAsync({request}: any) {
    const data = await request.formData();
    const eventData: TEvent = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }

    return await fetchNewEventAsync(eventData);
}

export async function deleteEventActionAsync({params, request}: any) {
    const eventId = params.eventId as string;
    return await deleteEventAsync(eventId, request);
}