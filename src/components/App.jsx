import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdated, logOut } from '../redux/updateUserSlice';
import Header from './Header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MoviePage from './pages/MoviePage/MoviePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';

export const AppContext = React.createContext();
console.log("AppContext", AppContext);

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.update_user.user);

  const updateUser = (userData) => {
    dispatch(userUpdated(userData));
    console.log("--user_2--", user);
  };

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
      <BrowserRouter>
        <AppContext.Provider 
          value={{
            user: user,
            updateUser: updateUser,
            onLogOut: onLogOut
          }}>
          <div>
            <Header user={user} />
            <Routes>
              <Route path="/" element={<MoviesPage />} />
              <Route path="/api/movies/:id" element={<MoviePage />} />
            </Routes>
          </div>
        </AppContext.Provider>
      </BrowserRouter>
  );
};

export default App;


////------------V1-----------------
// import React from 'react';
// import Header from './Header/Header';
// import Cookies from 'universal-cookie';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import MoviePage from './pages/MoviePage/MoviePage';
// //import {API_URL, fetchApi} from '../api/api';
// import {BrowserRouter, Routes, Route} from "react-router-dom";

// const cookies = new Cookies();

// export const AppContext = React.createContext()
// console.log("AppContext", AppContext);

// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       username: "",
//       password: cookies.get("password"),
//       user: cookies.get("user"),
//       user_token: null,
//     };
//   }
 
//   updateUser = user => {
//     cookies.set("user", user, {
//       path: "/",
//       maxAge: 2592000
//     });
//     this.setState({
//       user
//     });
//   };

//   onLogOut = () => {
//     cookies.remove("user");
//     cookies.remove("password");
//     this.setState({
//       user: null,
//       password: null
//     });
//   }  

//   // componentDidMount() {
//   //   if (this.state.user) {
//   //     fetchApi(
//   //       `${API_URL}/api/authenticate`,
//   //       {
//   //         method: "POST",
//   //         mode: "cors",
//   //         headers: {
//   //           "Content-type": "application/json"
//   //         },
//   //         body: JSON.stringify({
//   //           username: this.state.user.username, // "demouser@microsoft.com",              
//   //           password: this.state.password  // "Pass@word1" 
//   //         })
//   //       }
//   //     )
//   //     .then(user => {
//   //       this.updateUser(user);
//   //         this.setState({
//   //           submitting: true
//   //         });
//   //       })
//   //   }
//   // }

//   render() {
//     const { user } = this.state;
//     return (
//       <BrowserRouter>
//       <AppContext.Provider 
//       value={{
//         user: user,
//         updateUser: this.updateUser,
//         onLogOut: this.onLogOut
//         }}>
//       <div>
//         <Header user={user}/>
//         <Routes>
//         <Route path="/" element={<MoviesPage/>}/>
//         <Route path="/api/movies/:id" element={<MoviePage/>}/>
//         </Routes>
//       </div>
//       </AppContext.Provider>
//       </BrowserRouter>
//     );
//   }
// }
////------------the End V1--------------------
