import React, { useState } from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';
import { ProductData, ShoppingCart } from "./interfaces";
import Product from "./components/Product";
import CartContextProvider, { CartContext } from "./store/shopping-cart-context";

function App() {
    return (
        <CartContextProvider>
            <Header/>
            <Shop>
                {DUMMY_PRODUCTS.map((product: ProductData) => (
                    <li key={product.id}>
                        <Product {...product}/>
                    </li>
                ))}
            </Shop>

        </CartContextProvider>
    );
}

export default App;
