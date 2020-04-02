import api from '@/api'
import md5 from 'js-md5'

export default {
    state: {
        username: '',
        loginState: false,
    },
    mutations: {
        changeState(state, username) {
            state.username = username
            state.loginState = username !== null
        }
    }, 
    actions: {
        // 拉取盐后执行回调
        requestSalt({}, {username, success}) {
            api.get('/api/user/salt', {
                username
            },(data) => {
                success(data.resp)
            })
        },
        login({dispatch, commit}, {username, password}) {
            dispatch('requestSalt', {
                username,
                success: (salt) => {
                    var md5p = md5(md5(password)+salt)
                    
                    api.postWithURLEncoded('/api/user/login', {
                        'username': username,
                        'password': md5p,
                    }, () => {
                        commit('changeState', username)
                    })
                }
            })
        },
        register({dispatch, commit}, {username, password}) {
            dispatch('requestSalt', {
                username: null,
                success: (salt) => {
                    var md5p = md5(md5(password)+salt)

                    api.postWithURLEncoded('/api/user/register', {
                        'username': username,
                        'password': md5p,
                        'salt': salt,
                    }, () => {
                        commit('changeState', username)
                    })
                }
            })
        }
    }
}