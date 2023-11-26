import { FC } from 'react';
import { Link } from 'react-router-dom';

interface EventsListProps {
    events: Array<{
        id: string;
        title: string;
        image: string;
        date: string;
    }>;
}

const EventsList: FC<EventsListProps> = ({ events }) => {
    return (
        <div className="my-8 mx-auto max-w-4xl">
            <h1 className="text-2xl font-semibold mb-4">All Events</h1>
            <ul className="flex flex-col gap-4 p-0 m-0 list-none">
                {events.map((event) => (
                    <li
                        key={event.id}
                        className="text-inherit no-underline bg-gray-800 rounded overflow-hidden hover:scale-105 hover:bg-gray-700"
                    >
                        <Link to={`/events/${event.id}`} className="flex">
                            <div
                                className="w-1/3"
                                style={{
                                    height: '150px', // Adjust the height as needed
                                    overflow: 'hidden',
                                }}
                            >
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-3">
                                <h2 className="text-white text-base font-semibold">
                                    {event.title}
                                </h2>
                                <time className="text-gray-400 text-sm">{event.date}</time>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
