import React from 'react'
import PropTypes from 'prop-types';

export default class SearchByParams extends React.Component {

    static propTypes = {
        searchTerm: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
    };
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
                    placeholder="Название фильма / Жанр / Страна"
                >
                </input>
            </div>
        )
    }
}
