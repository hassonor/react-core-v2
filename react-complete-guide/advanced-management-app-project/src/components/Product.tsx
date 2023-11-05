import React from 'react';

interface ProductProps {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
    onAddToCart: (id: string) => void;
}

const Product: React.FC<ProductProps> = ({
                                             id,
                                             image,
                                             title,
                                             price,
                                             description,
                                             onAddToCart,
                                         }) => {
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
                    <button onClick={() => onAddToCart(id)}>Add to Cart</button>
                </p>
            </div>
        </article>
    );
};

export default Product;
