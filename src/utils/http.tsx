import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3001/',
})

http.interceptors.request.use(request => {
    const access_token = sessionStorage.getItem('todee_admin_access_token')

    if (access_token) {
        request.headers.Authorization = `Bearer ${access_token}`
    }
    

    return request
})

export default http