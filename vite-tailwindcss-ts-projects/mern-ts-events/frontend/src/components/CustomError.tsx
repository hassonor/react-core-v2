import React from 'react';

interface CustomErrorProps {
    title: string;
    message: string;
    onConfirm?: () => void;
}

const CustomError: React.FC<CustomErrorProps> = ({title, message, onConfirm}) => {
    return (
        <div className="max-w-xl mx-auto p-4 bg-red-100 text-red-800">
            <h2 className="text-2xl">{title}</h2>
            <p className="mt-2">{message}</p>
            {onConfirm && (
                <div className="mt-4 flex justify-end gap-4">
                    <button onClick={onConfirm} className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded shadow">
                        Okay
                    </button>
                </div>
            )}
        </div>
    );
};

export default CustomError;
