import { useState, FC, useCallback, useMemo } from 'react';

import IconButton from '../UI/IconButton';
import MinusIcon from '../UI/Icons/MinusIcon';
import PlusIcon from '../UI/Icons/PlusIcon';
import CounterOutput from './CounterOutput';
import { log } from '../../log';

interface CounterProps {
    initialCount: number;
}

// isPrime function typed with parameter and return type
const isPrime = (number: number): boolean => {
    log('Calculating if is prime number', 2, 'other');
    if (number <= 1) {
        return false;
    }

    const limit = Math.sqrt(number);

    for (let i = 2; i <= limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

// Counter component typed with FC (Function Component) and CounterProps
const Counter: FC<CounterProps> = (({initialCount}) => {
    log('<Counter /> rendered', 1);

    const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

    const [counter, setCounter] = useState(initialCount);

    const handleDecrement = useCallback(() => {
        setCounter((prevCounter) => prevCounter - 1);
    }, []);

    const handleIncrement = useCallback(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, []);

    return (
        <section className="counter">
            <p className="counter-info">
                The initial counter value was <strong>{initialCount}</strong>. It{' '}
                <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
            </p>
            <p>
                <IconButton icon={MinusIcon} onClick={handleDecrement}>
                    Decrement
                </IconButton>
                <CounterOutput value={counter}/>
                <IconButton icon={PlusIcon} onClick={handleIncrement}>
                    Increment
                </IconButton>
            </p>
        </section>
    );
});

export default Counter;
