import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';
import Button from "./Button";

interface ModalProps {
    children: React.ReactNode;
    buttonCaption: string;
}

const Modal = forwardRef<unknown, ModalProps>(({children, buttonCaption}, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
        open() {
            if (dialog.current) {
                dialog.current.showModal();
            }
        }
    }));

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button type="submit">{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById("modal")!
    );
});

export default Modal;
