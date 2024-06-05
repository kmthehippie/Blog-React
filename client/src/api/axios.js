import axios from "axios"

const BASE_URL = import.meta.env.BASE_URL
//base url is the port available on express

export default axios.create({
    baseURL : BASE_URL,

})

export const axiosPrivate = axios.create({
    baseURL : BASE_URL,
    headers: {'Content-Type': "application/json"},
    withCredentials: true
})
