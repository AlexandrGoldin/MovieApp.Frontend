// import React from 'react';
// import MovieList from "./MovieList";
// import { API_URL } from '../../api/api';
// import _ from 'lodash';

// export default class MoviesContainer extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             movies: [],
//         };
//     }

//     getMovies = async (filters, page) => {
//         const pageSize = 6;
//         const { sortColumn, searchTerm } = filters;
//         const { updateTotalPages } = this.props;
//         const link = `${API_URL}/api/movies?searchTerm=${searchTerm}&sortColumn=${sortColumn}&page=${page}&pageSize=${pageSize}`;
//         await fetch(link)
//             .then(response => {
//                 if (response.status >= 400 && response.status < 600) {
//                     throw new Error("Bad response from server");
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 this.setState({
//                     movies: data.items,
//                 });
//                 updateTotalPages(data.totalPages);
//             }).catch((error) =>{
//                 console.log(error)
//             });
//     }

//     componentDidMount() {

//         this.getMovies(this.props.filters, this.props.page);
//        }

//     componentDidUpdate(prevProps) {

//         if (!_.isEqual(this.props.filters, prevProps.filters)) {
//             this.props.onChangePage(1);
//             this.getMovies(this.props.filters, 1)
//         }

//         if (this.props.page !== prevProps.page) {
//             this.getMovies(this.props.filters, this.props.page)
//         }
//     }

//     render() {
//         const { movies } = this.state;
//         return (
//             <MovieList movies={movies}/>
//         );
//     }
// }
