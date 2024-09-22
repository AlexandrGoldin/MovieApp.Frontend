import { configureStore } from '@reduxjs/toolkit'
import updateUserReducer from './updateUserSlice'

const store = configureStore({
  reducer: {
    update_user: updateUserReducer,
  }
})

export default store;