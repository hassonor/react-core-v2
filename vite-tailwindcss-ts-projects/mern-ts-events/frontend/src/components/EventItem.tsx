import { FC } from 'react';
import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';

interface EventItemProps {
    event: {
        id?: string;
        title: string;
        image: string;
        date: string;
        description: string;
    };
}

const EventItem: FC<EventItemProps> = ({ event }) => {
    const token = useRouteLoaderData('root') as unknown as string;
    const submit = useSubmit();
    const startDeleteHandler = () => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            submit(null, { method: 'delete' });
        }
    };

    return (
        <article className="max-w-5xl mx-auto my-8 text-center bg-dark p-8">
            <div className="mx-auto" style={{ maxWidth: '500px' }}>
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="text-center mt-4">
                <h1 className="text-3xl text-white font-semibold">{event.title}</h1>
                <time className="text-gray-400 block mt-2">{event.date}</time>
                <p className="text-gray-300 mt-4">{event.description}</p>
            </div>
            {token && (
                <div className="text-center mt-4 flex justify-center items-center">
                    <Link
                        to="edit"
                        className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-300 mr-2"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={startDeleteHandler}
                        className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 ml-2"
                    >
                        Delete
                    </button>
                </div>
            )}
        </article>
    );
};

export default EventItem;
