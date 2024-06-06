import React, { Component } from 'react';
import MovieItem from "./MovieItem";
import {API_URL} from '../../api/api';

export default class MovieList extends Component {
    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    getMovies = (filters, page) =>{
        const {sortColumn} = filters
        // const link = `https://localhost:7212/api/movies?page=2&pageSize=6`;
        const link = `${API_URL}/api/movies?searchTerm=&sortColumn=${sortColumn}&page=${page}&pageSize=4`;
        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({ 
                    movies: data.items
                });
            });
    }
 
componentDidMount() {
       
    this.getMovies(this.props.filters, this.props.page);
    console.log("componentDidMount", this.props.filters, this.props.page);

}

componentDidUpdate(prevProps){
    console.log("componentDidUpdate", prevProps.page, this.props.page, this.props.filters);
    if(this.props.filters.sortColumn !== prevProps.filters.sortColumn){
        this.props.onChangePage(1);
        this.getMovies(this.props.filters, 1)
    }

    if(this.props.page !== prevProps.page){
        this.getMovies(this.props.filters, this.props.page)
    }
}

    render() {
        const { movies } = this.state;
        //console.log("movies", movies);    
        console.log("render");    
        return (
            <div className='row'>
                {movies?.map(movie => {
                    return (
                        <div key={movie.id} className='col-6 mb-4'>
                            <MovieItem item={movie} />
                        </div>
                    );
                })}
            </div>
        );
    }
}
