<template>
    <div>
        <a-row style="height: 120px"></a-row>
        <a-row type="flex" justify="center">
            <a-col :span="8">
                <a-form
                        :form="form"
                        @submit="handleSubmit"
                >
                    <a-form-item
                            v-bind="formItemLayout"
                            label="手机号"
                    >
                        <a-input
                                v-decorator="[
          'mobile',
          {
            rules: [{
              type: 'mobile', message: '请输入手机号',
            }, {
              required: true, message: '请输入手机号',
            }]
          }
        ]"
                        />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="密码">
                        <a-input v-decorator="[
          'password',
          {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: validateToNextPassword,
            }],
          }
        ]" type="password"/>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="确认密码">
                        <a-input
                                v-decorator="['confirm',{rules: [{required: true, message: 'Please confirm your password!',}, {validator: compareToFirstPassword,}],}]"
                                type="password" @blur="handleConfirmBlur"/>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="验证码">
                        <a-row :gutter="8">
                            <a-col :span="12">
                                <a-input v-decorator="['captcha',{rules: [{ required: true, message: '请输入验证码' }]}]"/>
                            </a-col>
                            <a-col :span="12">
                                <a-button>获取验证码</a-button>
                            </a-col>
                        </a-row>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="推荐码">
                        <a-row :gutter="8">
                            <a-col :span="12">
                                <a-input/>
                            </a-col>
                        </a-row>
                    </a-form-item>
                    <a-form-item v-bind="tailFormItemLayout">
                        <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
                            我同意<a href="">《需求管理系统使用协议》</a>
                        </a-checkbox>
                    </a-form-item>
                    <a-form-item v-bind="tailFormItemLayout">
                        <a-button type="primary" html-type="submit">注册</a-button>
                        <a-button type="link" @click="reg">去登陆</a-button>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
    </div>


</template>

<script>
    const residences = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
            }],
        }],
    }];

    export default {
        data() {
            return {
                confirmDirty: false,
                residences,
                autoCompleteResult: [],
                formItemLayout: {
                    labelCol: {
                        xs: {span: 24},
                        sm: {span: 8},
                    },
                    wrapperCol: {
                        xs: {span: 24},
                        sm: {span: 16},
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        },
                    },
                },
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        window.console.log('Received values of form: ', values);
                    }
                });
            },
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
                }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], {force: true});
                }
                callback();
            },
            reg(){
                this.common.goPage('/login')
            }
        },
    };
</script>
