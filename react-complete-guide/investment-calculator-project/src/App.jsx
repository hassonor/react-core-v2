import {useState} from "react";
import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Results from "./components/Results/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1500,
        expectedReturn: 5,
        duration: 12
    });

    const inputIsValid = userInput.duration >= 1


    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header/>
            <UserInput onChange={handleChange} userInput={userInput}/>
            {!inputIsValid && <p className="center">Duration must be greater than 0</p>}
            {inputIsValid && <Results userInput={userInput}/>}
        </>
    )
}

export default App
