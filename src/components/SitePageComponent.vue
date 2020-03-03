<template>
<div>
<header id="header">
    <NavComponent/>
</header>
<div id="container">
    <main id="main">
        <div id="main-div">
            <slot name="main-slot"></slot>
        </div>
        <div id="side-div">
            <div layout:fragment="side-content">
                <slot name="side-slot"></slot>
            </div>
            <footer id="footer">
                <p th:utext="${siteCopyright}">Copyright&copy;2020 StyxS</p>
                <p>Powered by <a href="https://github.com/Styx-S">StyxS</a>, <a href="https://github.com/NaHCO3">NaHCO3</a></p>
            </footer>
        </div>
    </main>
</div>
</div>
</template>

<script>
import NavComponent from '@/components/NavComponent'
export default {
    name: "SitePageComponent",
    components: {
        NavComponent
    }
}
    
</script>

<style>
body {
    background-color: #f6f6f6;
    font-size: 15px;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: aquamarine;
}

#header {
    width: 100%;
    background: #ffffff;
    z-index: 100;
    position: relative;
}
#header #nav ul{
    width: 1000px;
    height: 52px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    list-style-type: none;
}
#header #nav li {
    padding: 0 18px;
    font-size: 15px;
}

#container {
    align-content: center;
}

#main {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
}

.Card {
    background: #ffffff;
}

.MainColumnCard {
    box-shadow: none;
    border-bottom: 1px solid #f0f2f7;
}

#main-div {
    width: 694px;
    border: 1px;
    background-color: #ffffff;
}

#side-div {
    display: block;
    width: 296px;
    border: 1px;
}
</style>