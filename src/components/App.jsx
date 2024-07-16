import React from 'react';
import Filters from './Filters/Filters';
import MovieList from './Movies/MovieList';
import Header from './Header/Header';
import Cookies from 'universal-cookie';
import {API_URL, fetchApi} from '../api/api';

const cookies = new Cookies();

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      user: null,
      user_token: null,
      filters: {
        sortColumn: "rating",
        searchTerm: ""
      },
      page: 1,
      totalPages: 1
    };
  }


  updateUser = user => {
    cookies.set("user", user, {
      path: "/",
      maxAge: 2592000
    });
    this.setState({
      user
    });
  };
  
  onChangeFilters = event => {
    const newFilters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    this.setState({
      filters: newFilters
    });
  };

  onChangePage = page => {
    this.setState({
      page
    });
  };

  updateTotalPages = (totalPages) => {
    this.setState({ totalPages });
  };

  componentDidMount() {
    const user = cookies.get("user");
    const password = cookies.get("password");
    if (user) {
      fetchApi(
        `${API_URL}/api/authenticate`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            username: user.username, // "demouser@microsoft.com",              
            password: password  // "Pass@word1" 
          })
        }
      )
        .then(user => {
          console.log("session", user);
          this.setState({
            user: user
          });
          this.setState({
            submitting: true
          });
        })
        .catch(error => {
          console.log("error", error);
          this.setState({
            submitting: false,
            errors:{
              base: error.error
            }
          });
        })
    }
  }

  render() {
    const { filters, page, totalPages, user } = this.state;
    return (
      <div>
        <Header user={user} updateUser={this.updateUser}/>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-4'>
              <div className='card' style={{ width: "100%" }}>
                <div className='card-body'>
                  <h5>Фильтры:</h5>
                  <Filters
                    page={page}
                    totalPages={totalPages}
                    filters={filters}
                    onChangeFilters={this.onChangeFilters}
                    onChangePage={this.onChangePage}
                  />
                </div>
              </div>
            </div>
            <div className='col-8'>
              <MovieList
                filters={filters}
                page={page}
                updateTotalPages={this.updateTotalPages}
                onChangePage={this.onChangePage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
