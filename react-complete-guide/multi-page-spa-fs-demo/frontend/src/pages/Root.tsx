import { FC, ReactElement, useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import MainNavigation from "../components/MainNavigation.tsx";
import { getTokenDuration } from "../utils/auth.ts";

const RootLayout: FC = (): ReactElement => {
    const token = useLoaderData()
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        setTimeout(() => {
            submit(null, {action: '/logout', method: 'post'});
        }, tokenDuration)
    }, [token, submit])
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