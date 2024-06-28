import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice";
import authReduce from "../features/auth/auth";


export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReduce
    },
})