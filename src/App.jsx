import { useState } from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Начало', rating: 5, genre: 'Фантастика', year: 2010 },
    { id: 2, title: 'Побег из Шоушенка', rating: 5, genre: 'Драма', year: 1994 },
    { id: 3, title: 'Тёмный рыцарь', rating: 4, genre: 'Боевик', year: 2008 },
  ]);

  const [filterGenre, setFilterGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const updateRating = (id, newRating) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, rating: newRating } : movie
    ));
  };

  const filteredMovies = movies.filter(movie => {
    const matchGenre = filterGenre === 'all' || movie.genre === filterGenre;
    const matchSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <div className="app">
      <h1>🎬 Моя коллекция фильмов</h1>
      
      <MovieForm onAddMovie={addMovie} />
      
      <Filter 
        filterGenre={filterGenre}
        setFilterGenre={setFilterGenre}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <MovieList 
        movies={filteredMovies}
        onDeleteMovie={deleteMovie}
        onUpdateRating={updateRating}
      />
    </div>
  );
}

export default App;