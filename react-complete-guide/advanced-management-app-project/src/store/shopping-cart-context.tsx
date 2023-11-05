import { createContext } from 'react';
import { CartItem } from "../interfaces";


interface CartContextType {
    items: CartItem[];
    addItemToCart: (id: string) => void;
    updateCartItemQuantity: (productId: string, amount: number) => void
}


export const CartContext = createContext<CartContextType>({
    items: [], addItemToCart: () => {
    }, updateCartItemQuantity: () => {

    }
});


