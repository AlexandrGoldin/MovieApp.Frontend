import React from 'react';
import PropTypes from 'prop-types';

export default class SortBy extends React.Component {
    static propTypes = {
        sortColumn: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
    };
    static defaultProps = {
        options: [
            {
                label: "Дата выпуска по убыванию",
                value: "releaseDate&sortOrder=desc"   
            },
            {
                label: "Дата выпуска по возрастанию",
                value: "releaseDate"    
            },
            {
                label: "Рейтинг по возрастанию",
                value: "rating"   
            },
            {
                label: "Рейтинг по убыванию",
                value: "rating&sortOrder=desc"   
            }
        ]    
    };

  render() {
    const {sortColumn, onChangeFilters, options} = this.props;
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
            {options.map(option =>(
              <option key={option.value} value={option.value}>
                {option.label}
              </option> 
            ))}
        </select>
    </div>
    );
  }
}

