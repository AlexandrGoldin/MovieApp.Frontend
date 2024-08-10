import React from 'react';
import Header from './Header/Header';
import Cookies from 'universal-cookie';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MoviePage from './pages/MoviePage/MoviePage';
import {API_URL, fetchApi} from '../api/api';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const cookies = new Cookies();

export const AppContext = React.createContext()
console.log("AppContext", AppContext);

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      user: null,
      user_token: null,
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

  onLogOut = () => {
    cookies.remove("user");
    cookies.remove("password");
    this.setState({
      user: null,
      password: null
    });
  }  
  
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
        this.updateUser(user);
          this.setState({
            submitting: true
          });
        })
    }
  }

  render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
      <AppContext.Provider 
      value={{
        user: user,
        updateUser: this.updateUser,
        onLogOut: this.onLogOut
        }}>
      <div>
        <Header user={user}/>
        <Routes>
        <Route path="/" element={<MoviesPage/>}/>
        <Route path="/movie" element={<MoviePage/>}/>
        </Routes>
      </div>
      </AppContext.Provider>
      </BrowserRouter>
    );
  }
}
