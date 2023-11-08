import React from 'react';

interface CustomErrorProps {
    title: string;
    message: string;
    onConfirm?: () => void;
}

const CustomError: React.FC<CustomErrorProps> = ({title, message, onConfirm}) => {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
            {onConfirm && (
                <div id="confirmation-actions">
                    <button onClick={onConfirm} className="button">
                        Okay
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomError;
