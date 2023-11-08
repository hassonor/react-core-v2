import { FC } from 'react';
import classes from './EventItem.module.css';
import { Link } from "react-router-dom";

interface EventItemProps {
    event: {
        id: string;
        title: string;
        image: string;
        date: string;
        description: string;
    };
}

const EventItem: FC<EventItemProps> = ({event}) => {
    const startDeleteHandler = () => {
        // Place logic here for handling the deletion of an event
        console.log(`Deleting event with id: ${event.id}`);
    };

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title}/>
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <Link to={`edit/${event.id}`}>Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;
