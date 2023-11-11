import { FC } from 'react';
import classes from './EventsNavigation.module.css';
import { NavLink, useRouteLoaderData } from "react-router-dom";

const EventsNavigation: FC = () => {
    const token = useRouteLoaderData('root') as unknown as string;
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/events" className={({isActive}) => isActive ? classes.active : undefined}
                                 end>All Events</NavLink>
                    </li>
                    {token &&
                        <li><NavLink to="/events/new" className={({isActive}) => isActive ? classes.active : undefined}
                                     end>New Event</NavLink>
                        </li>}
                </ul>
            </nav>
        </header>
    );
};

export default EventsNavigation;
