import PostsList from "../components/PostsList.tsx";
import {Outlet} from "react-router-dom";
import {IPost} from "../components/interfaces/post.interface.ts";

const Posts = () => {
    return (
        <>
            <Outlet/>
            <main>
                <PostsList/>
            </main>
        </>
    )
}

export default Posts;

export async function loader() {
    try {
        const response = await fetch('http://localhost:8080/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const resData = await response.json();
        return resData.posts as IPost[];
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}
