import PostsList from "./components/PostsList.tsx";
import MainHeader from "./components/MainHeader.tsx";
import {useState} from "react";

function App() {
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    const showModalHandler = () => {
        setModalIsVisible(true);
    }
    const hideModalHandler = () => {
        setModalIsVisible(false);
    }

    return (
        <><MainHeader onCreatePost={showModalHandler}/>
            <main>
                <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
            </main>
        </>
    )
}

export default App
