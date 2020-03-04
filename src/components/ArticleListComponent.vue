<template>
<div>
    <article class="Card MainColumnCard" v-for="info in articleInfos" :key="info">
        <a :href="'/article/' + info.id"><h1>{{info.title}}</h1></a>
        <a :href="'/article/' + info.id"><p>{{info.summary}}</p></a>
    </article>   
</div>
</template>

<script>
export default {
    name:'ArticleListComponent',
    props: {
        articleInfos : {
            type: Array
        }
    }
}
</script>

<style>

</style>