import { FC } from 'react';
import {
    useNavigate,
    useNavigation,
    Form,
    useActionData,
} from 'react-router-dom';
import { TEvent } from '../types/types.ts';

interface EventFormProps {
    event?: TEvent;
    method: 'post' | 'patch';
}

const EventForm: FC<EventFormProps> = ({ method, event }) => {
    const data = useActionData() as unknown as any;
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form
            method={method}
            className="max-w-xl mx-auto my-8 bg-gray-800 shadow-lg p-6 rounded-lg"
        >
            {data && data.errors && (
                <ul>
                    {Object.values(data.errors).map((err: any) => (
                        <li key={err} className="text-red-400">
                            {err}
                        </li>
                    ))}
                </ul>
            )}
            <div className="mb-4">
                <label htmlFor="title" className="block">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    defaultValue={event ? event.title : ''}
                    required
                    className="w-full p-1"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block">
                    Image
                </label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    defaultValue={event ? event.image : ''}
                    required
                    className="w-full p-1"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block">
                    Date
                </label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    defaultValue={event ? event.date : ''}
                    required
                    className="w-full p-1"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={event ? event.description : ''}
                    rows={5}
                    required
                    className="w-full p-1"
                ></textarea>
            </div>
            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={cancelHandler}
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded bg-gray-300 text-gray-800"
                >
                    Cancel
                </button>
                <button
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded bg-primary-300 text-white"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </Form>
    );
};

export default EventForm;
