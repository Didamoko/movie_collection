import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';
import Filter from '../components/Filter';

function HomePage() {
  // Загрузка из LocalStorage при монтировании
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem('myMovies');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Начало', rating: 5, genre: 'Фантастика', year: 2010 },
      { id: 2, title: 'Побег из Шоушенка', rating: 5, genre: 'Драма', year: 1994 },
      { id: 3, title: 'Тёмный рыцарь', rating: 4, genre: 'Боевик', year: 2008 },
    ];
  });

  const [filterGenre, setFilterGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect: сохранение в LocalStorage при каждом изменении movies
  useEffect(() => {
    localStorage.setItem('myMovies', JSON.stringify(movies));
    console.log('Фильмы сохранены в LocalStorage!');
  }, [movies]); 

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
    <div>
      <h1> Моя коллекция фильмов</h1>
      <p className="subtitle">Всего фильмов: {movies.length}</p>
      
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

export default HomePage;