import React from 'react';
import SortBy from './SortBy';

export default class Filters extends React.Component {
    render() {
        const {
            filters: { sortColumn },
            page,
            onChangeFilters,
            onChangePage
        } = this.props;
        
        return (
            <form className='mb-3'>
                <SortBy sortColumn={sortColumn} onChangeFilters={onChangeFilters}/>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button 
                    type="button" 
                    className="btn btn-light" 
                    disabled={page ===1}
                    onClick={onChangePage.bind(null, page - 1)}
                    >
                        Назад
                        </button>
                    <button 
                    type="button" 
                    className="btn btn-light"
                    onClick={onChangePage.bind(null, page + 1)}                   
                    >
                        Вперёд                     
                        </button>
                </div>
            </form>
        );
    }
}





