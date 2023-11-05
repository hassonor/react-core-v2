import React, { useContext, useRef } from 'react';
import CartModal, { CartModalHandles } from './CartModal';
import { CartContext } from "../store/shopping-cart-context";


const Header: React.FC = () => {
    const modalRef = useRef<CartModalHandles>(null);

    const {items} = useContext(CartContext);

    const cartQuantity = items.length;

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
