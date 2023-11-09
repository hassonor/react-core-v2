import { FC } from 'react';
import { useNavigate, Form } from 'react-router-dom';
import classes from './EventForm.module.css';
import { TEvent } from "../types/types.ts";

interface EventFormProps {
    event?: TEvent;
}

const EventForm: FC<EventFormProps> = ({event}) => {
    const navigate = useNavigate();

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method='post' className={classes.form}>
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" defaultValue={event ? event.title : ''} required/>
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" defaultValue={event ? event.image : ''} required/>
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" defaultValue={event ? event.date : ''} required/>
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" defaultValue={event ? event.description : ''} rows={5}
                          required/>
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </Form>
    );
};

export default EventForm;
