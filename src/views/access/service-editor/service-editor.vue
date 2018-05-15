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
                            <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入ID..."  />
                            </Col>
                            <Col span="4">
                            <Button type="primary" style="float:left;margin:0 5px;"  icon="search">搜索</Button>
                            <Button style="float:left;" @click="handleCancel3" type="ghost" >取消</Button>
                            </Col>
                        </Row>

                    </Card>
                    </Col>

                    <Col span="24">
                    <Card>
                        <p slot="title">
                            <Icon type="android-remove"></Icon>
                            服务商管理
                        </p>
                        <can-edit-table refs="table2" span="1"  v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                    <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;" > +添加</Button>
                        <router-view></router-view>
                        <Page :total="100"></Page>
                    </Card>
                    </Col>
                </Row>

    </div>
    <div v-if="!isshow">
              <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
                    <h3 class="h1">添加服务商</h3>
                    <FormItem label="ID" prop="id">
                    <Input v-model="formValidate.id" placeholder="请输入id"></Input>
                    </FormItem>
                    <FormItem label="服务商" prop="serviceProvider">
                    <Input v-model="formValidate.serviceProvider" placeholder="请输入服务商名称"></Input>
                    </FormItem>
                    <FormItem label="地址" prop="address">
                        <Cascader :data="data" trigger="hover"></Cascader>
                    <!-- <Input v-model="formValidate.address" placeholder="请输入地址"></Input> -->
                    </FormItem>
                    <FormItem label="创建日期" prop="date">
                    <Input v-model="formValidate.date" placeholder="请输入创建日期"></Input>
                    </FormItem>
                    <FormItem label="企业类型" prop="style">
                    <Input v-model="formValidate.style" placeholder="请输入企业类型"></Input>
                    </FormItem>
                    <FormItem label="地区" prop="regin">
                        <Cascader :data="data" trigger="hover"></Cascader>
                    <!-- <Input v-model="formValidate.regin" placeholder="请输入地区名称"></Input> -->
                    </FormItem>
                    <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
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
      data: [
        {
          value: "beijing",
          label: "北京",
          children: [
            {
              value: "gugong",
              label: "故宫"
            },
            {
              value: "tiantan",
              label: "天坛"
            },
            {
              value: "wangfujing",
              label: "王府井"
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ],
      formValidate: {
        id: "",
        serviceProvider: "",
        address: "",
        date: "",
        style: "",
        regin: ""
      },
      ruleValidate: {
        id: [{ required: true, message: "ID不能为空", trigger: "blur" }],
        serviceProvider: [
          { required: true, message: "服务商不能为空", trigger: "blur" }
        ],
        address: [{ required: true, message: "地址不能为空", trigger: "blur" }],
        date: [{ required: true, message: "创建日期不能为空", trigger: "blur" }],
        style: [{ required: true, message: "企业类型不能为空", trigger: "blur" }],
        regin: [{ required: true, message: "地区不能为空", trigger: "blur" }]
      },
      isshow: true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "ID",
          key: "id",
          align: "center"
        },
        {
          title: "服务商",
          align: "center",
          key: "serviceProvider",
          editable: true
        },
        {
          title: "地址",
          align: "center",
          key: "address"
        },
        {
          title: "创建日期",
          align: "center",
          key: "date"
        },
        {
          title: "企业类型",
          align: "center",
          key: "style",
          editable: true
        },
        {
          title: "地区",
          align: "center",
          key: "regin",
          editable: true
        },
        {
          title: "操作",
          align: "center",
          width: 190,
          key: "handle",
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
    }
  },

  created() {}
};
</script>



<style>

</style>
