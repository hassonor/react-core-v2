import React, {ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import classes from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({children}) => {
    const navigate = useNavigate();
    const closeHandler = () => {
        navigate('..');
    }
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
};

export default Modal;
