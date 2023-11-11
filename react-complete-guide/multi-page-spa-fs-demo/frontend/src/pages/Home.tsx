import { FC, ReactElement } from "react";
import PageContent from "../components/PageContent.tsx";

const Home: FC = (): ReactElement => {


    return (
        <PageContent title="Welcome!">
            <p>Browse all our amazing events!</p>
        </PageContent>
    )
}

export default Home;