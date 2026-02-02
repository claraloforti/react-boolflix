import { createContext, useContext, useState } from "react";
import axios from "axios"

const MainContext = createContext();

const key = import.meta.env.VITE_API_KEY;

console.log("Chiave API:", key);


function MainProvider({ children }) {

    // Variabile di stato per lista dei film
    const [movies, setMovies] = useState([]);
    // Variabile di stato per lista delle serie tv
    const [series, setSeries] = useState([]);


    // Funzione che esegue chiamata verso endpointMovies
    function fetchMovies(query) {
        if (!query) return; // non andare avanti se la query è vuota
        const endpointMovies = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(query)}`;

        axios.get(endpointMovies)
            .then(response => {
                console.log(response.data);
                setMovies(response.data.results || []);
            })

            .catch(error => console.log("Errore nella richiesta"));
    }

    // Funzione che esegue chiamata verso endpointSeries
    function fetchSeries(query) {
        if (!query) return;
        const endpointSeries = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${encodeURIComponent(query)}`;

        axios.get(endpointSeries)
            .then(response => setSeries(response.data.results))
            .catch(error => console.log("Errore nella richiesta"));
    }


    return ( // Fornisce ai figli l'accesso allo stato e alle funzioni
        <MainContext.Provider
            value={{
                movies, series, fetchMovies, fetchSeries
            }}
        >
            {children}
        </MainContext.Provider>
    );
}


// Hook per utilizzare il contesto
function useMainContext() {
    return useContext(MainContext);
}

// Export del provider e dell’hook
export { MainProvider, useMainContext }