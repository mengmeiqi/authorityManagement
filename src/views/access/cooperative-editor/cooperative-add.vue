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
    <h3 class="h1">添加合作社</h3>
    <FormItem label="合作社ID" prop="id">
      <Input v-model="formValidate.id" placeholder="请输入合作社ID"></Input>
    </FormItem>
    <FormItem label="名称" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
    </FormItem>
    <FormItem label="地址" prop="address">
      <Cascader :data="data" trigger="hover"></Cascader>
      <!-- <Input v-model="formValidate.address" placeholder="请输入地址"></Input> -->
    </FormItem>
    <FormItem label="行政地区" prop="administrative">
        <Cascader :data="data" trigger="hover"></Cascader>
      <!-- <Input v-model="formValidate.administrative" placeholder="请输入行政地区"></Input> -->
    </FormItem>
    <FormItem label="是否有仓库" prop="storehouse">
      <Input v-model="formValidate.storehouse" placeholder="请输入是否有仓库"></Input>
    </FormItem>
    <FormItem label="是否有扩展量" prop="extend">
      <Input v-model="formValidate.extend" placeholder="请输入是否有扩展量"></Input>
    </FormItem>
    <FormItem label="区域" prop="area">
        <Cascader :data="data" trigger="hover"></Cascader>
      <!-- <Input v-model="formValidate.area" placeholder="请输入区域"></Input> -->
    </FormItem>
     <FormItem label="联系人" prop="contact">
      <Input v-model="formValidate.contact" placeholder="请输入联系人"></Input>
    </FormItem>
    <FormItem label="联系人电话" prop="contactphonenumber">
      <Input v-model="formValidate.contactphonenumber" placeholder="请输入联系人电话"></Input>
    </FormItem>
    <FormItem label="合作社类型" prop="cooperativetype">
      <Input v-model="formValidate.cooperativetype" placeholder="请输入合作社类型"></Input>
    </FormItem>
    <FormItem label="备注" prop="remarks">
      <Input v-model="formValidate.remarks" placeholder="请输入备注"></Input>
    </FormItem>
    <FormItem label="创建时间" prop="createtime">
      <Input v-model="formValidate.createtime" placeholder="请输入创建时间"></Input>
    </FormItem>
    <FormItem label="积温带" prop="accumulativetemperaturezone">
      <Input v-model="formValidate.accumulativetemperaturezone" placeholder="请输入积温带"></Input>
    </FormItem>
    <FormItem label="是否有烘干塔" prop="dryingtower">
      <Input v-model="formValidate.dryingtower" placeholder="请输入是否有烘干塔"></Input>
    </FormItem>
    <FormItem label="日烘干能力" prop="dailydryingcapacity">
      <Input v-model="formValidate.dailydryingcapacity" placeholder="请输入日烘干能力"></Input>
    </FormItem>
    <FormItem label="粮食品种" prop="grainvarieties">
      <Input v-model="formValidate.grainvarieties" placeholder="请输入粮食品种"></Input>
    </FormItem>
    <FormItem label="法定代表人姓名" prop="legalrepresentative">
      <Input v-model="formValidate.legalrepresentative" placeholder="请输入法定代表人姓名"></Input>
    </FormItem>
    <FormItem label="法定代表人性别" prop="legalpersonsex">
      <Input v-model="formValidate.legalpersonsex" placeholder="请输入法定代表人性别"></Input>
    </FormItem>
    <FormItem label="法定代表人生日" prop="legalpersonbirthday">
      <Input v-model="formValidate.legalpersonbirthday" placeholder="请输入法定代表人生日"></Input>
    </FormItem>
    <FormItem label="法人电话" prop="legalpersonnumber">
      <Input v-model="formValidate.legalpersonnumber" placeholder="法人电话"></Input>
    </FormItem>
    <FormItem label="法人证件类型" prop="idtype">
      <Input v-model="formValidate.idtype" placeholder="法人证件类型"></Input>
    </FormItem>
    <FormItem label="法人证件号码" prop="idnumber">
      <Input v-model="formValidate.idnumber" placeholder="请输入法人证件号码"></Input>
    </FormItem>
    <FormItem label="法人现居住地" prop="residence">
        <Cascader :data="data" trigger="hover"></Cascader>
      <!-- <Input v-model="formValidate.residence" placeholder="请输入法人现居住地"></Input> -->
    </FormItem>
    <FormItem label="法人身份证正面" prop="idpositive">
      <Input v-model="formValidate.idpositive" placeholder="请输入法人身份证正面"></Input>
    </FormItem>
    <FormItem label="法人身份证反面" prop="idopposite">
      <Input v-model="formValidate.idopposite" placeholder="请输入法人身份证反面"></Input>
    </FormItem>
    <FormItem label="合作社营业执照" prop="businesslicense">
      <Input v-model="formValidate.businesslicense" placeholder="请输入合作社营业执照"></Input>
    </FormItem>
    <FormItem label="传真" prop="fax">
      <Input v-model="formValidate.fax" placeholder="请输入传真"></Input>
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
                    name: '',
                    address: '',
                    administrative: '',
                    storehouse: '',
                    extend: '',
                    area: '',
                    contact: '',
                    contactphonenumber: '',
                    cooperativetype: '',
                    remarks: '',
                    createtime: '',
                    accumulativetemperaturezone: '',
                    dryingtower: '',
                    dailydryingcapacity: '',
                    grainvarieties: '',
                    legalrepresentative: '',
                    legalpersonsex: '',
                    legalpersonbirthday: '',
                    legalpersonnumber: '',
                    idtype: '',
                    idnumber: '',
                    residence: '',
                    idpositive: '',
                    idopposite: '',
                    businesslicense: '',
                    fax: ''
                },
                ruleValidate: {
                    id: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    storehouse:[
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    extend: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    contact: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    contactphonenumber: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    createtime: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    legalrepresentative: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
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
