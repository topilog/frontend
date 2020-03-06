import Vue from 'vue'
import Router from 'vue-router'
import SiteAdminPage from '@/components/admin/SiteAdminPage'
import SiteStatisticsPage from '@/components/admin/SiteStatisticsPage'
import ArticleAdminPage from '@/components/admin/ArticleAdminPage'
import ArticleStatisticsPage from '@/components/admin/ArticleStatisticsPage'
import PermissionAndRolePage from '@/components/admin/PermissionAndRolePage'
import UserPermissionPage from '@/components/admin/UserPermissionPage'
import UserAdminPage from '@/components/admin/UserAdminPage'
import NotFoundComponent from '@/components/NotFoundComponent'

import * as url from './url'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
    { path: url.kUrl_site_admin, component: SiteAdminPage},
    { path: url.kUrl_site_statistics, component: SiteStatisticsPage},
    { path: url.kUrl_article_admin, component: ArticleAdminPage},
    { path: url.kUrl_article_statistics, component: ArticleStatisticsPage},
    { path: url.kUrl_user_permissionAndRole, component: PermissionAndRolePage},
    { path: url.kUrl_user_permissions, component: UserPermissionPage},
    { path: url.kUrl_user_admin, component: UserAdminPage},
    { path: '*', component: NotFoundComponent }
    ]
})
