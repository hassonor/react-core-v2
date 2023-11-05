import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

interface CartModalProps {
    cartItems: { id: string; name: string; price: number; quantity: number }[];
    onUpdateCartItemQuantity: (id: string, amount: number) => void;
    title: string;
    actions: React.ReactNode; // if actions are React components or JSX
}

export interface CartModalHandles {
    open: () => void;
}

const CartModal = forwardRef<CartModalHandles, CartModalProps>(function Modal(
    {cartItems, onUpdateCartItemQuantity, title, actions},
    ref
) {
    const dialog = useRef<HTMLDialogElement>(null); // Assumes you are using a <dialog> HTML5 element

    useImperativeHandle(ref, () => ({
        open: () => {
            dialog.current?.showModal();
        },
    }));

    if (!document.getElementById('modal-root')) {
        const div = document.createElement('div');
        div.id = 'modal-root';
        document.body.appendChild(div);
    }

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity}/>
            <form method="dialog" id="modal-actions">
                {actions}
            </form>
        </dialog>,
        document.getElementById('modal-root')!
    );
});

export default CartModal;
