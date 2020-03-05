<template>
<div id="login">
    <div class="box">
        <div class="head">
            <span @click="login">登录</span>
            <span @click="register">注册</span>
        </div>
        <div class="loginBtn" :style="[loginDisplay]">
            <input type="text" placeholder="请输入账号">
            <input type="password" placeholder="请输入密码">
        </div>
        <div class="registerBtn" :style="[registerDisplay]">
            <input type="text" placeholder="请输入你要注册的账号">
            <input type="password" placeholder="请输入你要注册的密码">
            <input type="password" placeholder="请确认密码">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            loginState:"none",
            registerState:"block"
        }
    },
    methods:{
        login(){
            console.log(111)
            this.loginState = "none"
            this.registerState = "block"
        },
        register(){
            console.log(222)
            this.loginState = "block"
            this.registerState = "none"
        }
    },
    computed:{
        registerDisplay:function(){
            return{
                display:this.loginState
            }
        },
        loginDisplay:function(){
            return{
                display:this.registerState
            }
        }
    }
}
</script>

<style>
    #login{
        width: 400px;
        height: 300px;
        margin: auto;
        position: absolute;
        left:0;
        right:0;
        bottom:170px;
        top:0;
        background-color: aliceblue
    }
    .box{
        width: 350px;
        height: 250px;
        background-color: aqua;
        position: relative;
        top: 25px;left: 25px
    }
    .head span{
        font-size: 18px
    }
    .head span:hover{
        cursor: pointer;
    }
    .loginBtn{
        width: 200px;
        height: 200px;
        border: 1px solid black
    }
    .registerBtn{
        width: 200px;
        height: 200px;
        border: 1px solid red
    }
</style>