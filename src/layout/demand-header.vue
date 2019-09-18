<template>
    <div class="demand-header">
        <a-row>
            <a-col span="3" style="line-height: 50px;text-align: center">
                <span>需求管理系统</span>
            </a-col>
            <a-col span="20">
                <a-menu mode="horizontal" class="menu-header">

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
