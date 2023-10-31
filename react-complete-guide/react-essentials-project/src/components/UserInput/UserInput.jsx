import {useState} from "react";

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1500,
        expectedReturn: 5,
        duration: 12
    });


    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p><label>INITIAL INVESTMENT</label>
                    <input type="number" required
                           value={userInput.initialInvestment}
                           onChange={(e) => handleChange('initialInvestment', e.target.value)}/>
                </p>
                <p><label>ANNUAL INVESTMENT</label>
                    <input type="number" required
                           value={userInput.annualInvestment}
                           onChange={(e) => handleChange('annualInvestment', e.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p><label>EXPECTED RETURN</label>
                    <input type="number" required
                           value={userInput.expectedReturn}
                           onChange={(e) => handleChange('expectedReturn', e.target.value)}/></p>
                <p><label>DURATION</label><input type="number" required
                                                 value={userInput.duration}
                                                 onChange={(e) => handleChange('duration', e.target.value)}/></p>
            </div>
        </section>
    )
}