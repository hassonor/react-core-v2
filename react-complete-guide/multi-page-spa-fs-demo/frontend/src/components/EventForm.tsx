import { FC } from 'react';
import { useNavigate, useNavigation, Form, useActionData } from 'react-router-dom';
import classes from './EventForm.module.css';
import { TEvent } from "../types/types.ts";

interface EventFormProps {
    event?: TEvent;
}

const EventForm: FC<EventFormProps> = ({event}) => {
    const data = useActionData() as unknown as any;
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form method='post' className={classes.form}>
            {data && data.errors && (
                <ul>
                    {Object.values(data.errors).map((err: any) => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
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
                <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </div>
        </Form>
    );
};

export default EventForm;
