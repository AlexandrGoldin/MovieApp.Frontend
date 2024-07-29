import React from 'react';
import SortBy from './SortBy';
import Pagination from './Pagination';
import PrimaryReleaseYear from './PrimaryReleaseYear';
//import ReleaseDateRange from './ReleaseDateRange';
import Genres from './Genres';
import Titles from './Titles';

export default class Filters extends React.Component {
    render() {
        const {
            filters: 
            {
                sortColumn, 
                searchTerm
                //dateRangeForFiltering
            },
            page,
            totalPages,
            onChangeFilters,
            onChangePage
        } = this.props;

        return (
            <form className='mb-3'>
                <Titles
                searchTerm={searchTerm}
                onChangeFilters={onChangeFilters}
                />
                <SortBy 
                sortColumn={sortColumn} 
                onChangeFilters={onChangeFilters} 
                />
                <PrimaryReleaseYear
                searchTerm={searchTerm}
                onChangeFilters={onChangeFilters}
                /> 
                {/* <ReleaseDateRange
                dateRangeForFiltering={dateRangeForFiltering}
                onChangeFilters={onChangeFilters}
                /> */}
                <Genres
                with_genres={searchTerm}
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





