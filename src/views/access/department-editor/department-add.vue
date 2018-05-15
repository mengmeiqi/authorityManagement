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
    <h3 class="h1">添加部门</h3>
    <FormItem label="部门Id" prop="deptId">
      <Input v-model="formValidate.username" placeholder="请输入部门Id"></Input>
    </FormItem>
    <FormItem label="部门名称" prop="deptName">
      <Input v-model="formValidate.name" placeholder="请输入部门名称"></Input>
    </FormItem>
    <FormItem label="父级Id" prop="parenId">
      <Input v-model="formValidate.password" placeholder="请输入父级Id"></Input>
    </FormItem>
    <FormItem label="等级" prop="level">
      <Input v-model="formValidate.mail" placeholder="请输入等级"></Input>
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
                    deptId: '',
                    deptName: '',
                    parenId: '',
                    level: '',
                },
                ruleValidate: {
                    deptId: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    deptName: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    parenId: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    level: [
                        { required: true, message: '这里不能为空', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (deptId) {
                this.$refs[deptId].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (deptId) {
                this.$refs[deptId].resetFields();
            }
        }
    }
</script>
