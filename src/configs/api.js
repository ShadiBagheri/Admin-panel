import axios from "axios";
import { getCookie } from "../utils/cookie.js";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use((request) => {
    const token = getCookie("token");
    if (token) {
        request.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log(request)
    return request
})

api.interceptors.response.use((response) => {
    console.log(response)
    return response.data
})

export default api