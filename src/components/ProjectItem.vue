<template>
    <a-card class="projectCard" hoverable>
        <img :src="bgImg"  slot="cover">
        <template class="ant-card-actions" slot="actions">
            <a-icon type="setting" />
            <a-icon type="edit" />
            <a-icon type="ellipsis" />
        </template>
        <a-card-meta :title="projectName" :description="projectId">
            <a-avatar slot="avatar" style="background: none;font-size: 64px;width: 64px;height: 64px">
                <a-icon type="smile" theme="twoTone" />
            </a-avatar>
        </a-card-meta>
    </a-card>
</template>

<script>
    export default {
        name: "ProjectItem",
        components:{

        },
        props:[
            'projectId',
            'bgImg',
            'projectName'
        ]
    }
</script>

<style scoped>
    .projectCard{
        /*width: 300px;*/
        margin: 10px
    }
</style>