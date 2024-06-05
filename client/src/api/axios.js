import axios from "axios"

const BASE_URL = "http://localhost:3000/"
//base url is the port available on express

export default axios.create({
    baseURL : BASE_URL,

})

export const axiosPrivate = axios.create({
    baseURL : BASE_URL,
    headers: {'Content-Type': "application/json"},
    withCredentials: true
})
