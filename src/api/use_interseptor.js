import axios from "axios";

const token = localStorage.getItem("token");

const customApiKey = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,

})

customApiKey.interceptors.request.use(config => {
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default customApiKey