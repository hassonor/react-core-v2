import { FC } from 'react';
import classes from './EventsList.module.css';
import { Link } from "react-router-dom";

interface EventsListProps {
    events: Array<{
        id: string;
        title: string;
        image: string;
        date: string;
    }>;
}

const EventsList: FC<EventsListProps> = ({events}) => {
    return (
        <div className={classes.events}>
            <h1>All Events</h1>
            <ul className={classes.list}>
                {events.map((event) => (
                    <li key={event.id} className={classes.item}>
                        <Link to={`/events/${event.id}`}>
                            <img src={event.image} alt={event.title}/>
                            <div className={classes.content}>
                                <h2>{event.title}</h2>
                                <time>{event.date}</time>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
