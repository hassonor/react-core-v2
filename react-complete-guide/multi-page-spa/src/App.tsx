import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import RootLayout from "./pages/Root.tsx";
import Error404 from "./pages/Error404.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <Error404/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/products', element: <Products/>},

        ]
    },
]);

function App(): ReactElement {
    return <RouterProvider router={router}/>
}

export default App;
