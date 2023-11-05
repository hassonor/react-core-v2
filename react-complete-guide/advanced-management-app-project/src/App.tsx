import { useState } from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';
import { ShoppingCart } from "./interfaces";

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

    return (
        <>
            <Header
                cart={shoppingCart}
                onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
            />
            <Shop onAddItemToCart={handleAddItemToCart}/>
        </>
    );
}

export default App;
