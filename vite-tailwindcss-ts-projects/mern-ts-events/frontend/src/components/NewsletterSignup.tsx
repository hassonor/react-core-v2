import { FC, useEffect } from "react";
import { useFetcher } from 'react-router-dom';

const NewsletterSignup: FC = () => {
    const fetcher = useFetcher();
    const { data, state } = fetcher;

    useEffect(() => {
        if (state === 'idle' && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state])

    return (
        <fetcher.Form method="post" action="/newsletter" className="flex">
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
                className="font-inherit py-1 px-3 border-none"
            />
            <button className="font-inherit py-1 px-3 rounded-tr-md rounded-br-md cursor-pointer hover:bg-primary-300 hover:text-gray-800">
                Sign up
            </button>
        </fetcher.Form>
    );
}

export default NewsletterSignup;
