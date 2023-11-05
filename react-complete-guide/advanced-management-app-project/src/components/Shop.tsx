import React from 'react';

interface ShopProps {
    children: React.ReactNode;
}

const Shop: React.FC<ShopProps> = ({children}) => {
    return (
        <section id="shop">
            <h2>Elegant Clothing For Everyone</h2>

            <ul id="products">{children}</ul>
        </section>
    );
};

export default Shop;
