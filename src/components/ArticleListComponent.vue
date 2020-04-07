<template>
<div>
    <article class="MainColumnCard Card ArticleCard" v-for="info in articleInfos" :key="info">
        <h1 class="title">
            <a :href="'/article/' + info.id">{{info.title}}</a>
        </h1>
        <p class="summary">
            {{info.summary}}
        </p>
        </ul>
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