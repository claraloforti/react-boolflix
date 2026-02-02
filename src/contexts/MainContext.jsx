import { createContext, useContext, useState, useParams } from "react";
import axios from "axios"

const MainContext = createContext();

const API_KEY = import.meta.env.REACT_APP_API_KEY;

const endpointMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=it_IT&query=`;

const endpointSeries = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT&query=`;




function MainProvider({ children }) {

    // Variabile di stato per lista dei film e serie tv
    const [movies, setMovies] = useState([]);

    // Variabile di stato per lista delle serie tv
    const [series, setSeries] = useState([]);



    // Funzione che esegue chiamata verso endpointMovies
    function fetchMovies() {
        axios.get(endpointMovies)
            .then(response => setMovies(response.data.results))
            .catch(error => console.log("Errore nella richiesta"));
    }

    // Funzione che esegue chiamata verso endpointSeries
    function fetchSeries() {
        axios.get(endpointSeries)
            .then(response => setSeries(response.data.results))
            .catch(error => console.log("Errore nella richiesta"));
    }



    return ( // Fornisce ai figli l'accesso allo stato e alle funzioni
        <MainContext.Provider
            value={{
                movies, series
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