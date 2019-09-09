<template>
    <a-card style="border: none;padding: 60px">
        <a-steps :current="current">
            <a-step v-for="item in uploadStepList" :key="item.title" :title="item.title"/>
        </a-steps>
        <div style="margin-top: 20px;margin-bottom: 20px;height: 360px">
            <div v-if="this.current == 0">
                <a-row type="flex" justify="space-around" align="middle" style="height: 350px">
                    <a-col :span="10">
                        <a-form-item label="标题" :labelCol="{span:2}" :wrapperCol="{span:22}" :colon="false">
                            <a-input v-model="fileTitle"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>
            <div v-if="this.current == 1">
                <a-row type="flex" justify="space-around" align="middle" style="height: 350px">
                    <a-col :span="10">
                       <a-upload-dragger @change="handleChange" accept=".zip" action="http://localhost:8080">
                           <p class="ant-upload-drag-icon">
                               <a-icon type="inbox" />
                           </p>
                           <p class="ant-upload-text">点击/拖入此处上传文件</p>
                           <p class="ant-upload-hint">目前仅支持.zip文件</p>
                       </a-upload-dragger>
                    </a-col>
                </a-row>
            </div>
            <div v-if="this.current == 2">
                <a-row type="flex" justify="space-around" align="middle" style="height: 350px">
                    <a-col :span="10">
                       <a-card>
                           <a-row>
                               <a-col :span="4">标题</a-col>
                               <a-col :span="20">{{fileTitle}}</a-col>
                           </a-row>
                           <a-row>
                               <a-col :span="4">文件</a-col>
                               <a-col :span="20">{{uploadFile}}</a-col>
                           </a-row>
                       </a-card>
                    </a-col>
                </a-row>
            </div>
        </div>
        <a-row type="flex" justify="center">
            <a-col :span="4">
                <a-button-group>
                    <a-button  type="primary" @click="prev" v-if="current > 0 ">上一步</a-button>
                    <a-button  type="primary" @click="next" v-if="current < uploadStepList.length -1">下一步</a-button>
                    <a-button  type="primary" @click="finish" v-if="current == uploadStepList.length -1">完成</a-button>
                </a-button-group>
            </a-col>
        </a-row>
    </a-card>
</template>

<script>
    export default {
        name: "uploadDemand",
        data(){
            return{
                current:0,
                uploadStepList:[{
                    title:'输入标题'
                },{
                    title: '上传ZIP包'
                },{
                    title: '完成'
                }],
                uploadFile:undefined,
                fileTitle:''
            }
        },
        methods:{
            next(){
                this.current++
            },
            finish(){

            },
            prev(){
                this.current--
            },
            handleChange(info) {
                const status = info.file.status;
                if (status !== 'uploading') {
                    window.console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    this.$message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    this.$message.error(`${info.file.name} file upload failed.`);
                }
            },
        }
    }
</script>

<style scoped>

</style>