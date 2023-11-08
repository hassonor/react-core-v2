import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { TEvent } from "../types/types.ts";
import { fetchEvents } from "../helpers/httpRequests.ts";


const EventsPage: FC = () => {
    const events: TEvent[] = useLoaderData() as unknown as TEvent[];

    return (
        <>
            <EventsList events={events}/>
        </>
    );
};

export default EventsPage;

export async function loader() {
    try {
        return await fetchEvents();
    } catch (error) {
        throw new Response(null, {
            status: 500,
            statusText: 'Internal Server Error',
        });
    }
}