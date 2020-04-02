import axios from 'axios'
import Qs from 'qs'

function api(method, url, params, success, failure, urlencode) {
    axios({
        method: method,
        url: url,
        data: method === 'POST' ? (urlencode === true ? Qs.stringify(params) : params): null,
        params: method === 'GET' ? params : null,
        baseURL: '/',
        withCredentials: failure
    })
    .then(res => {
        if (res.data.status === true) {
            if (success) {
                success(res.data)
            }
        } else if (res.data.status === false) {
            if (failure) {
                failure(res.data)
            } else {
                // 默认行为打个log
                console.log(res)
            }
        }
    })
}

export default {
    get: function(url, params, success, failure) {
        return api('GET', url, params, success, failure)
    },
    post: function(url, params, success, failure) {
        return api('POST', url, params, success, failure)
    },
    /* 使用application/x-www-form-urlencode编码POST params 对应Springboot中的@requestParam */
    postWithURLEncoded: function(url, params, success, failure) {
        return api('POST', url, params, success, failure, true)
    },
}