import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
}

// You need to specify the type of methods you're exposing through the ref.
export interface ModalHandles {
    open: () => void;
    close: () => void;
}

const Modal = forwardRef<ModalHandles, ModalProps>((props, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            if (dialog.current) {
                dialog.current.showModal();
            }
        },
        close: () => {
            if (dialog.current) {
                dialog.current.close();
            }
        },
    }));

    return createPortal(
        <dialog className="modal" ref={dialog}>
            {props.children}
        </dialog>,
        document.getElementById('modal-root') as HTMLElement
    );
});

export default Modal;
