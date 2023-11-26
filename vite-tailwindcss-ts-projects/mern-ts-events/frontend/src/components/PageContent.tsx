import { FC, ReactElement, ReactNode } from "react";

interface PageContentProps {
    title: string;
    children: ReactNode;
    className?: string;
}

const PageContent: FC<PageContentProps> = ({ title, children, className }): ReactElement => {
    return (
        <div className={`text-center ${className}`}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageContent;
