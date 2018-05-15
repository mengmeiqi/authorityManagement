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
    <h3 class="h1">致富添加</h3>
    <FormItem label="致 富 人 姓 名:" prop="username">
      <Input v-model="formValidate.username" placeholder="请输入用户名" ></Input>
    </FormItem>
    致富人地址：
    <Cascader :data="data" v-model="value2" style="width: 80%;float: right;text-align: center;padding-bottom: inherit"></Cascader>


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
                value2: ['heilongjiang', 'hrb', 'nanganfqu'],
                data: [{
                    value: 'heilongjiang',
                    label: '黑龙江',
                    children: [
                        {
                            value: 'hrb',
                            label: '哈尔滨',
                            children: [
                                {
                                    value: 'nanganfqu',
                                    label: '南岗区',
                                }
                            ]
                        },
                        {
                            value: 'qiqihaer',
                            label: '齐齐哈尔',
                            children: [
                                {
                                    value: 'longshaqu',
                                    label: '龙沙区',
                                },
                                {
                                    value: 'jianhua',
                                    label: '建华区',
                                }
                            ]
                        }
                    ],
                }],
                formValidate: {
                    username: '',

                },

                //是否为必填项
                ruleValidate: {
                    username: [
                        { required: true, message: 'The username cannot be empty', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submit: function() {
                console.log(this.response.wtorich);

                // 发送 POST 请求
                axios.post("http://www.wuyangdata.com:60001/wtorich/insertwtorich",
                    {

                        username: this.formValidate.username,

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
        mounted: function() {
            console.log(this.response.wtorich);

            //利用axios接口调用获取数据

            axios.get("http://www.wuyangdata.com:60001/wtorich/getallbyregion").then(
                response => {
                    this.wtorich = response.wtorich;
                },
                response => {
                    console.log("error");
                }

            );
        }
    }
</script>
