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
    .qqq{
        text-align: center;
    }
</style>
<template>
    <Form :model="formItem" :label-width="80" class="user2">
        <h3 class="font-size1">添加烘干塔</h3>
        <FormItem label="烘干塔id">
            <Input v-model="formItem.input" placeholder="输入烘干塔id"></Input>
        </FormItem>
        <FormItem label="烘干塔名称">
            <Input v-model="formItem.input" placeholder="输入烘干塔名称"></Input>
        </FormItem>
        <FormItem label="烘干塔地址">
            <Input v-model="formItem.input" placeholder="输入烘干塔地址"></Input>
        </FormItem>
        <FormItem label="名称">
            <Input v-model="formItem.input" placeholder="输入烘干塔名称"></Input>
        </FormItem>
        

        <FormItem class="qqq">
            <Button type="primary" @click="submit">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </FormItem>

        <!--<Checkbox refs="table2" v-model="checkdata" ></Checkbox>-->
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
                axios.post("http://www.wuyangdata.com:60001/role/addrole",
                    {
                        role_name: this.formItem.input,
                        description:this.formItem.textarea,
                        idsarray:this.formItem.checkbox
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
