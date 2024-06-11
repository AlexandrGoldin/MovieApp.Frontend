import React from 'react'
//import UISelect from '../UIComponents/UISelect';

export default class PrimaryReleaseYear extends React.Component {
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
            }
        ]
    }

    render() {
        const { searchTerm, onChangeFilters, options } = this.props;
        console.log("primary_release_year render");
        return (

            <div className='form-group'>
            <label htmlFor='searchTerm'>Год релиза:</label>
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

            // <UISelect
            //     id="primary_release_year"
            //     name="primary_release_year"
            //     value={primary_release_year}
            //     onChange={onChangeFilters}
            //     lableText="Год релиза:"
            // >
            //     {options.map(option => (
            //         <option key={option.value} value={option.value}>
            //             {option.label}
            //         </option>
            //     ))}
            // </UISelect>
        )
    }
}
