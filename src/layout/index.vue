<template>
    <div>
        <Header>
            <demand-header/>
        </Header>
        <div>
           <a-row>
               <a-col :span="3">
                   <demand-left/>
               </a-col>
               <a-col :span="20">
                   <demand-center/>
               </a-col>
           </a-row>
        </div>
    </div>
</template>

<script>
    import DemandLeft from "./demand-left";
    import DemandCenter from "./demand-center";
    import DemandHeader from "./demand-header";
    export default {
        name: "index",
        components: {DemandCenter, DemandLeft,DemandHeader}
    }
</script>

<style scoped>

</style>
