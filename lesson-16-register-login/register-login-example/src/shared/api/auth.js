import axios from "axios";

const instance = axios.create({
    baseURL: "https://auth-backend-lesson.herokuapp.com/api"
});

export const signup = async (data) => {
    const {data: result} = await instance.post("/users/signup", data);
    return result;
}

export const login = async (data) => {
    const {data: result} = await instance.post("/users/login", data);
    return result;
}