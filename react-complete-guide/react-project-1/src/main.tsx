import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NewPost, {action as newPostAction} from "./components/NewPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import Posts, {loader as postsLoader} from "./routes/Posts.tsx";
import PostDetails, {loader as postDetailsLoader} from "./components/PostDetails.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/', element: <Posts/>,
                loader: postsLoader,
                children: [{
                    path: '/create-post', element: <NewPost/>, action: newPostAction
                },
                    {path: '/:id', element: <PostDetails/>, loader: postDetailsLoader}
                ]
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
