<template>
    <div>
        <a-row style="height: 150px"></a-row>
        <a-row type="flex" justify="center">
            <div class="form">
                <a-col :span="4" style="width: 250px">
                    <img src="../assets/logo.png">
                </a-col>
                <a-col :span="4" style="width: 250px">
                    <a-form>
                        <a-form-item>
                            <a-input placeholder="手机号码" size="large"></a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-input placeholder="输入密码" type="password" size="large"></a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-checkbox>记住密码</a-checkbox>
                            <a-checkbox>自动登录</a-checkbox>
                        </a-form-item>
                        <a-form-item>
                            <a-button type="primary" size="large" style="width: 150px">登录</a-button>
                            <a-button type="link">去注册</a-button>
                        </a-form-item>
                    </a-form>
                </a-col>
            </div>

        </a-row>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    .form{
        width: 542px;
        height: 275px;
        border: 1px solid #42b983;
        padding: 20px;
    }
</style>