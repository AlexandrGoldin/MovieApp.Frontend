import React from 'react'
import PropTypes from 'prop-types';

export default class Genres extends React.Component {

    static propTypes = {
        searchTerm: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
    };
    static defaultProps = {
        options: [
            {
                label: "Все жанры",
                value: ""
            },
            {
                label: "Комедия",
                value: "Комедия"
            },
            {
                label: "Триллер",
                value: "Триллер"
            },
            {
                label: "Детектив",
                value: "Детектив"
            },
            {
                label: "Мелодрама",
                value: "Мелодрама"
            },
            {
                label: "Драма",
                value: "Драма"
            },
            {
                label: "Боевик",
                value: "Боевик"
            }
        ]
    }

    render() {
        const { searchTerm, onChangeFilters, options} = this.props;
        //console.log("genres");
        return (

            <div className='form-group'>
            <label htmlFor='searchTerm'>Выбор жанра:</label>
            <select
                id='searchTerm'
                className='form-control'
                name='searchTerm'
                value={searchTerm}
                onChange={onChangeFilters}
            >
                {options.map(option =>(
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option> 
                ))}
            </select>
        </div>
        )
    }
 }
