import { FC, ReactElement } from "react";
import { useRouteError } from 'react-router-dom'
import PageContent from "../components/PageContent.tsx";
import MainNavigation from "../components/MainNavigation.tsx";

const CustomError: FC = (): ReactElement => {
    const error = useRouteError() as unknown as any;

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!'
        message = 'Could not find resource of page'
    }


    return (
        <>
            <MainNavigation/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default CustomError;