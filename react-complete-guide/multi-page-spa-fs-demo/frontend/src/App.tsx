import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/Root.tsx";
import CustomError from "./pages/CustomError.tsx";
import Home from "./pages/Home.tsx";
import EventsPage from "./pages/Events.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEventPage from "./pages/EditEvent.tsx";
import EventDetailPage from "./pages/EventDetail.tsx";
import EventRootLayout from "./pages/EventsRoot.tsx";
import { eventByIdLoaderAsync, eventsLoader } from "./helpers/loaders.ts";
import {
    authActionAsync,
    deleteEventActionAsync,
    signUpActionAsync,
    submitOrEditActionAsync
} from "./helpers/actions.ts";
import NewsletterPage from "./pages/Newsletter.tsx";
import Authentication from "./pages/Authentication.tsx";
import { logoutAction } from "./pages/Logout.tsx";
import { checkAuthLoader, tokenLoader } from "./utils/auth.ts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        id: 'root',
        loader: tokenLoader,
        errorElement: <CustomError/>,
        children: [
            {index: true, element: <Home/>},
            {
                path: 'events', element: <EventRootLayout/>,
                children: [
                    {
                        index: true,
                        element: <EventsPage/>,
                        loader: eventsLoader
                    },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: eventByIdLoaderAsync,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage/>,
                                action: deleteEventActionAsync
                            },
                            {
                                path: 'edit',
                                element: <EditEventPage/>,
                                action: submitOrEditActionAsync,
                                loader: checkAuthLoader
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewEvent/>,
                        action: submitOrEditActionAsync,
                        loader: checkAuthLoader
                    },
                ],
            },
            {
                path: '/auth',
                element: <Authentication/>,
                action: authActionAsync
            },
            {
                path: 'newsletter',
                element: <NewsletterPage/>,
                action: signUpActionAsync,
            },
            {
                path: 'logout',
                action: logoutAction,
            },
        ],
    },
]);

function App(): ReactElement {
    return <RouterProvider router={router}/>
}

export default App;
