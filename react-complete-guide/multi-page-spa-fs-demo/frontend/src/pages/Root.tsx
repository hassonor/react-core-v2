import { FC, ReactElement } from "react";
import { Outlet } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation.tsx";

const RootLayout: FC = (): ReactElement => {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout;