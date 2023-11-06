import { createContext, ReactNode, useReducer } from 'react';
import { CartItem, ShoppingCart } from "../interfaces";
import { DUMMY_PRODUCTS } from "../dummy-products";


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

interface CartContextProviderProps {
    children: ReactNode;
}

function shoppingCartReducer(state: ShoppingCart, action: { type: string, payload: any }) {
    if (action.type === "ADD_ITEM") {
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            if (product) {
                updatedItems.push({
                    id: action.payload,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                });
            }
        }
        return {
            ...state, // this is not needed here because we have only one value
            items: updatedItems,
        };
    }
    if (action.type === "UPDATE_ITEM") {
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
        );

        if (updatedItemIndex < 0) return state; // or handle the error

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
            quantity: updatedItems[updatedItemIndex].quantity + action.payload.amount,
        };

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };
    }
    return state;
}

export default function CartContextProvider({children}: CartContextProviderProps) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
        items: []
    });


    function handleAddItemToCart(id: string): void {
        shoppingCartDispatch({
            type: "ADD_ITEM",
            payload: id
        })

    }

    function handleUpdateCartItemQuantity(productId: string, amount: number): void {
        shoppingCartDispatch({
            type: "UPDATE_ITEM",
            payload: {productId, amount}
        })
    }

    const ctxValue = {
        items: shoppingCartState.items,
        addItemToCart: handleAddItemToCart,
        updateCartItemQuantity: handleUpdateCartItemQuantity
    }

    return <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
}


