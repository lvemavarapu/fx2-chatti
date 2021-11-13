import axios from 'axios'

const nootnootAPI = axios.create({
    baseURL: 'https://sutti1app.herokuapp.com/'
})

nootnootAPI.interceptors.request.use(req => {
    const token = sessionStorage.getItem("token")
    console.log("interceptor token: ", token)
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
})

export default nootnootAPI