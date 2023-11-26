import { FC, ReactElement, Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.tsx";
import { TEvent } from "../types/types.ts";
import EventsList from "../components/EventsList.tsx";

const EventDetailPage: FC = (): ReactElement => {
    const { event, events } = useRouteLoaderData('event-detail') as unknown as { event: TEvent, events: TEvent[] };

    return (
        <>
            <Suspense fallback={<p className="text-center">Loading...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent}/>}
                </Await>
            </Suspense>
            <Suspense fallback={<p className="text-center">Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents}/>}
                </Await>
            </Suspense>
        </>
    );
}

export default EventDetailPage;
