import React, { useState } from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';
import { ProductData, ShoppingCart } from "./interfaces";
import Product from "./components/Product";
import { CartContext } from "./store/shopping-cart-context";

function App() {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
        items: [],
    });

    function handleAddItemToCart(id: string): void {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];

            const existingCartItemIndex = updatedItems.findIndex(
                (cartItem) => cartItem.id === id
            );
            const existingCartItem = updatedItems[existingCartItemIndex];

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                const product = DUMMY_PRODUCTS.find((product) => product.id === id);
                if (product) {
                    updatedItems.push({
                        id: id,
                        name: product.title,
                        price: product.price,
                        quantity: 1,
                    });
                }
            }

            return {
                items: updatedItems,
            };
        });
    }

    function handleUpdateCartItemQuantity(productId: string, amount: number): void {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
            );

            if (updatedItemIndex < 0) return prevShoppingCart; // or handle the error

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
                quantity: updatedItems[updatedItemIndex].quantity + amount,
            };

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
            };
        });
    }

    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: handleAddItemToCart,
        updateCartItemQuantity: handleUpdateCartItemQuantity
    }

    return (
        <CartContext.Provider value={ctxValue}>
            <Header/>
            <Shop>
                {DUMMY_PRODUCTS.map((product: ProductData) => (
                    <li key={product.id}>
                        <Product {...product}/>
                    </li>
                ))}
            </Shop>

        </CartContext.Provider>
    );
}

export default App;
