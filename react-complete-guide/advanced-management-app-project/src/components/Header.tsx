import React, { useRef } from 'react';
import CartModal, { CartModalHandles } from './CartModal';
import { CartItem } from "../interfaces";


// Define the shape of the cart
interface Cart {
    items: CartItem[];
}

// Define the props expected by the Header component
interface HeaderProps {
    cart: Cart;
    onUpdateCartItemQuantity: (id: string, amount: number) => void;
}

const Header: React.FC<HeaderProps> = ({cart, onUpdateCartItemQuantity}) => {
    // Correctly type the modal ref to use the CartModalHandles interface
    const modalRef = useRef<CartModalHandles>(null);

    const cartQuantity = cart.items.length;

    function handleOpenCartClick() {
        // Use optional chaining to safely call the open method
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
