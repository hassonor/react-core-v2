import { FC } from 'react';
import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

const AuthForm: FC = () => {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login' || searchParams.get('mode') === null;
    const data = useActionData() as unknown as any;
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    return (
        <>
            <Form method="post" className="mx-4 sm:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full bg-gray-800 shadow-lg p-6 rounded-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6">{isLogin ? 'Log in' : 'Create a new user'}</h1>
                {data && data.errors && (
                    <ul>
                        {Object.values(data.errors).map((err: any) => (
                            <li key={err} className="text-red-400">{err}</li>
                        ))}
                    </ul>
                )}
                {data && data.message && <p className="text-white">{data.message}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block w-full text-sm font-medium text-gray-300">Email</label>
                    <input id="email" type="email" name="email" required className="block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block w-full text-sm font-medium text-gray-300">Password</label>
                    <input id="password" type="password" name="password" required className="block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"/>
                </div>
                <div className="flex gap-4 justify-end items-center">
                    <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} className="text-blue-400 hover:text-blue-300">
                        {isLogin ? 'Create new user' : 'Login'}
                    </Link>
                    <button disabled={isSubmitting} className="px-4 sm:px-6 py-2 text-sm sm:text-base rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50">
                        {isSubmitting ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </Form>
        </>
    );
}

export default AuthForm;
