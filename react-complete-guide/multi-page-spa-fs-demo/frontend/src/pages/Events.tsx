import { FC, } from 'react';

import EventsList from '../components/EventsList';
import { useFetch } from "../hooks/useFetch.tsx";
import { fetchEvents } from "../helpers/httpRequests.ts";
import { TEvent } from "../types/types.ts";

const EventsPage: FC = () => {
    const {isFetching, fetchedData, error} = useFetch<TEvent[]>(fetchEvents, []);

    return (
        <>
            <div style={{textAlign: 'center'}}>
                {isFetching && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
            </div>
            {!isFetching && fetchedData && <EventsList events={fetchedData}/>}
        </>
    );
};

export default EventsPage;