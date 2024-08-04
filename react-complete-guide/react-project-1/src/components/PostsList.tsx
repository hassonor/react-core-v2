import Post from "./Post.tsx";
import classes from "./PostLists.module.css";
import NewPost from "./NewPost.tsx";
import {FC, useState} from "react";
import Modal from "./Modal.tsx";
import {IPost} from "./interfaces/post.interface.ts";

interface PostListProps {
    isPosting: boolean;
    onStopPosting: () => void;
}


const PostsList: FC<PostListProps> = ({isPosting, onStopPosting}) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const addPostHandler = (postData: IPost) => {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>{isPosting &&
            <Modal onClose={onStopPosting}><NewPost
                onCancel={onStopPosting} onAddPost={addPostHandler}/></Modal>}
            {posts.length > 0 && <ul className={classes.posts}>
                {posts.map((postData: IPost, index: number) => <li key={`${postData.body}_${index}`}>
                    <Post author={postData.author} body={postData.body}/>
                </li>)}
            </ul>}
            {posts.length == 0 && <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>}

        </>
    );
};

export default PostsList;