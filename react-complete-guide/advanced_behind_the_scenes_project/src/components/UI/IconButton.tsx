import { log } from '../../log';
import React, { ReactElement, ReactNode } from 'react';

type IconButtonProps = {
    children: ReactNode;
    icon: React.ElementType;
    onClick: () => void;
};

export default function IconButton({children, icon, ...props}: IconButtonProps): ReactElement {
    log('<IconButton /> rendered', 2);

    const Icon = icon;
    return (
        <button {...props} className="button">
            <Icon className="button-icon"/>
            <span className="button-text">{children}</span>
        </button>
    );
}
