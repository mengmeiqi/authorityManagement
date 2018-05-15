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
    <h3 class="h1">添加权限</h3>
    <FormItem label="名称" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
    </FormItem>
    <FormItem label="上级权限" prop="enterprise">
      <Input v-model="formValidate.enterprise" placeholder="请输入上级权限"></Input>
    </FormItem>
    <FormItem label="级别" prop="level">
      <Input v-model="formValidate.level" placeholder="请输入级别"></Input>
    </FormItem>
    <FormItem label="排序" prop="order">
      <Input v-model="formValidate.order" placeholder="请输入排序"></Input>
    </FormItem>
    <FormItem label="最后登录" prop="lastLogin">
      <Input v-model="formValidate.lastLogin" placeholder="请输入最后登录时间"></Input>
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
                formValidate: {
                    name: '',
                    enterprise: '',
                    level: '',
                    order: '',
                    lastLogin: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ],
                    enterprise: [
                        { required: true, message: '上级权限不能为空', trigger: 'blur' }
                    ],
                    level: [
                        { required: true, message: '级别不能为空', trigger: 'blur' }
                    ],
                    order: [
                        { required: true, message: '排序不能为空', trigger: 'blur' }
                    ],
                    lastLogin: [
                        { required: true, message: '最后登录时间不能为空', trigger: 'blur' }
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
