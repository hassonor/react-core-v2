import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void
}


const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (dialog.current) {
            if (isOpen) {
                dialog.current.showModal();
            } else {
                dialog.current.close();
            }
        }
    }, [isOpen])

    return createPortal(
        <dialog className="modal" ref={dialog} onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal-root')!
    )
}

export default Modal;

