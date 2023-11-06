import { log } from '../../../log.ts';

interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = (props) => {
    log('<ArrowRightIcon /> rendered', 3);

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
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
        </svg>
    );
}

export default ArrowRightIcon;