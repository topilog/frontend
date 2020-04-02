<template>
    <div id="app" class="container">
        <el-container class="container">
            <el-header class="header" height="50px"><span>Topilog 后台</span></el-header>
            <el-container>
                <el-aside id="sideBar" class="container" width="300px">
                    <el-menu id="sideNav" background-color="#333" text-color="#bbb" router>
                        <el-submenu v-for="(menu, mIndex) in Menus" :key="mIndex" :index="mIndex.toString()">
                            <template slot="title">
                                <span>{{menu.title}}</span>
                            </template>
                            <div v-for="(item, iIndex) in menu.items" :key="iIndex">
                                <el-menu-item-group v-if="item.items">
                                    <template slot="title">{{item.title}}</template>
                                    <el-menu-item v-for="(innerItem, innerIndex) in item.items" :key="innerIndex"
                                        :index="innerItem.url">
                                        {{innerItem.title}}
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item v-else :index="item.url">
                                {{item.title}}
                                </el-menu-item>
                            </div>
                            
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view id="main"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import * as url from './router/url'
export default {
    name: 'App',
    components:{
    },
    data() {
        return {
            Menus: [
                {
                    title: '网站',
                    items: [{
                        title: '网站设置',
                        url: url.kUrl_site_admin
                    }, {
                        title: '站点统计',
                        url: url.kUrl_site_statistics
                    }]
                }, {
                    title: '文章',
                    items: [{
                        title: '提交文章',
                        url: url.kUrl_article_post
                    }, {
                        title: '文章管理',
                        url: url.kUrl_article_admin
                    }, {
                        title: '文章统计',
                        url: url.kUrl_article_statistics
                    }]
                }, {
                    title: '用户',
                    items: [{
                        /* 再嵌套一层items，渲染时将产生一个menu-item-group */
                        title: '权限',
                        items: [{
                            title: '权限与角色',
                            url: url.kUrl_user_permissionAndRole
                        }, {
                            title: '用户权限',
                            url: url.kUrl_user_permissions
                        }]
                    }, {
                       title: '用户管理',
                       url: url.kUrl_user_admin
                    }]
                }
            ]
        }
    }
}
</script>
<style>
.container {
    height: 100%;
}

.header {
    background: #262F3E;
    color: #fff;
}

#sideBar {
    display: block;
    position: absolute; 
    left: 0;
    top: 50px;
    bottom: 0;
    background: #333;
    color: #bbb;
}

#sideNav {
    height: 100%;
}

#main {
    display: block;
    position: absolute;
    left: 300px;
    right: 0;
    top: 50px;
    bottom: 0;
}
</style>
