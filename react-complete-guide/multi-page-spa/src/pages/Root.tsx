import { FC, ReactElement } from "react";
import { Outlet } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation.tsx";
import classes from './Root.module.css';

const RootLayout: FC = (): ReactElement => {
    return (
        <>
            <MainNavigation/>
            <main className={classes.content}>
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout;