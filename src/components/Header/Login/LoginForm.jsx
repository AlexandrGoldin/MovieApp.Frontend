import React from 'react';
import { API_URL, fetchApi } from '../../../api/api';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export default class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    errors: {},
    submitting: false
  };

  onChange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        base: null,
        [name]: null
      }
    }));
  };

  handelBlur = () => {
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    }
  };

  validateFields = () => {
    const errors = {};

    if (this.state.username === "") {
      errors.username = "Not empty";
    }
    if (this.state.password === "") {
      errors.password = "Not empty";
    }
    return errors;
  };

  onSubmit = () => {
    this.setState({
      submitting: true
    });
    fetchApi(
      `${API_URL}/api/authenticate`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username, // "demouser@microsoft.com",              
          password: this.state.password  // "Pass@word1" 
        })
      }
    )
    .then(data => {
      console.log("session", data);
      this.props.updateUser(data);
      this.setState({
        submitting: true
      });
      cookies.set("password", this.state.password, {
        path: "/",
        maxAge: 2592000
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
 
  onLogin = e => {
    e.preventDefault();
    const errors = this.validateFields();
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.onSubmit()       
    }
  };

  render() {
    const { username, password, errors, submitting } = this.state;
    return (
      <div className='form-login-container'>
        <form className='form-login'>
          <h1 className='h3 mb-3 font-weight-normal text-center'>
            Авторизация
          </h1>
          <div className='form-group'>
            <label htmlFor='username'>Пользователь</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Пользователь"
              name="username"
              value={username}
              onChange={this.onChange}
              onBlur={this.handelBlur}
            />
            {errors.username && (
              <div className='invalid-feedback'>{errors.username}</div>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Пароль</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Пароль"
              name="password"
              value={password}
              onChange={this.onChange}
              onBlur={this.handelBlur}
            />
            {errors.password && (
              <div className='invalid-feedback'>{errors.password}</div>
            )}
          </div>
          <div className='d-grid gap-2'>
            <button
              type='submit'
              className="btn btn-lg btn-primary btn-in-form"
              onClick={this.onLogin}
              disabled={submitting}
            >
              Вход
            </button>
            {errors.base && (
              <div className='invalid-feedback text-center'>{errors.base}</div>
            )}
          </div>
        </form>
      </div>
    );
  }
}
