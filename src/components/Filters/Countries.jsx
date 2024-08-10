import React from 'react';
import { API_URL } from '../../api/api';

export default class Countries extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            countryList: []
        };
    }

    componentDidMount() {
        const link = `${API_URL}/api/countries`;
        fetch(link)
            .then(response => response.json())
            .then(data => {
                const countryList = [...data];
                this.setState({
                    countryList: countryList
                });
                console.log("---countryList---", countryList);
            });
    }

    onGhange = event => {
        this.props.onChangeFilters({
            target: {
                name: "withCountries",
                value: event.target.checked
                ? [...this.props.withCountries, event.target.value]
                : this.props.withCountries.filter(country => country !== event.target.value)
            }
        });
    };

    resetCountries = () => {
        this.props.onChangeFilters({
            target: {
                name: "withCountries",
                value: []
            }
        });
    };

    render() {
        const { countryList } = this.state;
        const { withCountries} = this.props;
        console.log("----withCountries----", withCountries);
        return (          
            <React.Fragment>
              <div>
                <button
                type="button"
                className='btn btn-outline-dark mb-2'
                onClick={this.resetCountries}
                >
                  Показать все страны
                </button>                   
              </div>
              {countryList.map(country => (
                <div key={country.countryId} className='form-check'>
                    <input
                    className='form-check-input'
                    type='checkbox'
                    value={country.countryId}
                    id={`country${country.countryId}`}
                    onChange={this.onGhange}
                    checked={withCountries?.includes(String(country.countryId))}
                    />
                    <label className='form-check-label' htmlFor={`country${country.countryId}`}>
                      {country.countryName}
                    </label>
                </div>
              ))}
            </React.Fragment>       
        );
    }
}


