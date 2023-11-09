import { FC, ReactElement } from "react";
import EventForm from "../components/EventForm.tsx";
import { useRouteLoaderData } from "react-router-dom";
import { TEvent } from "../types/types.ts";

const EditEventPage: FC = (): ReactElement => {
    const data = useRouteLoaderData('event-detail') as unknown as { event: TEvent };

    return (
        <>
            <EventForm method="patch" event={data.event}/>
        </>
    )
}

export default EditEventPage;