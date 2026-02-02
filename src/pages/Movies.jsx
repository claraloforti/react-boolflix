// Importo il contesto
import { useMainContext } from "../contexts/MainContext";

function Movies() {

    return (
        <main>
            <div className="container movies-page">
                <h2>Risultato della ricerca</h2>
                <div id="movies-list"></div>
            </div>
        </main>
    );
}

export default Movies;