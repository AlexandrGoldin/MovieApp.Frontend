import React from 'react';
import PropTypes from 'prop-types';
import UISelect from '../UIComponents/UISelect';


export default class SortBy extends React.PureComponent {
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
        console.log("---SortBy-render---")
        return (
            <UISelect
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
            </UISelect>
        );
      }
}

