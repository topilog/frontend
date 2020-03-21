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
    computed: {
        items() {
            return this.$store.state.commonInfo.navItems
        }
    }
}

</script>

<style>

</style>