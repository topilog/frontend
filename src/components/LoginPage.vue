<template>
    <div id="page">
        <Login/>
    </div>
</template>

<script>
import Login from "@/components/LoginComponent"
export default {
    name: 'LoginPage',
    components: {
        Login
    }
}
    
</script>

<style>
#page {
    width: 100%;
    height: 100%;
    background-image: url(../pic/timg.jpg);
    background-repeat: no-repeat;
    background-size: cover; /* 重点二 */
}
</style>