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
    <Form :model="formItem" :label-width="80" class="user2">
        <h3 class="font-size1">添加角色</h3>
        <FormItem label="名称">
            <Input v-model="formItem.input" placeholder="输入角色名称"></Input>
        </FormItem>
        <FormItem label="描述">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="添加描述"></Input>
        </FormItem>

        <FormItem >
            <CheckboxGroup v-model="formItem.checkbox">
                <h5><Checkbox label="1">系统管理：</Checkbox></h5>
                <Checkbox label="8">角色管理：</Checkbox>
                <Checkbox label="9">权限管理</Checkbox>
                <Checkbox label="10">用户管理</Checkbox>
                <Checkbox label="11">微信用户管理</Checkbox>
                <Checkbox label="12">合作社管理</Checkbox>
                <Checkbox label="13">粮库管理</Checkbox>
                <Checkbox label="14">服务商管理</Checkbox>
                <Checkbox label="15">物流管理</Checkbox>
                <Checkbox label="16">指挥中心管理</Checkbox>
                <Checkbox label="17">种植类型管理</Checkbox>
                <Checkbox label="18">种植种类管理</Checkbox>
                <Checkbox label="19">注册审核</Checkbox>
                <Checkbox label="20">烘干塔管理</Checkbox>
                <Checkbox label="21">部门管理</Checkbox>
                <Checkbox label="22">行政区管理</Checkbox>
                <Checkbox label="23">土地历史经营人关系管理</Checkbox>
                <Checkbox label="25">银行卡变更流水管理</Checkbox>
                <Checkbox label="27">散户信息管理</Checkbox>
                <Checkbox label="28">生产要素管理</Checkbox>
                <Checkbox label="29">农机和车辆管理</Checkbox>
                <Checkbox label="30">地块管理</Checkbox>
                <Checkbox label="31">亩产量管理</Checkbox>
                <Checkbox label="32">农场管理</Checkbox>
            </CheckboxGroup>
        </FormItem>


        <FormItem >
            <CheckboxGroup v-model="formItem.checkbox">
                <h5><Checkbox label="2">订单管理：</Checkbox></h5>
                <Checkbox label="33">预订单</Checkbox>
                <Checkbox label="34">预订单明细</Checkbox>
                <Checkbox label="35">订单审核管理</Checkbox>
                <Checkbox label="36">种子方案管理</Checkbox>
                <Checkbox label="37">农机方案管理</Checkbox>
                <Checkbox label="38">农资方案管理</Checkbox>
            </CheckboxGroup>
        </FormItem>

        <FormItem >
            <CheckboxGroup v-model="formItem.checkbox">
                <h5><Checkbox label="3">统计图表：</Checkbox></h5>
                <Checkbox label="39">地区种植统计</Checkbox>
                <Checkbox label="40">合作社数量图表</Checkbox>
                <Checkbox label="41">订单统计</Checkbox>
                <Checkbox label="42">粮食产量图表</Checkbox>
            </CheckboxGroup>
        </FormItem>


        <FormItem >
            <CheckboxGroup v-model="formItem.checkbox">
                <h5><Checkbox label="4">统计报表：</Checkbox></h5>
                <Checkbox label="43">订单统计报表</Checkbox>
                <Checkbox label="44">合作统计报表</Checkbox>
            </CheckboxGroup>
        </FormItem>

        <FormItem>
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
