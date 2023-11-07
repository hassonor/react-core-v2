import Places from './Places.jsx';
import CustomError from './CustomError.jsx';
import {useEffect, useState} from "react";
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../http.js";

export default function AvailablePlaces({onSelectPlace}) {
    const [isLoading, setIsLoading] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {

        async function fetchPlaces() {
            setIsLoading(true)
            try {
                const places = await fetchAvailablePlaces();

                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude,
                        position.coords.longitude);
                    setAvailablePlaces(sortedPlaces);
                    setIsLoading(false);
                });

            } catch (error) {
                setError({message: error.message || 'Could not fetch places, please try again later.'});
                setIsLoading(false);
            }
        }

        fetchPlaces()
    }, [])

    if (error) {
        return <CustomError title="Something went wrong!" message={error.message}/>
    }

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isLoading}
            loadingText="Fetching place data..."
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}
