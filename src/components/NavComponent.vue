<template>
<div>
    <nav class="nav">
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
    computed: {
        items() {
            return this.$store.state.commonInfo.navItems
        }
    }
}

</script>

<style scoped>
.nav ul{
    height: 52px;
    margin: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
}
.nav li {
    padding: 0 18px;
    font-size: 16px;
}
</style>