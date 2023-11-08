import { FC, ReactElement } from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.tsx";
import { TEvent } from "../types/types.ts";

const EventDetailPage: FC = (): ReactElement => {
    const data = useRouteLoaderData('event-detail') as unknown as { event: TEvent };

    return (
        <EventItem event={data.event}/>
    );
}

export default EventDetailPage;