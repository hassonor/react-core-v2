import { FC, ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home: FC = (): ReactElement => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return (
        <>
            <h1> My Home Page</h1>
            <p> Go to <Link to="/products">the list of products</Link></p>
            <p>
                <button onClick={navigateHandler}>Navigate to Products</button>
            </p>
        </>
    )
}

export default Home;