import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import RootLayout from "./pages/Root.tsx";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            {path: '/', element: <Home/>},
            {path: '/products', element: <Products/>},
        ]
    },
]);

function App(): ReactElement {
    return <RouterProvider router={router}/>
}

export default App;
