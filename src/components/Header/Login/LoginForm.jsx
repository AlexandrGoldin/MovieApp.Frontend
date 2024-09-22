import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CallApi from '../../../api/api';
import Cookies from 'universal-cookie';
import { userUpdated } from '../../../redux/updateUserSlice';
import classNames from 'classnames';

const cookies = new Cookies();

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);

    setErrors((prev) => ({
      ...prev,
      base: null,
      [name]: null
    }));
  };

  const validateFields = () => {
    const errors = {};
    if (username === "") errors.username = "Not empty";
    if (password === "") errors.password = "Not empty";
    return errors;
  };

  const onSubmit = () => {
    setSubmitting(true);
    return CallApi.post("/api/authenticate", {
      body: { username, password }
    })
    .then((data) => {
      dispatch(userUpdated(data));
      setSubmitting(false);
      cookies.set("password", password, { path: "/", maxAge: 2592000 });
    })
    .catch((error) => {
      setSubmitting(false);
      setErrors({ base: error.error });
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit();
    }
  };

  return (
    <div className='form-login-container'>
      <form className='form-login'>
        <h1 className='h3 mb-3 font-weight-normal text-center'>Авторизация</h1>
        <div className='form-group'>
          <label htmlFor='username'>Пользователь</label>
          <input
            type="text"
            className={classNames("form-control", { invalid: errors.username })}
            id="username"
            placeholder="Пользователь"
            name="username"
            value={username}
            onChange={onChange}
          />
          {errors.username && <div className='invalid-feedback'>{errors.username}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Пароль</label>
          <input
            type="password"
            className={classNames("form-control", { invalid: errors.password })}
            id="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={onChange}
          />
          {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
        </div>
        <button
          type='submit'
          className="btn btn-lg btn-primary btn-in-form"
          onClick={onLogin}
          disabled={submitting}
        >
          Вход
        </button>
        {errors.base && <div className='invalid-feedback text-center'>{errors.base}</div>}
      </form>
    </div>
  );
};

export default LoginForm;

// ////------------V1-----------------------
// import React from 'react';
// import CallApi from '../../../api/api';
// import Cookies from 'universal-cookie';
// import classNames from 'classnames';
// import AppContextHOC from "../../HOC/AppContextHOC";

// const cookies = new Cookies();

// class LoginForm extends React.Component {
//   state = {
//     username: "",
//     password: "",
//     errors: {},
//     submitting: false
//   };

//   onChange = e => { 
//     const name = e.target.name
//     const value = e.target.value
//     this.setState(prevState => ({
//       [name]: value,
//       errors: {
//         ...prevState.errors,
//         base: null,
//         [name]: null
//       }
//     }));
//   };

//   handelBlur = () => {
//     const errors = this.validateFields();
//     if (Object.keys(errors).length > 0) {
//       this.setState(prevState => ({
//         errors: {
//           ...prevState.errors,
//           ...errors
//         }
//       }));
//     }
//   };

//   validateFields = () => {
//     const errors = {};

//     if (this.state.username === "") {
//       errors.username = "Not empty";
//     }
//     if (this.state.password === "") {
//       errors.password = "Not empty";
//     }
//     return errors;
//   };

//   onSubmit = () => {
//     this.setState({
//       submitting: true
//     });
//     return CallApi.post("/api/authenticate", {
//       body: {
//         username: this.state.username, // "demouser@microsoft.com",              
//         password: this.state.password  // "Pass@word1" 
//       }
//     }) 
//     .then(data => {
//       console.log("--session--", data);
//       this.props.updateUser(data);
//       this.setState({
//         submitting: true
//       });
//       console.log("--password--", this.state.password);
//       cookies.set("password", this.state.password, {
//         path: "/",
//         maxAge: 2592000
//       });
//     })
//     .catch(error => {
//       console.log("error", error);
//       this.setState({
//         submitting: false,
//         errors:{
//           base: error.error
//         }
//       });
//     })
//   }
 
//   onLogin = e => {
//     e.preventDefault();
//     const errors = this.validateFields();
//     if (Object.keys(errors).length > 0) {
//       this.setState(prevState => ({
//         errors: {
//           ...prevState.errors,
//           ...errors
//         }
//       }));
//     } else {
//       this.onSubmit()
//     }
//   };

//   getClassForInput = key => 
//     classNames("form-control", {
//       invalid: this.state.errors[key]
//     })

//   render() {
//     const { username, password, errors, submitting } = this.state;
//     return (
//       <div className='form-login-container'>
//         <form className='form-login'>
//           <h1 className='h3 mb-3 font-weight-normal text-center'>
//             Авторизация
//           </h1>
//           <div className='form-group'>
//             <label htmlFor='username'>Пользователь</label>
//             <input
//               type="text"
//               className={this.getClassForInput("username")}
//               id="username"
//               placeholder="Пользователь"
//               name="username"
//               value={username}
//               onChange={this.onChange}
//               onBlur={this.handelBlur}
//             />
//             {errors.username && (
//               <div className='invalid-feedback'>{errors.username}</div>
//             )}
//           </div>
//           <div className='form-group'>
//             <label htmlFor='password'>Пароль</label>
//             <input
//               type="password"
//                className={this.getClassForInput("password")}
//               id="password"
//               placeholder="Пароль"
//               name="password"
//               value={password}
//               onChange={this.onChange}
//               onBlur={this.handelBlur}
//             />
//             {errors.password && (
//               <div className='invalid-feedback'>{errors.password}</div>
//             )}
//           </div>
//           <div className='d-grid gap-2'>
//             <button
//               type='submit'
//               className="btn btn-lg btn-primary btn-in-form"
//               onClick={this.onLogin}
//               disabled={submitting}
//             >
//               Вход
//             </button>
//             {errors.base && (
//               <div className='invalid-feedback text-center'>{errors.base}</div>
//             )}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

//  export default AppContextHOC (LoginForm);
// ////------------The End V1-----------------------


