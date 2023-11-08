import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Products: FC = (): ReactElement => {
    return (<>
        <h1>Products Page </h1>
        <Link to="/">Home Page</Link>
    </>);
}

export default Products;