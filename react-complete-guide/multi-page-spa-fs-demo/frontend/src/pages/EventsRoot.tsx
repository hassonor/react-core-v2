import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation.tsx";


const EventRootLayout: FC = (): ReactElement => {
    return (
        <>
            <EventsNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default EventRootLayout;