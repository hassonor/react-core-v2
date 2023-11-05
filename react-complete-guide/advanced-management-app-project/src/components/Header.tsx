import React, { useRef } from 'react';
import CartModal, { CartModalHandles } from './CartModal';
import { CartItem } from "../interfaces";

interface Cart {
    items: CartItem[];
}

interface HeaderProps {
    cart: Cart;
    onUpdateCartItemQuantity: (id: string, amount: number) => void;
}

const Header: React.FC<HeaderProps> = ({cart, onUpdateCartItemQuantity}) => {
    const modalRef = useRef<CartModalHandles>(null);

    const cartQuantity = cart.items.length;

    function handleOpenCartClick() {
        modalRef.current?.open();
    }

    let modalActions = <button>Close</button>;

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    }

    return (
        <>
            <CartModal
                ref={modalRef}
                cartItems={cart.items}
                onUpdateCartItemQuantity={onUpdateCartItemQuantity}
                title="Your Cart"
                actions={modalActions}
            />
            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model"/>
                    <h1>Elegant Context</h1>
                </div>
                <p>
                    <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
                </p>
            </header>
        </>
    );
};

export default Header;
