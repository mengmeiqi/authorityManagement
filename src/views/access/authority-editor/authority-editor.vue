<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";
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
                    <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入权限名称..."  />
                </Col>
                <Col span="4">
                <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                <Button @click="handleCancel3" type="ghost" >取消</Button>
                </Col>
            </Row>
        </Card>
        </Col>

        <Col span="24">
        <Card>
            <p slot="title">
                <Icon type="android-remove"></Icon>
               权限管理
            </p>
            <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
            <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;" > +添加</Button>
            
            <Page :total="100"></Page>
        </Card>
        </Col>
    </Row>
    </div>

    <div v-if="!isshow">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
                <h3 class="h1">添加权限</h3>
                <FormItem label="名称" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
                </FormItem>
                <FormItem label="上级权限" prop="enterprise">
                <Input v-model="formValidate.enterprise" placeholder="请输入上级权限"></Input>
                </FormItem>
                <FormItem label="级别" prop="level">
                <Input v-model="formValidate.level" placeholder="请输入级别"></Input>
                </FormItem>
                <FormItem label="排序" prop="order">
                <Input v-model="formValidate.order" placeholder="请输入排序"></Input>
                </FormItem>
                <FormItem label="最后登录" prop="lastLogin">
                <Input v-model="formValidate.lastLogin" placeholder="请输入最后登录时间"></Input>
                </FormItem>
                <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button  v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
    </div>
</div>
   


    

</template>




<script>
import canEditTable from "../../tables/components/canEditTable.vue";
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
        enterprise: "",
        level: "",
        order: "",
        lastLogin: ""
      },
      ruleValidate: {
        name: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        enterprise: [{ required: true, message: "上级权限不能为空", trigger: "blur" }],
        level: [{ required: true, message: "级别不能为空", trigger: "blur" }],
        order: [{ required: true, message: "排序不能为空", trigger: "blur" }],
        lastLogin: [{ required: true, message: "最后登录时间不能为空", trigger: "blur" }]
      },
      isshow: true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "序号",
          type: "index",
          align: "center"
        },
        {
          title: "名称",
          align: "center",
          key: "name",
          editable: true
        },
        {
          title: "上级权限",
          align: "enterprise",
          key: "uperior"
        },
        {
          title: "级别",
          align: "center",
          key: "level"
        },
        {
          title: "排序",
          align: "center",
          key: "order",
          editable: true
        },
        {
          title: "最后登录",
          align: "center",
          key: "lastLogin",
          editable: true
        },
        {
          title: "操作",
          align: "center",
          key: "handle",
          width: 190,
          handle: ["edit", "delete"]
        }
      ],
      editInlineData: []
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    //搜索
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
    }
  },
  mounted() {
    //利用axios接口调用获取数据

   
  }
};
</script>



<style>

</style>
