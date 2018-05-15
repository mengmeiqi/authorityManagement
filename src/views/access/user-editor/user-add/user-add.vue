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
    <h3 class="h1">添加用户</h3>
    <FormItem label="用户名" prop="username">
      <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
    </FormItem>
    <FormItem label="真实姓名" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入真实姓名"></Input>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
    </FormItem>
    部门 id:
    <Select v-model="dapa_id" style="width:80%;padding-bottom: 20px">
    <Option v-for="item in formValidate.depaList" :value="item.label" :key="item.value">{{ item.value }}</Option>
  </Select>
    
    <FormItem label="电话" prop="phone">
      <Input v-model="formValidate.phone" placeholder="请输入电话"></Input>
    </FormItem>
    <FormItem label="公司id" prop="company">
      <Input v-model="formValidate.company" placeholder="请输入公司id"></Input>
    </FormItem>
    <FormItem label="区域id" prop="region">
      <Input v-model="formValidate.region" placeholder="请输入区域id"></Input>
    </FormItem>

    <FormItem>
      <Button type="primary" @click="submit('formValidate')">提交</Button>
      <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
    </FormItem>
  </Form>
</template>
<script>
import axios from "axios";
    export default {
        data () {
            return {
                dapa_id:'',//对应select所选择的
                formValidate: {
                    name: '',
                    username: '',
                    password: '',
                    depaList: [
                        {
                            value: '1:中粮',
                            label: ' 1'
                        },
                        {
                            value: '2:市',
                            label: '2'
                        },
                        {
                            value: '3:区',
                            label: '3'
                        },
                        {
                            value: '4:县',
                            label: '4'
                        },
                        {
                            value: '5:合作社123',
                            label: '5'
                        },
                        {
                            value: '6:一部',
                            label: '6'
                        },
                        {
                            value: '7:二部',
                            label: '7'
                        },
                        {
                            value: '8:二部的一部',
                            label: '8'
                        },
                        {
                            value: '9:一部',
                            label: '9'
                        },
                        {
                            value: '10:一部',
                            label: '10'
                        },
                        {
                            value: '11:一部',
                            label: '11'
                        },
                        {
                            value: '12:合作社一部',
                            label: '12'
                        },
                    ],
                    phone: '',
                    company: '',
                    region: ''
                },

                //是否为必填项
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: 'The username cannot be empty', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'The password cannot be empty', trigger: 'blur' }
                    ],
                    depaList: [
                        { required: true, message: 'The department-id cannot be empty', trigger: 'blur' },
                    ],
                    region: [
                        { required: true, message: 'The region cannot be empty', trigger: 'blur' }
                    ]


                }
            }
        },
        methods: {
            submit: function() {
//                console.log(this.a)
              console.log(this.dapa_id);


                // 发送 POST 请求
                axios.post("http://www.wuyangdata.com:60001/toperator/addtoperator",
                    {

                        username: this.formValidate.username,
                        realName:this.formValidate.name,
                        passwd:this.formValidate.password,
                        departmentId:this.dapa_id,
                        phone:this.formValidate.phone,
                        companyId:this.formValidate.company,
                        areaId:this.formValidate.region,

                    })
                    .then(function(res) {
                        alert("添加成功");
                    })
                    .catch(function() {
                        alert("添加失败");
                        // console.log(this.username);
                    });
            }
        },
    }
</script>
