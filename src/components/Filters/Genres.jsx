import React from 'react';
import { API_URL } from '../../api/api';

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
                const genreList = [...data];
                this.setState({
                    genreList: genreList
                });
                console.log("---genreList---", genreList);
            });
    }

    onGhange = event => {
        this.props.onChangeFilters({
            target: {
                name: "withGenres",
                value: event.target.checked
                ? [...this.props.withGenres, event.target.value]
                : this.props.withGenres.filter(genre => genre !== event.target.value)
            }
        });
    };

    resetGenres = () => {
        this.props.onChangeFilters({
            target: {
                name: "withGenres",
                value: []
            }
        });
    };

    render() {
        const { genreList } = this.state;
        const { withGenres} = this.props;
        console.log("----searchTerm----", withGenres);
        return (          
            <React.Fragment>
              <div>
                <button
                type="button"
                className='btn btn-outline-dark mb-2'
                onClick={this.resetGenres}
                >
                  Показать все жанры
                </button>                   
              </div>
              {genreList.map(genre => (
                <div key={genre.genreId} className='form-check'>
                    <input
                    className='form-check-input'
                    type='checkbox'
                    value={genre.genreId}
                    id={`genre${genre.genreId}`}
                    onChange={this.onGhange}
                    checked={withGenres?.includes(String(genre.genreId))}
                    />
                    <label className='form-check-label' htmlFor={`genre${genre.genreId}`}>
                      {genre.genreName}
                    </label>
                </div>
              ))}
            </React.Fragment>       
        );
    }
}


