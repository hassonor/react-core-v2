import { FC } from 'react';
import classes from './MainNavigation.module.css';
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup.tsx";

const MainNavigation: FC = () => {
    const token = useRouteLoaderData('root') as unknown as string;

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined}
                                 end>Home</NavLink>
                    </li>
                    <li><NavLink to="/events" className={({isActive}) => isActive ? classes.active : undefined}
                                 end>Events</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/newsletter"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Newsletter
                        </NavLink>
                    </li>
                    {!token && <li>
                        <NavLink
                            to="/auth?mode=login"
                            className={({isActive}) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Authentication
                        </NavLink>
                    </li>}
                    {token && <li>
                        <Form action="/logout" method="post">
                            <button>Logout</button>
                        </Form>
                    </li>}
                </ul>
            </nav>
            <NewsletterSignup/>
        </header>
    );
};


export default MainNavigation;
