import { log } from '../../../log.ts';
import React from "react";

interface MinusIconProps extends React.SVGProps<SVGSVGElement> {
}

const MinusIcon: React.FC<MinusIconProps> = (props) => {
    log('<MinusIcon /> rendered', 3);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            {...props} // spread the props to pass all SVG attributes
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/>
        </svg>
    );
}

export default MinusIcon;