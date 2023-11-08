import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Home: FC = (): ReactElement => {
    return (
        <>
            <h1> My Home Page</h1>
            <Link to="/products">the list of products</Link>
        </>
    )
}

export default Home;