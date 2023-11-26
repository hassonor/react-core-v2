import { FC } from 'react';
import { NavLink, useRouteLoaderData } from "react-router-dom";

const EventsNavigation: FC = () => {
    const token = useRouteLoaderData('root') as unknown as string;

    return (
        <header className="py-8 flex justify-center">
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                `${isActive ? 'bg-primary-600' : 'bg-gray-500 text-gray-900'} px-6 py-2 rounded no-underline`}
                            end
                        >
                            All Events
                        </NavLink>
                    </li>
                    {token && (
                        <li>
                            <NavLink
                                to="/events/new"
                                className={({ isActive }) =>
                                    `${isActive ? 'bg-primary-600' : 'bg-gray-500 text-gray-900'} px-6 py-2 rounded no-underline`}
                                end
                            >
                                New Event
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default EventsNavigation;
