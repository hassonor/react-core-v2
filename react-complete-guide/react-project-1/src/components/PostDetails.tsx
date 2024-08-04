import React from 'react';
import {useLoaderData, Link} from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './PostDetails.module.css';
import {IPost} from "./interfaces/post.interface.ts";


const PostDetails: React.FC = () => {
    const post = useLoaderData() as IPost | null;

    if (!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={classes.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }

    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.text}>{post.body}</p>
            </main>
        </Modal>
    );
};

export default PostDetails;

interface LoaderParams {
    params: {
        id: string;
    };
}

export async function loader({params}: LoaderParams) {
    try {
        const response = await fetch(`http://localhost:8080/posts/${params.id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch post by id');
        }
        const resData = await response.json();
        return resData.post;
    } catch (error) {
        console.error('Error fetching post by id:', error);
        throw error;
    }
}
