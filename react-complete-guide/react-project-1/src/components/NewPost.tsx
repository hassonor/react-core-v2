import classes from './NewPost.module.css';
import Modal from './Modal.tsx';
import {Link, Form, redirect} from 'react-router-dom';
import {IPost} from "./interfaces/post.interface.ts";
import {FC} from "react";


const NewPost: FC = () => {
    return (
        <Modal>
            <Form method='post' className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required/>
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;


export async function action({request}: { request: Request }) {
    const formData = await request.formData();
    const postData: IPost = {
        author: formData.get('author') as string,
        body: formData.get('body') as string,
    };

    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return redirect('/');
}