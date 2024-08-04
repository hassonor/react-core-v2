import {FC} from "react";
import classes from './Post.module.css';

interface PostProps {
    author: string;
    body: string;
}

const Post: FC<PostProps> = ({author, body}) => {
    return (
        <div className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </div>
    );
};

export default Post;
