<style>
    .user2{
        background: white;
        padding: 20px;
        padding-left: 300px;
        padding-right: 300px;
        height: 100%;
        /*text-align: center;*/
        
    }
    .font-size1{
        padding: 10px;
        text-align: center;
    }

</style>
<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
    <h3 class="h1">添加扶贫项目</h3>
    <FormItem label="id" prop="id">
      <Input v-model="formValidate.id" placeholder="请输入id"></Input>
    </FormItem>
    <FormItem label="地区编号" prop="areaId">
      <Input v-model="formValidate.areaId" placeholder="请输入地区编号"></Input>
    </FormItem>
    <FormItem label="政策详情" prop="policyDetail">
      <Input v-model="formValidate.policyDetail" placeholder="请输入政策详情"></Input>
    </FormItem>
    <FormItem label="政策编号" prop="policyNum">
      <Input v-model="formValidate.policyNum" placeholder="请输入政策编号"></Input>
    </FormItem>
    
    <FormItem label="排序号" prop="sort">
      <Input v-model="formValidate.sort" placeholder="请输入排序号"></Input>
    </FormItem>
    <FormItem label="创建时间" prop="createDate">
      <Input v-model="formValidate.createDate" placeholder="请输入创建时间"></Input>
    </FormItem>
    <FormItem label="显示状态" prop="displayStatus">
      <Input v-model="formValidate.displayStatus" placeholder="请输入显示状态"></Input>
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
                formItem: {
                    input: '',
                    checkbox: [],
                    textarea: '',
                    checkdata: []
                }
            }
        },
        methods: {
            submit: function() {
                // 发送 POST 请求
                axios.post("http://39.107.253.90:60001/wpovertypolicy/insertwpovertypolicy",
                    {
                        id: this.formItem.id,
                        areaId:this.formItem.areaId,
                        policyDetail:this.formItem.policyDetail,
                        policyNum:this.formItem.policyNum,
                        sort:this.formItem.sort,
                        createDate:this.formItem.createDate,
                        displayStatus:this.formItem.displayStatus,
                    })
                    .then(function(res) {
                        alert("添加成功");
                        
                    })
                    .catch(function() {
                        alert("添加失败");
                    });
            }
        }
    }
</script>
