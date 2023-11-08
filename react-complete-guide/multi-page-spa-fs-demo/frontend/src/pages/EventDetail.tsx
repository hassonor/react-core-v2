import { FC, ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.tsx";
import { TEvent } from "../types/types.ts";

const EventDetailPage: FC = (): ReactElement => {
    const {event} = useLoaderData() as unknown as TEvent;

    return (
        <EventItem event={event}/>
    );
}

export default EventDetailPage;