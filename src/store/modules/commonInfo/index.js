import api from '@/api'

export default {
    state: {
        siteName: String,
        navItems: Array,
        copyright: String,
    },
    mutations: {
        setCommonInfo(state, commonInfo) {
            state.siteName = commonInfo.siteName
            state.navItems = commonInfo.navItems
            state.copyright = commonInfo.copyright
            // 在这里更新一下名字
            var l = document.title.search('-')
            l = l === -1 ? 0 : l
            var metaName = document.title.substr(l).trim()
            var name
            if (l === 0 || metaName.length === 0) 
                name = state.siteName
            else 
                name = state.siteName + ' - ' + metaName
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
}