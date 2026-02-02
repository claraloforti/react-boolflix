// Importo il contesto
import { useMainContext } from "../contexts/MainContext";

import MovieCard from "../components/MovieCard";



function Movies() {

    const { movies, series } = useMainContext(); // Prendo i dati che mi servono dal contesto


    return (
        <main className="container">
            <div className="movies-page">
                <h2>Risultato della ricerca</h2>
                <div className="movies-list">
                    {/* Messaggio da mostrare se non ci sono risultati */}
                    {movies.length === 0 && series.length === 0 && (
                        <p>Nessun risultato</p>
                    )}
                    {movies.map(movie => (
                        <MovieCard key={movie.id}
                            type="movie"
                            data={movie} /> // passo al figlio MovieCard i dati del singolo film
                    ))}
                    {series.map(serie => (
                        <MovieCard key={serie.id}
                            type="series"
                            data={serie} /> // passo al figlio MovieCard i dati della singola serie tv
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Movies;