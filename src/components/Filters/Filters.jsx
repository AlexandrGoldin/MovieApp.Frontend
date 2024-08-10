import React from 'react';
import SortBy from './SortBy';
import Pagination from './Pagination';
import PrimaryReleaseYear from './PrimaryReleaseYear';
import Genres from './Genres';
import Countries from './Countries';
import SearchByParams from './SearchByParams';

export default class Filters extends React.Component {
    render() {
        const {
            filters: 
            {
                sortBy, 
                searchTerm,
                primaryReleaseYear,
                withGenres,
                withCountries
            },
            page,
            totalPages,
            onChangeFilters,
            onChangePage
        } = this.props;

        return (
            <form className='mb-3'>
                <SearchByParams
                searchTerm={searchTerm}
                onChangeFilters={onChangeFilters}
                />
                <SortBy 
                sort_by={sortBy} 
                onChangeFilters={onChangeFilters} 
                />
                <PrimaryReleaseYear
                searchTerm={primaryReleaseYear} 
                onChangeFilters={onChangeFilters}
                /> 
                <Genres
                withGenres={withGenres}  
                onChangeFilters={onChangeFilters}
                />
                <Countries
                withCountries={withCountries}  
                onChangeFilters={onChangeFilters}
                />
                <Pagination 
                page={page}
                totalPages={totalPages}
                onChangePage={onChangePage}
                />               
            </form>
        );
    }
}





