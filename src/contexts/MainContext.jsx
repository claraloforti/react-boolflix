import { createContext, useContext, useState } from "react";
import axios from "axios"

const MainContext = createContext();

const key = import.meta.env.VITE_API_KEY;



function MainProvider({ children }) {

    // Variabile di stato per lista dei film
    const [movies, setMovies] = useState([]);
    // Variabile di stato per lista delle serie tv
    const [series, setSeries] = useState([]);

    // Endpoints
    const endpointMovies = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=`;
    const endpointSeries = `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=`;




    // Funzione che esegue chiamata verso endpointMovies
    function fetchMovies(query) {
        if (!query) return; // Non andare avanti se la query è vuota

        axios.get(endpointMovies + encodeURIComponent(query)) // converte la query in un formato adatto all'URL
            .then(response => {
                console.log(response.data);
                setMovies(response.data.results || []);
            })
            .catch(error => console.log("Errore nella richiesta"));
    }

    // Funzione che esegue chiamata verso endpointSeries
    function fetchSeries(query) {
        if (!query) return;

        axios.get(endpointSeries + encodeURIComponent(query))
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