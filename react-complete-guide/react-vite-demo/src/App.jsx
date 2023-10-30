import {useState} from 'react';

import {CORE_CONCEPTS, EXAMPLES} from "./data";
import CoreConcept from "./components/CoreConcepts/CoreConcepts";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";


function App() {

    const [selectedTopic, setSelectedTopic] = useState(null);

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(concept => {
                            return (
                                <CoreConcept key={concept.title} {...concept}/>
                            );
                        })}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClick={() => handleSelect("components")}
                                   isSelected={selectedTopic === "components"}>Components</TabButton>
                        <TabButton onClick={() => handleSelect("jsx")}
                                   isSelected={selectedTopic === "jsx"}>JSX</TabButton>
                        <TabButton onClick={() => handleSelect("props")}
                                   isSelected={selectedTopic === "props"}>Props</TabButton>
                        <TabButton onClick={() => handleSelect("state")}
                                   isSelected={selectedTopic === "state"}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </div>
    );
}

export default App;
