function MovieCard({ data, type }) {

    const title = type === "movie" ? data.title : data.name;
    const originalTitle = type === "movie" ? data.original_title : data.original_name;
    const flags = {
        en: "🇬🇧",
        it: "🇮🇹",
        fr: "🇫🇷",
        es: "🇪🇸",
        de: "🇩🇪",
        ja: "🇯🇵",
        ru: "🇷🇺",
        hi: "🇮🇳",
        ko: "🇰🇷"
    };

    // Valori da mostrare per la lingua e per il voto
    const flag = flags[data.original_language] || data.original_language; // Stampo l'emoji se corrisponde a un valore della proprietà original_language, altrimenti stampo il valore
    const starsVote = Math.ceil(data.vote_average / 2); // Divido per due il valore del voto ottenuto dall'API e l'arrotondo per eccesso
    const stars = "★".repeat(starsVote) + "☆".repeat(5 - starsVote); // Mostro 5 stelle: stelle piene in base al valore di "starsVote" e le vuote si adattano di conseguenza


    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                alt={title}
                className="movie-img" />
            <div className="overlay-info">
                <h4>Titolo: {title}</h4>
                <p>Titolo originale: {originalTitle}</p>
                <p>Lingua: {flag}</p>
                <p>Voto: {stars}</p>
                <p>Overview: {data.overview}</p>
            </div>
        </div>
    );
}

export default MovieCard;