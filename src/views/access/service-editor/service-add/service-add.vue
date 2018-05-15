<style>
  .user1{
    background: white;
    padding: 20px;
    padding-left: 300px;
    padding-right: 300px;
    height: 100%;
    text-align: center;
  }
  .h1{
    padding: 10px;
    text-align: center;
    
  }
</style>

<template>

  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
    <h3 class="h1">添加服务商</h3>
    <FormItem label="ID" prop="id">
      <Input v-model="formValidate.id" placeholder="请输入id"></Input>
    </FormItem>
    <FormItem label="服务商" prop="serviceProvider">
      <Input v-model="formValidate.serviceProvider" placeholder="请输入服务商名称"></Input>
    </FormItem>
    <FormItem label="地址" prop="address">
        <Cascader :data="data" trigger="hover"></Cascader>
      <!-- <Input v-model="formValidate.address" placeholder="请输入地址"></Input> -->
    </FormItem>
    <FormItem label="创建日期" prop="date">
      <Input v-model="formValidate.date" placeholder="请输入创建日期"></Input>
    </FormItem>
    <FormItem label="企业类型" prop="style">
      <Input v-model="formValidate.style" placeholder="请输入企业类型"></Input>
    </FormItem>
    <FormItem label="地区" prop="regin">
        <Cascader :data="data" trigger="hover"></Cascader>
      <!-- <Input v-model="formValidate.regin" placeholder="请输入地区名称"></Input> -->
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
      <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
    </FormItem>
  </Form>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                formValidate: {
                    id: '',
                    serviceProvider: '',
                    address: '',
                    date: '',
                    style: '',
                    regin: ''
                },
                ruleValidate: {
                    id: [
                        { required: true, message: 'ID不能为空', trigger: 'blur' }
                    ],
                    serviceProvider: [
                        { required: true, message: '服务商不能为空', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '地址不能为空', trigger: 'blur' }
                    ],
                    date: [
                        { required: true, message: '创建日期不能为空', trigger: 'blur' }
                    ],
                    style: [
                        { required: true, message: '企业类型不能为空', trigger: 'blur' }
                    ],
                    regin: [
                        { required: true, message: '地区不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
