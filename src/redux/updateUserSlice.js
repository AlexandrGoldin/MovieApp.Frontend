import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

const initialState = {
    username: "",
    password: cookies.get("password"),
    user: cookies.get("user"),
    user_token: null,
}

const updateUserSlice = createSlice({
    name: 'update_user',
    initialState,
    reducers: {
        userUpdated(state = initialState, action) {           
            // updateUser(state = initialState, action) {           
            console.log("--updateUserSlice.updateUser--", action.payload);
            cookies.set("user", action.payload, {
                path: "/",
                maxAge: 2592000
              });
            state.user = action.payload            
        },
        logOut: (state) => {
            cookies.remove('user');
            cookies.remove('password');
            state.user = null;
            state.password = null;
        },
    }
})

export const { userUpdated, logOut } = updateUserSlice.actions
// export const { updateUser, logOut } = updateUserSlice.actions
export default updateUserSlice.reducer