import { useRef, useState } from 'react';

import Places from './components/Places';
import { AVAILABLE_PLACES } from './data';
import Modal from './components/Modal';
import DeleteConfirmation from './components/DeleteConfirmation';
import logoImg from './assets/logo.png';
import { Place } from './types';

interface ModalMethods {
    open: () => void;
    close: () => void;
}

function App() {
    const modalRef = useRef<ModalMethods>(null);
    const selectedPlaceId = useRef<string | null>(null);
    const [pickedPlaces, setPickedPlaces] = useState<Place[]>([]);

    function handleStartRemovePlace(id: string) {
        modalRef.current?.open();
        selectedPlaceId.current = id;
    }

    function handleStopRemovePlace() {
        modalRef.current?.close();
    }

    function handleSelectPlace(id: string) {
        setPickedPlaces((prevPickedPlaces) => {
            if (prevPickedPlaces.some((place) => place.id === id)) {
                return prevPickedPlaces;
            }
            const place = AVAILABLE_PLACES.find((place) => place.id === id);
            return place ? [place, ...prevPickedPlaces] : prevPickedPlaces;
        });
    }

    function handleRemovePlace() {
        if (selectedPlaceId.current !== null) {
            setPickedPlaces((prevPickedPlaces) =>
                prevPickedPlaces.filter((place) => place.id !== selectedPlaceId.current)
            );
        }
        modalRef.current?.close();
    }

    return (
        <>
            <Modal ref={modalRef}>
                <DeleteConfirmation
                    onCancel={handleStopRemovePlace}
                    onConfirm={handleRemovePlace}
                />
            </Modal>

            <header>
                <img src={logoImg} alt="Stylized globe"/>
                <h1>PlacePicker</h1>
                <p>Create your personal collection of places you would like to visit or you have visited.</p>
            </header>
            <main>
                <Places
                    title="I'd like to visit ..."
                    fallbackText="Select the places you would like to visit below."
                    places={pickedPlaces}
                    onSelectPlace={handleStartRemovePlace}
                />
                <Places
                    title="Available Places"
                    places={AVAILABLE_PLACES}
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
}

export default App;
