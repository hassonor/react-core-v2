import { useState, ReactElement } from 'react';
import Counter from './components/Counter/Counter';
import Header from './components/Header';
import { log } from './log';
import ConfigureCounter from "./components/Counter/ConfigureCounter.tsx";

function App(): ReactElement {
    log('<App /> rendered');
    const [chosenCount, setChosenCount] = useState<number>(0);

    function handleSetCount(newCount: number) {
        setChosenCount(newCount);
    }

    return (
        <>
            <Header/>
            <main>
                <ConfigureCounter onSet={handleSetCount}/>
                <Counter initialCount={chosenCount}/>
            </main>
        </>
    );
}

export default App;
