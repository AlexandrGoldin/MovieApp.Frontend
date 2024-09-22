import React from 'react';
import PropTypes from 'prop-types';
import UISelect from '../UIComponents/UISelect';


export default class SortBy extends React.PureComponent {
    static propTypes = {
        sortBy: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
    };
    static defaultProps = {
        options: [
            {
                label: "Рейтинг по убыванию",
                value: "rating.desc"   
            },
            {
                label: "Рейтинг по возрастанию",
                value: "rating.asc"   
            },           
            {
                label: "Дата выпуска по убыванию",
                value: "release_date.desc"    
            },
            {
                label: "Дата выпуска по возрастанию",
                value: "release_date.asc"    
            }                  
        ]    
    };

    render() {
        const {sortBy, onChangeFilters, options} = this.props;
        console.log("---class SortBy---", this.props.sortBy)
        return (
            <UISelect
                id='sortBy'
                className='form-control'
                name='sortBy'
                value={sortBy}
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

