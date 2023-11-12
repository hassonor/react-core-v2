import { lazy, ReactElement, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/Root.tsx";
import CustomError from "./pages/CustomError.tsx";
import Home from "./pages/Home.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEventPage from "./pages/EditEvent.tsx";
import EventRootLayout from "./pages/EventsRoot.tsx";
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

const LazyEventsPage = lazy(() => import('./pages/Events.tsx'));
const LazyEventDetailPage = lazy(() => import('./pages/EventDetail.tsx'));

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
                        element: <Suspense fallback={<div>Loading...</div>}><LazyEventsPage/></Suspense>,
                        loader: () => import('./helpers/loaders.ts').then((module) => module.eventsLoader())
                    },
                    {
                        path: ':eventId',
                        id: 'event-detail',
                        loader: (meta) => import('./helpers/loaders.ts').then((module) => module.eventByIdLoaderAsync(meta)),
                        children: [
                            {
                                index: true,
                                element: <Suspense fallback={<div>Loading...</div>}><LazyEventDetailPage/></Suspense>,
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
