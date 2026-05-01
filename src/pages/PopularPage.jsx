import { useState, useEffect } from 'react';

function PopularPage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Демо-данные вместо API
  useEffect(() => {
    setTimeout(() => {
      const demoMovies = [
        { id: 1, title: 'Дюна: Часть вторая', rating: 5, genre: 'Фантастика', year: 2024, overview: 'Продолжение эпической саги...' },
        { id: 2, title: 'Оппенгеймер', rating: 5, genre: 'Драма', year: 2023, overview: 'История создателя атомной бомбы...' },
        { id: 3, title: 'Барби', rating: 4, genre: 'Комедия', year: 2023, overview: 'Барби отправляется в реальный мир...' },
        { id: 4, title: 'Гладиатор 2', rating: 4, genre: 'Боевик', year: 2024, overview: 'Продолжение легендарного фильма...' },
        { id: 5, title: 'Вонка', rating: 4, genre: 'Приключения', year: 2023, overview: 'История молодого Вилли Вонки...' },
      ];
      setPopularMovies(demoMovies);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="loading"> Загрузка популярных фильмов...</div>;
  }

  return (
    <div>
      <h1> Популярные фильмы</h1>
      <p className="subtitle">Топ фильмов (демо-данные)</p>
      
      <div className="popular-grid">
        {popularMovies.map(movie => (
          <div key={movie.id} className="popular-card">
            <div className="popular-info">
              <h3>{movie.title}</h3>
              <p> {movie.year} |  {movie.rating}/5 |  {movie.genre}</p>
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularPage;