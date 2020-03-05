<template>
<div>
    <div id="page">
        <Login/>
    </div>
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
    body{
        background-image: url(../pic/timg.jpg);
        background-repeat: no-repeat;
        background-size: cover; /* 重点二 */
    }
</style>