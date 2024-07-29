import React from 'react';
import { API_URL } from '../../api/api';
import UISelect from '../UIComponents/UISelect';

export default class Genres extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            genreList: []
        };
    }

    componentDidMount() {
        const link = `${API_URL}/api/genres`;
        fetch(link)
            .then(response => response.json())
            .then(data => {
                const genreList = [{ genreName: "Все жанры", genreValue: "" }, ...data];
                this.setState({
                    genreList: genreList
                });
                console.log("genreList", genreList);
            });
    }

        render() {
        const { genreList } = this.state;
        const { searchTerm, onChangeFilters } = this.props;

        console.log("----searchTerm----", searchTerm);
       
        return (          
            <UISelect
                id='searchTerm'
                className='form-control'
                name='searchTerm'
                value={searchTerm}
                onChange={onChangeFilters}
            >
                {genreList.map(option => (
                    <option key={option.genreValue} value={option.genreValue}>
                        {option.genreName}
                    </option>
                ))}
            </UISelect>
        );
    }
}


