// Update the return type to reflect the new consistent shape
export async function fetchEvents(): Promise<any> {
    try {
        const response = await fetch('http://localhost:8080/events');
        if (!response.ok) {
            throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});

        } else {
            // If the response is ok, return the response
            return response;
        }
    } catch (error) {
        // In case of a network or other fetch-related error, return an error object
        return {isError: true, message: error instanceof Error ? error.message : 'An unknown error occurred'};
    }
}

export async function eventsLoader() {
    return await fetchEvents();
}