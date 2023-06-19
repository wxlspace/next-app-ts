import Cookies from 'js-cookie'

// const TokenKey = 'access-token'
const TokenKey = 'Authorization'

// 获取token的方法
export function getToken() {
    return Cookies.get(TokenKey) || ""
}

// 设置token
export function setToken(token) {
    let seconds = 2 * 60 * 60;//  2小时后失效
    let expires = new Date(new Date() * 1 + seconds * 1000);
    return Cookies.set(TokenKey, token, { expires: expires })// 60 秒后失效
}

// 删除cookies里的token
export function removeToken() {
    return Cookies.remove(TokenKey)
}
