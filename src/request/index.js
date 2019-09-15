import Axios from "axios";

const request = Axios.create({
    baseURL: 'https://cnodejs.org/api/',
    timeout: 1000,
});

// 拦截器

export default request;