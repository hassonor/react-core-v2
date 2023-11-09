import { FC, ReactElement } from "react";
import EventForm from "../components/EventForm.tsx";

const NewEventPage: FC = (): ReactElement => {


    return (
        <>
            <EventForm method="post"/>
        </>
    )
}

export default NewEventPage;