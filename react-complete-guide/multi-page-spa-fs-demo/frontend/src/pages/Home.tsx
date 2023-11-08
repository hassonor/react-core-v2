import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Home: FC = (): ReactElement => {


    return (
        <>
            <h1> My Home Page</h1>
            <p> Go to <Link to="/events">the list of events</Link></p>
        </>
    )
}

export default Home;