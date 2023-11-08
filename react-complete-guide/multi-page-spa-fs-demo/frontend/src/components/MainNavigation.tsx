import { FC } from 'react';
import classes from './MainNavigation.module.css';
import { NavLink } from "react-router-dom";

const MainNavigation: FC = () => {
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
                </ul>
            </nav>
        </header>
    );
};


export default MainNavigation;
