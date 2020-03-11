<template>
<div>
    <SitePageComponent>
        <ArticleListComponent slot="main-slot" :articleInfos="articleInfos" />
    </SitePageComponent>
</div>
</template>

<script>
import SitePageComponent from '@/components/SitePageComponent'
import ArticleListComponent from '@/components/ArticleListComponent'
export default {
    name: "MainPage",
    components: {
        SitePageComponent,
        ArticleListComponent,
    },
    data() {
        return {
            articleInfos: []
        }
    },
    mounted() {
        this.$axios.get('/api/article/infos').then((res) => {
            this.articleInfos = res.data.resp
        })
    }
}
    
</script>

<style>

</style>