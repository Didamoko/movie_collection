import { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !genre.trim() || !year) {
      alert('Заполните все поля!');
      return;
    }

    onAddMovie({
      title: title.trim(),
      genre: genre.trim(),
      year: parseInt(year),
      rating: 3
    });

    setTitle('');
    setGenre('');
    setYear('');
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название фильма"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Жанр"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Год"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        min="1900"
        max="2026"
      />
      <button type="submit"> Добавить фильм</button>
    </form>
  );
}

export default MovieForm;