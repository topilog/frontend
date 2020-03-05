<template>
    <div id="app" class="container">
        <el-container class="container">
            <el-header height="50px"><span>Topilog 后台</span></el-header>
            <el-container>
                <el-aside id="sideNav" class="container" width="300px">
                    <el-menu>
                        <el-submenu v-for="(menu, mIndex) in Menus" :key="mIndex" :index="mIndex.toString()">
                            <template slot="title">
                                <span>{{menu.title}}</span>
                            </template>
                            <div v-for="(item, iIndex) in menu.items" :key="iIndex">
                                <el-menu-item-group v-if="item.items">
                                    <template slot="title">{{item.title}}</template>
                                    <el-menu-item v-for="(innerItem, innerIndex) in item.items" :key="innerIndex"
                                        :index="mIndex+'-'+iIndex+'-'+innerIndex">
                                        {{innerItem.title}}
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item v-else :index="mIndex+'-'+iIndex">
                                {{item.title}}
                                </el-menu-item>
                            </div>
                            
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
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
                        url: 'site/config'
                    }, {
                        title: '站点统计',
                        url: 'site/statistics'
                    }]
                }, {
                    title: '文章',
                    items: [{
                        title: '文章管理',
                        url: 'article/list',
                    },{
                        title: '文章统计',
                        url: 'article/statistics'
                    }]
                }, {
                    title: '用户',
                    items: [{
                        /* 再嵌套一层items，渲染时将产生一个menu-item-group */
                        title: '权限',
                        items: [{
                            title: '权限与角色',
                            url: 'user/permissionAndRole'
                        }, {
                            title: '用户权限',
                            url: 'user/userPermission'
                        }]
                    }, {
                       title: '用户管理',
                       url: 'user/list' 
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
</style>
