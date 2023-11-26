import { FC } from 'react';
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup.tsx";

const MainNavigation: FC = () => {
    const token = useRouteLoaderData('root') as unknown as string;

    return (
        <header className="max-w-6xl mx-auto p-8 flex justify-between items-center">
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'text-primary-800 font-semibold underline' : 'text-primary-400 no-underline'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" end className={({ isActive }) => isActive ? 'text-primary-800 font-semibold underline' : 'text-primary-400 no-underline'}>
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newsletter" className={({ isActive }) => isActive ? 'text-primary-800 font-semibold underline' : 'text-primary-400 no-underline'}>
                            Newsletter
                        </NavLink>
                    </li>
                    {!token &&
                        <li>
                            <NavLink to="/auth?mode=login" className={({ isActive }) => isActive ? 'text-primary-800 font-semibold underline' : 'text-primary-400 no-underline'}>
                                Authentication
                            </NavLink>
                        </li>}
                    {token &&
                        <li>
                            <Form action="/logout" method="post">
                                <button className="text-primary-400 no-underline hover:text-primary-800">Logout</button>
                            </Form>
                        </li>}
                </ul>
            </nav>
            <NewsletterSignup/>
        </header>
    );
};

export default MainNavigation;
