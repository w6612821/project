import axios from "axios"

let service = axios.create({
    baseURL: "/hd",
    // method: "post",
    timout: 3000
})

service.interceptors.request.use((config) => {
    // config.headers["X-Client-Info"] = `{"a":"3000","ch":"1002","v":"5.0.4","e":"15785569402121713844244","bc":"110100"}`
    // if (config.data["X-Host"]) {
    //     config.headers["X-Host"] = config.data["X-Host"];
    // }
    return config;
})

service.interceptors.response.use((res) => {

    return res.data;
})
export default service