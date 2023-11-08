import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { TEvent } from "../types/types.ts";


const EventsPage: FC = () => {
    const data: any = useLoaderData();
    const events = data.events as TEvent[]

    return <EventsList events={events}/>;
};


export default EventsPage;


