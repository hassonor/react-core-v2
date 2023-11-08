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
import { eventsLoader } from "./helpers/httpRequests.ts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
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
                    {path: 'new', element: <NewEvent/>},
                    {path: ':eventId', element: <EventDetailPage/>},
                    {path: ':eventId/edit', element: <EditEventPage/>},
                ]
            },
        ]
    },
]);

function App(): ReactElement {
    return <RouterProvider router={router}/>
}

export default App;
