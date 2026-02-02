function MovieCard({ data, type }) {

    const title = type === "movie" ? data.title : data.name;
    const originalTitle = type === "movie" ? data.original_title : data.original_name;


    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                alt={title}
                className="movie-img" />
            <h3>{title}</h3>
            <p>Titolo originale: {originalTitle}</p>
            <p>Lingua: {data.original_language}</p>
            <p>Voto: {data.vote_average}</p>
        </div>
    );
}

export default MovieCard;