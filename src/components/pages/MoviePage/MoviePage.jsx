import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams(); // Получаем параметр id из URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7212/api/movies/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.description}</p>
          {/* Добавьте другие детали фильма по вашему усмотрению */}
        </div>
      ) : (
        <div>Фильм не найден</div>
      )}
    </div>
  );
};

export default MoviePage;