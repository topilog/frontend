<template>
<div>
    <header class="header">
        <div class="Container">
            <NavComponent/>
        </div>
    </header>
<div class="Container">
    <main class="row">
        <div class="MainColumn">
            <slot name="main-slot"></slot>
        </div>
        <div class="SideColumn">
            <slot name="side-slot"></slot>
            <footer id="footer">
                <span th:utext="${siteCopyright}">Copyright&copy;2020 StyxS</span><br>
                <span>Powered by </span><a href="https://github.com/topilog">Topilog</a>
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

<style scoped>
.header {
    width: 100%;
    background: var(--foreground-bg-color);
    z-index: 100;
    position: relative;
}
.row {
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
}
</style>