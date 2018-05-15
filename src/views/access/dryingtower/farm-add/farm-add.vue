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
    <h3 class="h1">添加农场</h3>
    <FormItem label="农场ID" prop="id">
      <Input v-model="formValidate.id" placeholder="请输入农场id"></Input>
    </FormItem>
    <FormItem label="名称" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
    </FormItem>
    <FormItem label="归属局" prop="HomeOffice">
      <Input v-model="formValidate.HomeOffice" placeholder="请输入归属局"></Input>
    </FormItem>
    <FormItem label="种植方式" prop="Plantingmode">
      <Input v-model="formValidate.Plantingmode" placeholder="请输入种植方式"></Input>
    </FormItem>
    <FormItem label="面积" prop="area">
      <Input v-model="formValidate.area" placeholder="请输入面积"></Input>
    </FormItem>
    <FormItem label="联系人" prop="extend">
      <Input v-model="formValidate.extend" placeholder="请输入联系人"></Input>
    </FormItem>
    <FormItem label="联系方式" prop="Contactinformation">
      <Input v-model="formValidate.Contactinformation" placeholder="请输入联系方式"></Input>
    </FormItem>
    <FormItem label="北纬1" prop="Northlastitude1">
      <Input v-model="formValidate.Northlastitude1" placeholder="请输入北纬1"></Input>
    </FormItem>
    <FormItem label="北纬2" prop="Northlastitude2">
      <Input v-model="formValidate.Northlastitude2" placeholder="请输入北纬2"></Input>
    </FormItem>
    <FormItem label="东经1" prop="Eastlongitude1">
      <Input v-model="formValidate.Eastlongitude1" placeholder="请输入东经1"></Input>
    </FormItem>
    <FormItem label="东经2" prop="Eastlongitude2">
      <Input v-model="formValidate.Eastlongitude2" placeholder="请输入东经2"></Input>
    </FormItem>
    <FormItem label="级别" prop="level">
      <Input v-model="formValidate.level" placeholder="请输入级别"></Input>
    </FormItem>
    <!-- <FormItem label="附件" prop="enclosure">
      <Input v-model="formValidate.enclosure" placeholder="请输入附件"></Input>
    </FormItem> -->
    <!-- <FormItem label="附件" prop="enclosure">
      <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button type="ghost" icon="ios-cloud-upload-outline">请输入附件</Button>
    <FormItem> -->
    <FormItem label="附件" prop="enclosure">
        <Upload>
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖拽文件到这里上传</p>
        </div>
        </Upload>
    </FormItem>
    <FormItem label="备注" prop="Remarks">
      <Input v-model="formValidate.Remarks" placeholder="请输入备注"></Input>
    </FormItem>
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
                    id: '',
                    name: '',
                    HomeOffice: '',
                    Plantingmode: '',
                    area: '',
                    extend: '',
                    Contactinformation: '',
                    Northlastitude1: '',
                    Northlastitude2: '',
                    Eastlongitude1: '',
                    Eastlongitude2: '',
                    level: '',
                    enclosure: '',
                    Remarks: ''
                },
                ruleValidate: {
                    id: [
                        { required: true, message: '农场ID不能为空', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ],
                    HomeOffice: [
                        { required: true, message: '归属局不能为空', trigger: 'blur' }
                    ],
                    Plantingmode: [
                        { required: true, message: '种植方式不能为空', trigger: 'blur' }
                    ],
                    area: [
                        { required: true, message: '面积不能为空', trigger: 'blur' }
                    ],
                    extend: [
                        { required: true, message: '联系人不能为空', trigger: 'blur' }
                    ],
                    Contactinformation: [
                        { required: true, message: '联系方式不能为空', trigger: 'blur' }
                    ],
                    Northlastitude1: [
                        { required: true, message: '请输入北纬1', trigger: 'blur' }
                    ],
                    Northlastitude2: [
                        { required: true, message: '请输入北纬2', trigger: 'blur' }
                    ],
                    Eastlongitude1: [
                        { required: true, message: '请输入东经1', trigger: 'blur' }
                    ],
                    Eastlongitude2: [
                        { required: true, message: '请输入东经2', trigger: 'blur' }
                    ],
                    level: [
                        { required: true, message: '级别不能为空', trigger: 'blur' }
                    ],
                    enclosure: [
                        { required: true, message: '请输入附件', trigger: 'blur' }
                    ],
                    Remarks: [
                        { required: true, message: '请输入备注', trigger: 'blur' }
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
