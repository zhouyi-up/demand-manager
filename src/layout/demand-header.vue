<template>
    <div class="demand-header">
        <a-row>
            <a-col span="3">
                <img src="../assets/index-logo.png">
            </a-col>
            <a-col span="20">
                <a-menu mode="horizontal" class="menu-header">
                    <a-menu-item>菜单</a-menu-item>
                    <a-menu-item>菜单</a-menu-item>
                    <a-menu-item>菜单</a-menu-item>
                    <a-menu-item>菜单</a-menu-item>
                </a-menu>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "demand-header"
    }
</script>

<style scoped>
    .demand-header{
        height: 50px;
        overflow: hidden;
    }
    .menu-header{
        line-height: 48px;
    }
</style>
