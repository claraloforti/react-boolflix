function SearchBar() {

    return (
        <header>
            <div className="container search-bar">
                <input
                    type="text"
                    placeholder="Cerca un film o serie tv"
                    className="search-input" />
                <button className="search-btn">Cerca</button>
            </div>
        </header>
    );
}

export default SearchBar;