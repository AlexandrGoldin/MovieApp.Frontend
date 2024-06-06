import React from 'react';

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
                {/* <div className='form-select'> */}
                <div className='form-group'>
                    <label htmlFor='sortColumn'>Сортировать по:</label>
                    <select
                        id='sortColumn'
                        className='form-control'
                        name='sortColumn'
                        value={sortColumn}
                        onChange={onChangeFilters}
                    >
                        <option value='releaseDate&sortOrder=desc'>Дата выпуска по убыванию</option>
                        <option value='releaseDate'>Дата выпуска по возрастанию</option>
                        <option value='rating'>Рейтинг по возрастанию</option>
                        <option value='rating&sortOrder=desc'>Рейтинг по убыванию</option>


                        {/* <option value='searchTerm'>Поиск фильма по названию или по жанру</option> */}
                    </select>
                </div>
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





