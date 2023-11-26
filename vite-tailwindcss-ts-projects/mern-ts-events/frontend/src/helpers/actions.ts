import { TEvent } from "../types/types.ts";
import { authAsync, deleteEventAsync, fetchNewEventAsync } from "./httpRequests.ts";
import { json } from "react-router-dom";


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

export async function signUpActionAsync({request}: any) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return {message: 'Signup successful!'};
}

export async function authActionAsync({request}: any) {
    const searchParams = new URL(request.url).searchParams
    const mode = searchParams.get('mode') || 'login';

    if (mode !== 'login' && mode !== 'signup') {
        throw json({message: 'Invalid mode'}, {status: 422});
    }

    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password')
    }

    return await authAsync(authData, mode);
}

