import React from 'react';
import { API_URL } from '../../api/api';
import queryString from 'query-string';

const withMoviesHOC = (Component) => 
    class MoviesHOC extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
        };
    }

            getMovies = async (filters, page) => {
                const pageSize = 6;
                const { sortBy, primaryReleaseYear, searchTerm, 
                    withGenres, withCountries} = filters;
                const { updateTotalPages } = this.props;
                const queryStringParams = {
                    api_url: API_URL,
                    searchTerm,
                    sortBy,
                    primaryReleaseYear,
                    withGenres,
                    withCountries,
                    page,
                    pageSize,
                }
                if(withGenres.length > 0){
                    queryStringParams.withGenres = withGenres.join(",");
                }
                if(withCountries.length > 0){
                    queryStringParams.withCountries = withCountries.join(",");
                }     
                const link = `${API_URL}/api/movies?${queryString.stringify(queryStringParams)}`;
                // const link = `${API_URL}/api/movies?searchTerm=${searchTerm}&sortBy=${sortBy}&primaryReleaseYear=${primaryReleaseYear}&withGenres=${withGenres}&page=${page}&pageSize=${pageSize}`;
            await fetch(link)            
            .then(response => {
                    if (response.status >= 400 && response.status < 600) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then(data => {
                    this.setState({
                        movies: data.items,
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
            return (
                <Component movies={movies} />
            );
        }
    }

export default withMoviesHOC;




