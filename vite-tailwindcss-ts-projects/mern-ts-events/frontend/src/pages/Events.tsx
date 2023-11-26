import { FC, Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

const EventsPage: FC = () => {
    const {events}: any = useLoaderData();

    return (
        <Suspense fallback={<p className="text-center">Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>
    );
};

export default EventsPage;
