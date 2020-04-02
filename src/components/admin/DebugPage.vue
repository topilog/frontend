<template>
<div>
    <button @click="login">登录测试</button>
    <button @click="register"> 注册测试 </button>
</div>
</template>

<script>
export default {
    name:'DebugPage',
    methods: {
        login: function() {
            this.$store.dispatch('login', {
                username: 'adminUser',
                password: '12345'
            })
        },
        register: function() {
            this.$store.dispatch('register', {
                username: 'styxss',
                password: '12345'
            })
        },
    },
}
</script>

<style>
</style>