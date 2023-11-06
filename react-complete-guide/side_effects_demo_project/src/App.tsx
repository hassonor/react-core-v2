import { useCallback, useEffect, useRef, useState } from 'react';

import Places from './components/Places';
import { AVAILABLE_PLACES } from './data';
import Modal from './components/Modal';
import DeleteConfirmation from './components/DeleteConfirmation';
import logoImg from './assets/logo.png';
import { Place } from './types';
import { sortPlacesByDistance } from './loc.ts'

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')!) || [];
const storedPlaces = storedIds.map((id: string) => AVAILABLE_PLACES.find(place => place.id === id));

function App() {
    const selectedPlaceId = useRef<string | null>(null);
    const [modalIsOpened, setModalIsOpened] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [pickedPlaces, setPickedPlaces] = useState<Place[]>(storedPlaces);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces: any = sortPlacesByDistance(
                AVAILABLE_PLACES,
                position.coords.latitude,
                position.coords.longitude
            )
            setAvailablePlaces(sortedPlaces);
        })
    }, [])


    function handleStartRemovePlace(id: string) {
        setModalIsOpened(true);
        selectedPlaceId.current = id;
    }

    function handleStopRemovePlace() {
        setModalIsOpened(false);
    }

    function handleSelectPlace(id: string) {
        setPickedPlaces((prevPickedPlaces) => {
            if (prevPickedPlaces.some((place) => place.id === id)) {
                return prevPickedPlaces;
            }
            const place = AVAILABLE_PLACES.find((place) => place.id === id);
            return place ? [place, ...prevPickedPlaces] : prevPickedPlaces;
        });

        const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')!) || [];
        if (storedIds.indexOf(id) === -1) {
            localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]));
        }
    }

    const handleRemovePlace = useCallback(() => {
        if (selectedPlaceId.current !== null) {
            setPickedPlaces((prevPickedPlaces) =>
                prevPickedPlaces.filter((place) => place.id !== selectedPlaceId.current)
            );
        }
        setModalIsOpened(false);

        const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')!) || [];
        localStorage.setItem('selectedPlaces', JSON.stringify(storedIds.filter((id: string) => id !== selectedPlaceId.current)));
    }, []);
    
    return (
        <>
            <Modal isOpen={modalIsOpened} onClose={handleStopRemovePlace}>
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
                    places={availablePlaces}
                    fallbackText="Sorting places by distance..."
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
}

export default App;
