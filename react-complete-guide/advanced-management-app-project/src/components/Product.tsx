import React, { useContext } from 'react';
import { CartContext } from "../store/shopping-cart-context";

interface ProductProps {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
}

const Product: React.FC<ProductProps> = ({
                                             id,
                                             image,
                                             title,
                                             price,
                                             description
                                         }) => {

    const {addItemToCart} = useContext(CartContext);

    return (
        <article className="product">
            <img src={image} alt={title}/>
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className='product-price'>${price.toFixed(2)}</p> {/* Assuming price is a number */}
                    <p>{description}</p>
                </div>
                <p className='product-actions'>
                    <button onClick={() => addItemToCart(id)}>Add to Cart</button>
                </p>
            </div>
        </article>
    );
};

export default Product;
