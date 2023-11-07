import React, { ChangeEvent, useState } from "react";
import { log } from "../../log.ts";


interface ConfigureCounterProps {
    onSet: (count: number) => void;
}

const ConfigureCounter: React.FC<ConfigureCounterProps> = ({onSet}) => {
    log('<ConfigureCounter />', 1);
    const [enteredNumber, setEnteredNumber] = useState<number>(0);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setEnteredNumber(+event.target.value);
    }

    function handleSetClick() {
        onSet(enteredNumber);
        setEnteredNumber(0);
    }

    return (<section id="configure-counter">
        <h2>Set Counter</h2>
        <input type="number" onChange={handleChange} value={enteredNumber}/>
        <button onClick={handleSetClick}>Set</button>
    </section>)
}

export default ConfigureCounter;