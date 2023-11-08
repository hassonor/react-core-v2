import { FC, ReactElement } from "react";
import { Link, useParams } from "react-router-dom";

const EventDetailPage: FC = (): ReactElement => {
    const params = useParams();

    return (
        <>
            <h1>Event Details</h1>
            <p>Event ID: {params.eventId}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </>
    )
}

export default EventDetailPage;