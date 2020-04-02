import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

import commonInfo from '../modules/commonInfo'
import user from '../modules/user'
export default new vuex.Store({
    modules: {
        commonInfo,
        user,
    },
})