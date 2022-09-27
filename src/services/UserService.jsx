/* eslint-disable */
import axios from "axios";

const User_API_BASE_URL = "http://localhost:8415/users";

class UserService {

    constructor() {

    }
    login(user){
        return axios.post(User_API_BASE_URL + "/login", user)
    }

    addUserDetails(user) {
        return axios.post(User_API_BASE_URL, user);
    }

    logout() {
        return axios.get(User_API_BASE_URL + "/logout");
    }

    getUsers(){
        return axios.get(User_API_BASE_URL);
    }
    
    getUserById(userId) {
        return axios.get(User_API_BASE_URL + "/" + userId);
    }

    updateUser(userId, user) {
        return axios.put(User_API_BASE_URL+ "/" + userId, user)
    }

    deleteUserById(userId) {
        return axios.delete(User_API_BASE_URL + "/" + userId)
    }

}

export default new UserService();
