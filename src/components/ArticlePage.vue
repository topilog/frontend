<template>
<div>
    <SitePageComponent>
        <ArticleComponent slot="main-slot" v-bind:article="article" />
    </SitePageComponent>
</div>
</template>

<script>
import SitePageComponent from '@/components/SitePageComponent'
import ArticleComponent from '@/components/ArticleComponent'
export default {
    name: "ArticlePage",
    components: {
        SitePageComponent,
        ArticleComponent,
    },
    data() {
        return {
            article: {
                "id": 3,
                "createTime": "2020-03-02T16:01:02.926+0000",
                "modifiedTime": "2020-03-02T16:01:02.926+0000",
                "content": "# Hello Markdown!（TEST）"
            }
        }
    },
    mounted() {
        this.$axios.get(this.$url + '/api/article/article', {
            params: {
                articleId: this.$route.params.id
            }
        }).then((res) => {
            this.article = res.data.resp
        })
    }
}
    
</script>

<style>

</style>