<style lang="less">
@import "../access.less";
@import "../../../styles/common.less";
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
Textarea{
    width: 463px;
    height: 200px;
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
            散户信息管理
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
        <h3 class="h1">添加散户信息</h3>
        <FormItem label="散户id" prop="shid">
          <Input v-model="formValidate.shid" placeholder="请输入散户id"></Input>
        </FormItem>
        <FormItem label="散户名称" prop="shname">
          <Input v-model="formValidate.shname" placeholder="请输入散户名称"></Input>
        </FormItem>
        <FormItem label="描述" prop="description">
          <Textarea v-model="formValidate.description" placeholder="请输入描述"></Textarea>
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
import canEditTable from "../../tables/components/rolecanEditTable.vue";
import axios from "axios";

export default {
    name: "editable-table",
    components: {
        canEditTable
    },
    data() {
        return {
            formValidate: {
                name: "",
                username: "",
                password: "",
                mail: "",
                role: "",
                department: "",
                gender: "启用"
            },
            isshow: true,
            thisTableData: [],
            edittingStore: [],
            initTable1: [],
            editInlineColumns: [
                {
                    title: "散户id",
                    align: "center",
                    key: "role_id"
                },
                {
                    title: "散户名称",
                    align: "center",
                    key: "role_name",
                    editable: true
                },
                {
                    title: "描述",
                    align: "center",
                    key: "description",
                    editable: true
                },
                {
                    title: "操作",
                    align: "center",
                    width: 285,
                    key: "handle",
                    handle: ["view", "edit", "delete"]
                }
            ],
            editInlineData: [],
            timearray: []
        };
    },
    methods: {
        //搜索方法
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
            console.log(1111);
        },
        //点击搜索执行的函数
        handleSearch3() {
            this.editInlineData = this.initTable1;
            this.editInlineData = this.search(this.editInlineData, {
                role_name: this.searchConName3
            });
        },
        //点击取消执行的函数
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
        axios.get("http://39.107.253.90:60001/role/findrole").then(
            response => {
                this.editInlineData = response.data.tlist;
                this.initTable1 = response.data.tlist;
            },
            response => {
                console.log("error");
            }
        );
    }
};
</script>




