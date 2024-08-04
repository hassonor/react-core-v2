import classes from './NewPost.module.css';
import {ChangeEvent, FC, FormEvent, useState} from "react";
import {IPost} from "./interfaces/post.interface.ts";

interface NewPostProps {
    onCancel: () => void
    onAddPost: (postData: IPost) => void;
}

const NewPost: FC<NewPostProps> = ({onCancel, onAddPost}) => {
    const [enteredBody, setEnteredBody] = useState<string>("");
    const [enteredAuthor, setAuthor] = useState<string>("");
    const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setEnteredBody(event.target.value);
    };

    const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthor(event.target.value);
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        }
        onAddPost(postData);
        onCancel();
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;