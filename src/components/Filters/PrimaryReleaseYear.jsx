import React from 'react'
import PropTypes from 'prop-types';
import UISelect from '../UIComponents/UISelect';

export default class PrimaryReleaseYear extends React.PureComponent {

    static propTypes = {
        searchTerm: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
    };
    static defaultProps = {
        options: [
            {
                label: "За всё время",
                value: ""
            },
            {
                label: "2022",
                value: "2022"
            },
            {
                label: "2021",
                value: "2021"
            },
            {
                label: "2019",
                value: "2019"
            },
            {
                label: "2018",
                value: "2018"
            },
            {
                label: "2017",
                value: "2017"
            },
            {
                label: "2016",
                value: "2016"
            },
            {
                label: "2005-2015",
                value: "2005, 2015"
            },
            {
                label: "1995-2005",
                value: "1995, 2005"
            }
        ]
    }

render() {
        const { searchTerm, onChangeFilters, options } = this.props;
        console.log("primary_release_year render");
        return (

            
            <UISelect
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
            </UISelect>
        )
    }
}
