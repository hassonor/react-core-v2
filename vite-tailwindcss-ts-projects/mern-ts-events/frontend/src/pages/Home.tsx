import { FC, ReactElement } from "react";
import PageContent from "../components/PageContent.tsx";

const Home: FC = (): ReactElement => {
    return (
        <PageContent title="Welcome!" className="bg-gradient-to-r from-gray-900 to-black min-h-screen flex items-center justify-center">
            <div className="text-center animate-rotate3d">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Welcome!</h1>
                <p className="text-xl text-white">Browse all our amazing events!</p>
            </div>
        </PageContent>
    )
}

export default Home;
