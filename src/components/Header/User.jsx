import React from "react";
import { API_URL } from '../../api/api';

export default class User extends React.Component {
   
    render() {
        const { user } = this.props;
        return (
            <div>
                <img 
                width="50"
                alt=""
            // className="rounded-circle" // getbootstrap for a round image
                className="Avatar-Default-Img"
                src = {`${API_URL}${user.avatarUri}`}
                />
            </div>
        );
    }
}
