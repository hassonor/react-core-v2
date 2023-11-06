import { log } from '../../../log';
import React from 'react';

interface PlusIconProps extends React.SVGProps<SVGSVGElement> {
}

const PlusIcon: React.FC<PlusIconProps> = (props) => {
    log('<PlusIcon /> rendered', 3);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            {...props} // spread the props to pass all SVG attributes
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
            />
        </svg>
    );
}

export default PlusIcon;
