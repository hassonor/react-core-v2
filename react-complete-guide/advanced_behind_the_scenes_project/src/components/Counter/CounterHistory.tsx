import { useState, FC } from 'react';
import { log } from '../../log';

interface HistoryItemProps {
    count: number;
}

interface CounterHistoryProps {
    history: number[];
}

const HistoryItem: FC<HistoryItemProps> = ({count}) => {
    log('<HistoryItem /> rendered', 3);

    const [selected, setSelected] = useState(false);

    function handleClick() {
        setSelected(prevSelected => !prevSelected);
    }

    return (
        <li onClick={handleClick} className={selected ? 'selected' : ''}>
            {count}
        </li>
    );
};

const CounterHistory: FC<CounterHistoryProps> = ({history}) => {
    log('<CounterHistory /> rendered', 2);

    return (
        <ol>
            {history.map((count, index) => (
                <HistoryItem key={index} count={count}/>
            ))}
        </ol>
    );
};

export default CounterHistory;
