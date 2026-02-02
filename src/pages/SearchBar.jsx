import { useState } from "react";
// Importo hook del contesto
import { useMainContext } from "../contexts/MainContext";

function SearchBar() {

    // Var di stato per gestire input utente
    const [input, setInput] = useState("");
    // Utilizzo l'hook per estrarre dal contesto le due funzioni
    const { fetchMovies, fetchSeries } = useMainContext();

    // Funzione per gestire il click sul bottone Cerca
    const handleSearch = () => {
        const query = input.trim();
        if (!query) return; // Non andare avanti se l'input è vuoto
        fetchMovies(query); // Chiamo funzioni del contesto per cercare film e serie
        fetchSeries(query);
        setInput(""); // al click svuota in campo input
    };

    return (
        <header>
            <div className="container search-bar">
                <input
                    type="text"
                    value={input}
                    placeholder="Cerca un film o serie tv"
                    className="search-input"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={handleSearch}>
                    Cerca</button>
            </div>
        </header>
    );
}

export default SearchBar;