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
                            <el-menu-item v-for="(item, iIndex) in menu.items" :key="iIndex" 
                                :index="mIndex+'-'+iIndex">
                                {{item.title}}
                            </el-menu-item>
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
