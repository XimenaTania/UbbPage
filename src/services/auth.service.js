import axios from "axios";

const API_URL = "http://localhost:3000/";

export const loginApi = (username, password) => {
    return new Promise((resolve, reject) => {resolve({success: true}) })
    //return axios.post(API_URL + 'endpoint', {username, password})
}

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    loginApi,
    logout,
};