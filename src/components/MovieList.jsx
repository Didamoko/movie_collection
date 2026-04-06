import MovieCard from './MovieCard';
import EmptyState from './EmptyState';

function MovieList({ movies, onDeleteMovie, onUpdateRating }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <EmptyState />
      ) : (
        movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={onDeleteMovie}
            onUpdateRating={onUpdateRating}
          />
        ))
      )}
    </div>
  );
}

export default MovieList;