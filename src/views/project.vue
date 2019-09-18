<template>
    <div>
        <a-row>
            <a-col :span="6" v-for="item in projectList" :key="item.id">
                <ProjectItem :bg-img="item.bgImg" :project-id="item.id" :project-name="item.name"></ProjectItem>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import ProjectItem from "@/components/ProjectItem";
    export default {
        name: "project",
        components: {ProjectItem},
        data(){
            return{
                projectList:{}
            }
        },
        methods:{
            initPage(){
                const projects = [{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:1
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:2
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:3
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:4
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:5
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:6
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:6
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:6
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:6
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:6
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:6
                },{
                    name:'test',
                    bgImg:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                    id:6
                }]

                this.projectList = projects;
                // for (var i = 0; i< projects.length ; i++){
                //     var row = this.projectList.get(parseInt(i/5).toString());
                //     if (row === undefined){
                //         row = new Array();
                //     }
                //     row.push(projects[i]);
                //     this.projectList.set(parseInt(i/5).toString(),row)
                // }
                // window.console.log(this.projectList)
            }
        },
        created(){
            this.initPage();
        }
    }
</script>

<style scoped>

</style>