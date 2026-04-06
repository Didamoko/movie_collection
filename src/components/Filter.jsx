function Filter({ filterGenre, setFilterGenre, searchQuery, setSearchQuery }) {
  const genres = ['all', 'Фантастика', 'Драма', 'Боевик', 'Комедия', 'Триллер'];

  return (
    <div className="filter-section">
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      
      <div className="genre-filters">
        {genres.map(genre => (
          <button
            key={genre}
            className={`genre-btn ${filterGenre === genre ? 'active' : ''}`}
            onClick={() => setFilterGenre(genre)}
          >
            {genre === 'all' ? 'Все' : genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;