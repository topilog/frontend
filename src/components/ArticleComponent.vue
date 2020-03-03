<template>
<div>
    <div class="article" v-html="articleContent">
    </div>
</div>
</template>

<script>
export default {
    name:'ArticleComponent',
    props: ['article'],
    methods: {
        convertMD: function(markdown) {
            var converter = new showdown.Converter({tables:true}); //初始化转换器
            var htmlContent  = converter.makeHtml(markdown); //将MarkDown转为html格式的内容
            return htmlContent;
        }
    },
    computed: {
        articleContent: function() {
            return this.convertMD(this.article.content)
        }
    }
}
</script>

<style>

</style>