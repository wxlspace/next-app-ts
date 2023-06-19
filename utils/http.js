import axios from 'axios';
import { getToken } from './cookie'

axios.defaults.withCredentials = true // 跨域请求携带Cookie ，需要配置

const http = axios.create({
    baseURL: '/api',//process.env.NEXT_PUBLIC_API_HOST,
    withCredentials: true,
    timeout: 1000 * 30,
    // headers: {
    //     'Content-Type': 'application/json; charset=utf-8'
    // }
});

/**
 * 请求拦截
 */
http.interceptors.request.use(
    (config) => {
        if (config.headers['method'] === 'POST') {
            config.headers['Content-Type'] = 'application/json; charset=utf-8';
        }
        config.headers['Authorization'] = 'Bearer ' + getToken() // 请求头带上token
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/**
 * 响应拦截
 */
http.interceptors.response.use(
    (response) => {
        // console.log("response",response)
        return response.data
    },
    (error) => {
        console.log('error:',error)
        // let title = ''
        // let message = ''

        // if (error && error.response) {
        //     message = error.response.data.message
        //     // 401, token失效
        //     // if (error.response.data.status === 2) {
        //     //   router.push({
        //     //     name: 'login'
        //     //   })
        //     // }
        //     switch (
        //     error.response.status // 跨域存在获取不到状态码的情况
        //     ) {
        //         case 400:
        //             title = '错误请求'
        //             break
        //         case 401:
        //             title = '资源未授权'
        //             break
        //         case 403:
        //             title = '禁止访问'
        //             break
        //         case 404:
        //             title = '未找到所请求的资源'
        //             break
        //         case 405:
        //             title = '不允许使用该方法'
        //             break
        //         case 408:
        //             title = '请求超时'
        //             break
        //         case 500:
        //             title = '内部服务器错误'
        //             break
        //         case 501:
        //             title = '未实现'
        //             break
        //         case 502:
        //             title = '网关错误'
        //             break
        //         case 503:
        //             title = '服务不可用'
        //             break
        //         case 504:
        //             title = '网关超时'
        //             break
        //         case 505:
        //             title = 'HTTP版本不受支持'
        //             break
        //         default:
        //             title = error.response.status
        //     }
        //     return alert(message, title, {
        //         type: 'warning'
        //     })
        // } else {
        //     // 跨域获取不到状态码或者其他状态进行的处理
        //     return alert('请联系系统管理员, 或稍后再试!', '未知错误', {
        //         type: 'error'
        //     })
        // }
    }
)


export default http;