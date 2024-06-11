import React from 'react'

export default class Titles extends React.Component {
    render() {
        const { searchTerm, onChangeFilters } = this.props;
        return (
            <div className='form-group'>
                <label htmlFor='sortColumn'>Поиск:</label>
                <input
                    type="text"
                    className="form-control"
                    id="searchTerm"
                    name='searchTerm'
                    value={searchTerm}
                    onChange={onChangeFilters}
                    placeholder="Название фильма / Жанр / Страна / Дата редиза"
                >
                </input>
            </div>
        )
    }
}
