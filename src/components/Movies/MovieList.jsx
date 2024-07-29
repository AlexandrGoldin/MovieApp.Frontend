import React from 'react';
import MovieItem from "./MovieItem";
import PropTypes from "prop-types";
import MoviesHOC from "./MoviesHOC";

const MovieList = ({movies = []}) => (
    <div className='row'>
    {movies?.map(movie => {
        return (
            <div key={movie.movieId} className='col-6 mb-4'>
                <MovieItem item={movie} />
            </div>
        );
    })}
</div>
)

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesHOC(MovieList);
