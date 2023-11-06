import { useState, ChangeEvent, ReactElement } from 'react';
import Counter from './components/Counter/Counter';
import Header from './components/Header';
import { log } from './log';

function App(): ReactElement {
    log('<App /> rendered');

    const [enteredNumber, setEnteredNumber] = useState<number>(0);
    const [chosenCount, setChosenCount] = useState<number>(0);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setEnteredNumber(+event.target.value);
    }

    function handleSetClick() {
        setChosenCount(enteredNumber);
        setEnteredNumber(0);
    }

    return (
        <>
            <Header/>
            <main>
                <section id="configure-counter">
                    <h2>Set Counter</h2>
                    <input type="number" onChange={handleChange} value={enteredNumber}/>
                    <button onClick={handleSetClick}>Set</button>
                </section>
                <Counter initialCount={chosenCount}/>
            </main>
        </>
    );
}

export default App;
