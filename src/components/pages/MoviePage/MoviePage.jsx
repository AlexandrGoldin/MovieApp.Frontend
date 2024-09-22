import React from "react"; 
import CallApi from '../../../api/api';
import { useParams } from 'react-router-dom';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    // Инициализируем состояние для хранения деталей фильма и состояния загрузки
    this.state = {
      movieDetails: null,
      loading: true,
      error: null
    };
  }

  // Когда компонент монтируется, выполняем запрос к API
  componentDidMount() {
    const { id } = this.props.params;
    
    // Запрашиваем данные о фильме по id
    CallApi.getById(`/api/movies/${id}`)
      .then((data) => {
        // Обновляем состояние, чтобы сохранить данные о фильме
        this.setState({ movieDetails: data, loading: false });
      })
      .catch((error) => {
        // В случае ошибки обновляем состояние с информацией об ошибке
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { movieDetails, loading, error } = this.state;

    if (loading) {
      return <div>Загрузка...</div>;
    }

    if (error) {
      return <div>Ошибка: {error}</div>;
    }

    // Если детали фильма загружены, выводим их на экран
    return (
      <div>
        {movieDetails ? (
          <div>
            <h1>{movieDetails.title}</h1>
            <img src={movieDetails.pictureUri} alt={movieDetails.title} />
            <p><strong>О фильме:</strong> {movieDetails.overview}</p>
            <p><strong>Описание:</strong> {movieDetails.description}</p>
            <p><strong>Страна:</strong> {movieDetails.countryName}</p>
            <p><strong>Жанр:</strong> {movieDetails.genreName}</p>
            <p><strong>Рейтинг:</strong> {movieDetails.rating}</p>
            <p><strong>Дата выхода:</strong> {movieDetails.releaseDate}</p>
            <p><strong>Цена:</strong> {movieDetails.price} USD</p>
            {/* Добавьте другие детали фильма при необходимости */}
          </div>
        ) : (
          <div>Фильм не найден</div>
        )}
      </div>
    );
  }
}

// Компонент с использованием хука useParams для передачи параметров в класс
const MoviePageWithParams = (props) => (
  <MoviePage
    {...props}
    params={useParams()}
  />
);

export default MoviePageWithParams;


