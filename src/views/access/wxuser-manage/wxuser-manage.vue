<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";
#btn {
    left: 1020px;
    top: 30px;
    position: absolute;
}
.user1 {
    background: white;
    padding: 20px;
    padding-left: 300px;
    padding-right: 300px;
    height: 100%;
    text-align: center;
}
.h1 {
    padding: 10px;
    text-align: center;
}
</style>

<template>
  <div>
    <div v-if="isshow">
      <Row class="margin-top-10">

        <Col span="24">
        <Card>
          <p slot="title">
            <Icon type="mouse"></Icon>
            点击搜索进行搜索
          </p>
          <Row>
            <Col span="20">
            <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入用户姓名..." />
            </Col>
            <Col span="4">
            <span @click="handleSearch3" style="margin: 0 10px;">
              <Button type="primary" icon="search">搜索</Button>
            </span>
            <Button @click="handleCancel3" type="ghost">取消</Button>
            </Col>
          </Row>
        </Card>
        </Col>

        <Col span="24">
        <Card>
          <p slot="title">
            <Icon type="android-remove"></Icon>
            微信用户管理
          </p>
          <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
          <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>
          <router-view></router-view>

        </Card>
        </Col>
      </Row>
    </div>
    <div v-if="!isshow">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
        <h3 class="h1">添加微信用户</h3>
        <FormItem label="id" prop="id">
          <Input v-model="formValidate.id" placeholder="请输入id"></Input>
        </FormItem>
        <FormItem label="微信名称" prop="wxname">
          <Input v-model="formValidate.wxname" placeholder="请输入微信名称"></Input>
        </FormItem>
        <FormItem label="微信用户名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入微信用户名"></Input>
        </FormItem>
        <FormItem label="用户id" prop="yhid">
          <Input v-model="formValidate.yhid" placeholder="请输入用户id"></Input>
        </FormItem>
        <FormItem label="家庭住址" prop="address">
          <Input v-model="formValidate.address" placeholder="请输入家庭住址"></Input>
        </FormItem>
        <FormItem label="地区名称" prop="aname">
          <Input v-model="formValidate.aname" placeholder="请输入地区名称"></Input>
        </FormItem>
       
        <FormItem>
          <Button type="primary" @click="submit('formValidate')">提交</Button>
          <Button v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </div>
  </div>

</template>




<script>
import canEditTable from "../../tables/components/usercanEditTable.vue";
import axios from "axios";

export default {
    name: "editable-table",
    components: {
        canEditTable
    },
    data() {
        return {
            formValidate: {
                id: "",
                wxname: "",
                name: "",
                yhid: "",
                address: "",
                aname: ""
            },
            ruleValidate: {
                name: [
                    {
                        required: true,
                        message: "The name cannot be empty",
                        trigger: "blur"
                    }
                ],
                username: [
                    {
                        required: true,
                        message: "The username cannot be empty",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "The password cannot be empty",
                        trigger: "blur"
                    }
                ],
                mail: [
                    {
                        required: true,
                        message: "Mailbox cannot be empty",
                        trigger: "blur"
                    },
                    {
                        type: "email",
                        message: "Incorrect email format",
                        trigger: "blur"
                    }
                ],
                role: [
                    {
                        required: true,
                        message: "Please select the role",
                        trigger: "change"
                    }
                ],
                gender: [
                    {
                        required: true,
                        message: "Please select gender",
                        trigger: "change"
                    }
                ],
                department: [
                    {
                        required: true,
                        message: "Please select the department",
                        trigger: "change"
                    }
                ]
            },
            isshow: true,
            initTable1: [],
            editInlineColumns: [
                {
                    title: "id",
                    align: "center",
                    key: "userId"
                },
                {
                    title: "微信名称",
                    align: "center",
                    key: "realName"
                },
                {
                    title: "微信用户名",
                    align: "center",
                    key: "username",
                    editable: true
                },

                {
                    title: "用户id",
                    align: "center",
                    key: "departmentId",
                    editable: true
                },
                {
                    title: "电话号码",
                    align: "center",
                    key: "phone",
                    editable: true
                },
                {
                    title: "行为id",
                    align: "center",
                    key: "commercialId",
                    editable: true
                },
                {
                    title: "最近登陆",
                    align: "center",
                    key: "lastlogin"
                },
                {
                    title: "住宅id",
                    align: "center",
                    key: "companyId",
                    editable: true
                },
                {
                    title: "地区id",
                    align: "center",
                    key: "areaId",
                    editable: true
                },
                {
                    title: "家庭住址",
                    align: "center",
                    key: "departmentName",
                    editable: true
                },
                {
                    title: "地区名称",
                    align: "center",
                    key: "areaName",
                    editable: true
                },
                {
                    title: "操作",
                    align: "center",
                    width: 240,
                    key: "handle",
                    handle: ["view", "edit", "delete"]
                }
            ],

            editInlineData: []
        };
    },
    methods: {
        search(data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },
        handleSearch3() {
            this.editInlineData = this.initTable1;
            this.editInlineData = this.search(this.editInlineData, {
                name: this.searchConName3
            });
        },
        handleCancel3() {
            this.editInlineData = this.initTable1;
        },
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
    },
    mounted: function() {
        //利用axios接口调用获取数据
        axios.get("http://39.107.253.90:60001/wuser/selectwuserbyuserid").then(
            response => {
                this.editInlineData = response.data.tolist;
                this.initTable1 = response.data.tolist;
            },
            response => {
                console.log("error");
            }
            //   function(res) {
            //     console.log(res);
            //   }
        );
    }
};
</script>



<style>

</style>
