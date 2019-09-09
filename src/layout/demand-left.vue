<template>
    <a-menu class="demand-menu">
        <a-menu-item @click="goPage('/main/uploadDemand')">上传</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
        <a-menu-item>我是菜单</a-menu-item>
    </a-menu>
</template>

<script>
    export default {
        name: "demand-left",
        methods:{
            goPage(path){
                this.$router.push(path)
            },
        }
    }
</script>

<style scoped>
    .demand-menu{
        text-align: center;
        min-height: calc(100vh - 54px);
    }
    .ant-menu-item{
        border-radius: 50px;
    }
</style>
