import { FC, ReactElement } from "react";
import MainNavigation from "../components/MainNavigation.tsx";

const Error404: FC = (): ReactElement => {
    return (
        <>
            <MainNavigation/>
            <main>
                <h1>404 Page Not Found</h1>
            </main>
        </>
    )
}

export default Error404;