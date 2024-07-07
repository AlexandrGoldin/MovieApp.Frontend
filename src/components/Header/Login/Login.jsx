import React from 'react'
import { API_URL } from '../../../api/api';

export default class Login extends React.Component {
  sendPromises = () => {
    const getRequestToken = () => {
      return new Promise((resolve, reject) => {
        fetch(
          `${API_URL}/api/authenticate`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({
              username: "demouser@microsoft.com",
              password: "Pass@word1"
            })
          }
        ).then(response => {
            if(response.status < 400){
            return response.json();
          } else {
            throw response;
          }
        })
        .then(data =>{
          resolve(data);
        })
        .catch(response => {
          response.json().then(error =>{
            reject(error);
          });          
        });
      });
    };
    getRequestToken()
    .then(data =>{
      console.log(data);
    })
    .catch(error=>{
      console.log("error", error);
    });

        // fetch(
        //   `${API_URL}/api/authenticate`,
        //     {
        //     method: "POST",
        //     headers: {
        //       "Content-type": "application/json"
        //    },
        //    body: JSON.stringify( {
        //     username: "demouser@microsoft.com",
        //     password: "Pass@word1"
        //    })
        //   }
        // ).then(response => response.json())
        // .then(data =>{
        //   console.log(data);
        //  }
        // );
     };        
  render() {
    return (
      <div>
        <button
        className='btn btn-success'
        type='button'
        onClick={this.sendPromises}
        >
          Login
        </button>
        </div>
    )
  }
}

