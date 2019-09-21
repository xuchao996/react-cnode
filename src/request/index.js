import Axios from "axios";

const request = Axios.create({
    baseURL: 'https://cnodejs.org/',
    timeout: 5000,
});

// 拦截器
request.interceptors.response.use(function(response) {
    return response.data
}, function (err) {
    return new Error(err);
})


export default request;