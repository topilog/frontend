import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        commonInfo: {
            siteName: String,
            navItems: Array,
            copyright: String,
        }
    },
    mutations: {
        setCommonInfo(state, commonInfo) {
            state.commonInfo = {...commonInfo}
            // 在这里更新一下名字
            var l = document.title.search('-')
            l = l === -1 ? 0 : l
            var metaName = document.title.substr(l).trim()
            var name
            if (l === 0 || metaName.length === 0) 
                name = state.commonInfo.siteName
            else 
                name = state.commonInfo.siteName + ' - ' + metaName
            document.title = name
        }
    }, 
    actions: {
        pullCommonInfo(context) {
            api.get('/api/site/info', null, r => {
                context.commit('setCommonInfo', r.resp)
            })
        }
    }
})