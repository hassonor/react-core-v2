import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";

const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: '/products', element: <Products/>},
]);

function App(): ReactElement {
    return <RouterProvider router={router}/>
}

export default App;
