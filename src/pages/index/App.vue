<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  },
  created() {
    this.$store.dispatch("pullCommonInfo")
  }
}
</script>

<style>

</style>
