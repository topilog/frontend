import axios from 'axios'

function api(method, url, params, success, failure) {
    axios({
        method: method,
        url: url,
        data: method === 'POST' ? params : null,
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
            failure(res.data)
        }
    })
}

export default {
    get: function(url, params, success, failure) {
        return api('GET', url, params, success, failure)
    },
    post: function(url, params, success, failure) {
        return api('POST', url, params, success, failure)
    }
}