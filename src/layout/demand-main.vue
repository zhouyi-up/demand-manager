<template>
    <Layout>
        <demand-left/>
        <demand-center/>
        <demand-right/>
    </Layout>
</template>

<script>
    import DemandLeft from "./demand-left";
    import DemandRight from "./demand-right";
    import DemandCenter from "./demand-center";
    export default {
        name: "demand-main",
        components: {DemandCenter, DemandRight, DemandLeft}
    }
</script>

<style scoped>

</style>
