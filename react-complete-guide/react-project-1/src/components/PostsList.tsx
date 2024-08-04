import {FC, useEffect, useState} from 'react';
import Post from './Post';
import classes from './PostLists.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import {IPost} from './interfaces/post.interface';
import useFetch from './hooks/useFetch.tsx';

interface PostListProps {
    isPosting: boolean;
    onStopPosting: () => void;
}

const extractPosts = (response: any): IPost[] => response.posts;

const PostsList: FC<PostListProps> = ({isPosting, onStopPosting}) => {
    const {data: posts, isLoading, error} = useFetch<IPost[]>('http://localhost:8080/posts', extractPosts);
    const [localPosts, setLocalPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (posts) {
            setLocalPosts(posts);
        }
    }, [posts]);

    const addPostHandler = async (postData: IPost) => {
        try {
            const response = await fetch('http://localhost:8080/posts', {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to add post');
            }

            const result = await response.json();
            setLocalPosts((existingPosts) => [result.post, ...existingPosts]);
        } catch (err) {
            if (err instanceof Error) {
                console.error('Error adding post:', err.message);
            } else {
                console.error('An unknown error occurred while adding the post');
            }
        }
    };

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal>
            )}
            {isLoading && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading posts...</p>
                </div>
            )}
            {!isLoading && error && (
                <div style={{textAlign: 'center', color: 'red'}}>
                    <p>{error}</p>
                </div>
            )}
            {!isLoading && !error && localPosts.length > 0 && (
                <ul className={classes.posts}>
                    {localPosts.map((postData: IPost) => (
                        <li key={postData.id}>
                            <Post author={postData.author} body={postData.body}/>
                        </li>
                    ))}
                </ul>
            )}
            {!isLoading && !error && localPosts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
};

export default PostsList;
