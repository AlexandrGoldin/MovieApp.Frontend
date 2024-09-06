import React from 'react';
import CallApi from '../../api/api';

const withMoviesHOC = (Component) =>
    class MoviesHOC extends React.Component {
        constructor() {
            super();

            this.state = {
                movies: [],
            };
        }

        getMovies = (filters, page) => {
            const pageSize = 6;
            const { sortBy, primaryReleaseYear, searchTerm,
                withGenres, withCountries } = filters;
            const { updateTotalPages } = this.props;
            const queryStringParams = {
                searchTerm,
                sortBy,
                primaryReleaseYear,
                withGenres,
                withCountries,
                page,
                pageSize,
            };
            if (withGenres.length > 0) {
                queryStringParams.withGenres = withGenres.join(",");
            }
            if (withCountries.length > 0) {
                queryStringParams.withCountries = withCountries.join(",");
            }
            CallApi.get("/api/movies", {
                params: queryStringParams
            }).then(data => {
                this.setState({
                    movies: data.items
                });
                updateTotalPages(data.totalPages);
            }).catch((error) => {
                console.log(error)
            });
        }

        componentDidMount() {

            this.getMovies(this.props.filters, this.props.page);
            console.log("componentDidMount", this.props.filters, this.props.page);
        }

        componentDidUpdate(prevProps) {
            if (this.props.filters !== prevProps.filters) {
                this.props.onChangePage(1);
                this.getMovies(this.props.filters, 1)
            }

            if (this.props.page !== prevProps.page) {
                this.getMovies(this.props.filters, this.props.page)
            }
        }

        render() {
            const { movies } = this.state;
            console.log("--movies--", {movies})
            return (
                <Component movies={movies} />
            );
        }
    }

export default withMoviesHOC;




