import axios from 'axios'
import Vue from 'vue'


const instance = axios.create()
instance.interceptors.response.use(function (res) {
    return res.data
}, function (err) {
    // 什么时候会进来这个err
    // 1. http 状态码非2开头的会进来这里
    // 2. 取消请求也会进入这里 CancelToken 可以判断一下是否是取消的请求
    // 3. 请求运行有异常也会进入这里
    console.log(err)
    return Promise.reject(err)
})
Vue.prototype.$ajax = instance
export default Vue.prototype.$ajax