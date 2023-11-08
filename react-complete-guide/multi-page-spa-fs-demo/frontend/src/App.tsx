import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/Root.tsx";
import Error404 from "./pages/Error404.tsx";
import Home from "./pages/Home.tsx";
import EventsPage from "./pages/Events.tsx";
import NewEvent from "./pages/NewEvent.tsx";
import EditEventPage from "./pages/EditEvent.tsx";
import EventDetailPage from "./pages/EventDetail.tsx";
import EventRootLayout from "./pages/EventsRoot.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <Error404/>,
        children: [
            {index: true, element: <Home/>},
            {
                path: 'events', element: <EventRootLayout/>,
                children: [
                    {index: true, element: <EventsPage/>},
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
