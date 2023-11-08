import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const EVENTS = [
    {id: 'e1', title: 'Event 1'},
    {id: 'e2', title: 'Event 2'},
    {id: 'e3', title: 'Event 3'},
    {id: 'e4', title: 'Event 4'},
]
const EventsPage: FC = (): ReactElement => {


    return (<>
        <h1>Events Page </h1>
        <ul>
            {EVENTS.map(event => {
                return <li key={event.id}><Link to={event.id}>{event.title}</Link></li>
            })}
        </ul>
    </>);
}

export default EventsPage;