import { FC, ReactElement } from "react";
import { Link } from 'react-router-dom';

const PRODUCTS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
    {id: 'p4', title: 'Product 4'},
]

const Products: FC = (): ReactElement => {
    return (<>
        <h1>Products Page </h1>
        <ul>
            {PRODUCTS.map(product => {
                return <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>
            })}
        </ul>
    </>);
}

export default Products;