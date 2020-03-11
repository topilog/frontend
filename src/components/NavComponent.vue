<template>
<div>
    <nav id="nav">
        <ul>
            <li v-for="(item,index) in items" :key="index">
                <a :href="item.navigateToUrl">{{item.title}}</a>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    name:"NavComponent",
    data(){
        return{
            items:{}
        }
    },
    mounted: function () {
    this.$axios.get('/api/nav').then( (res)=> {
        this.items = res.data.resp
    })
    }
}

</script>

<style>

</style>