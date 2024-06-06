import React from 'react'

export default class SortBy extends React.Component {
  render() {
    const {sortColumn, onChangeFilters} = this.props;
    console.log("SortBy.props", this.props.sortColumn, this.props.onChangeFilters);   
    return (
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
    );
  }
}

