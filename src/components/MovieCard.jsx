function MovieCard({ movie, onDelete, onUpdateRating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= movie.rating ? 'filled' : ''}`}
          onClick={() => onUpdateRating(movie.id, i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>🎭 {movie.genre} | 📅 {movie.year}</p>
        <div className="rating">
          Рейтинг: {renderStars()}
        </div>
      </div>
      <button className="delete-btn" onClick={() => onDelete(movie.id)}>
        🗑️ Удалить
      </button>
    </div>
  );
}

export default MovieCard;