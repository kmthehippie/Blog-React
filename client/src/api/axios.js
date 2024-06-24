import axios from "axios"

// const BASE_URL = "https://km-blog-server-2024.fly.dev"
//base url is the port available on express
const BASE_URL = "http://localhost:3000/"
export default axios.create({
    baseURL : BASE_URL,
})

export const axiosPrivate = axios.create({
    baseURL : BASE_URL,
    headers: {'Content-Type': "application/json"},
    withCredentials: true
})
