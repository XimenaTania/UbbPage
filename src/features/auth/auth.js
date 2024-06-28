import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import AuthService from "../../services/auth.service";

const initialState =  null;

const user = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.value = action
        }
    }
});

export const loginThunk = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(username, password);
            return { user: data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            //thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

// Action creators are generated for each case reducer function
export const { reducer } = authSlice

export default reducer


// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
//
// import rootReducer from './reducers'
//
// const initalState = {
//
// }
//
// const middleware = [thunk]
//
// const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))
//
// export default store;