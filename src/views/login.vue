<template>
    <div>
        <a-row style="height: 150px"></a-row>
        <a-row type="flex" justify="center">
            <a-card class="form">
                <a-col :span="4" style="width: 250px">
                    <img src="../assets/index-logo.png">
                </a-col>
                <a-col :span="4" style="width: 250px;margin-left: 10px">
                    <a-form>
                        <a-form-item>
                            <a-input placeholder="手机号码" ></a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-input placeholder="输入密码" type="password" ></a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-checkbox>记住密码</a-checkbox>
                            <a-checkbox>自动登录</a-checkbox>
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary"  style="width: 150px" @click="loginSuccess">登录</a-button>
                            <a-button type="link" @click="goPage('/regEdit')">去注册</a-button>
                        </a-form-item>
                    </a-form>
                </a-col>
            </a-card>

        </a-row>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            goPage(path){
                this.$router.push(path)
            },
            loginSuccess(){
                this.common.goPage('/main')
            }
        }
    }
</script>

<style scoped>
    .form{
        width: 620px;
        height: 330px;
        /*border: 1px solid #42b983;*/
        padding: 30px;
    }
</style>
