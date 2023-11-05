import React from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';
import Product from './Product';

// Assuming each product in DUMMY_PRODUCTS has this shape
interface ProductData {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
}

// Define the type for the props expected by the Shop component
interface ShopProps {
    onAddItemToCart: (id: string) => void; // or any other parameters the function might take
}

const Shop: React.FC<ShopProps> = ({onAddItemToCart}) => {
    return (
        <section id="shop">
            <h2>Elegant Clothing For Everyone</h2>

            <ul id="products">
                {DUMMY_PRODUCTS.map((product: ProductData) => (
                    <li key={product.id}>
                        <Product {...product} onAddToCart={onAddItemToCart}/>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Shop;
