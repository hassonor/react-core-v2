import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import RootLayout from "./pages/Root.tsx";
import Error404 from "./pages/Error404.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <Error404/>,
        children: [
            {index: true, element: <Home/>}, // path: '' (the index:true is an alternative to this)
            {path: 'products', element: <Products/>},
            {path: 'products/:productId', element: <ProductDetail/>}
        ]
    },
]);

function App(): ReactElement {
    return <RouterProvider router={router}/>
}

export default App;
