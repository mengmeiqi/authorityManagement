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
<!--烘干塔信息表-->
<template>
<div>
    <div  v-if="isshow">
                <Row class="margin-top-10">
                <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="mouse"></Icon>
                        点击搜索进行搜索
                    </p>
                    <Row>
                        <Col span="20">
                            <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入烘干塔名称..."  />
                        </Col>
                        <Col span="4">
                        <Button type="primary" style="float:left;margin:0 5px;"  icon="search">搜索</Button>
                        <Button style="float:left;" @click="handleCancel3" type="ghost" >取消</Button>
                        </Col>
                    </Row>

                </Card>
                </Col>

                <Col span="24">
                <Card >
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        烘干塔信息表
                    </p>
                    <!-- <div id="idiv" >
                        <Button id="btn" type="primary" >新建</Button>
                    </div>  -->
                <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>
                    <Page :total="100"></Page>
                </Card>
                </Col>
            </Row>
    </div>
    <div  v-if="!isshow">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
            <h3 class="h1">烘干塔信息表添加</h3>
            <FormItem label="ID" prop="id">
            <Input v-model="formValidate.id" placeholder="请输入ID"></Input>
            </FormItem>
            <FormItem label="名称" prop="username">
            <Input v-model="formValidate.username" placeholder="请输入名称"></Input>
            </FormItem>
            <FormItem label="地址" prop="address">
            <Cascader :data="data" trigger="hover"></Cascader>
            <!-- <Input v-model="formValidate.address" placeholder="请输入地址"></Input> -->
            </FormItem>
            <FormItem label="是否临库" prop="GraTemporary_Libraryde">
            <Input v-model="formValidate.GraTemporary_Libraryde" placeholder="请输入是否临库"></Input>
            </FormItem>
            <FormItem label="联系人" prop="Contacts">
            <Input v-model="formValidate.Contact_information" placeholder="请输入联系方式"></Input>
            </FormItem>
            <FormItem label="烘干能力" prop="Drying_ability">
            <Input v-model="formValidate.Drying_ability" placeholder="请输入烘干能力"></Input>
            </FormItem>
            <FormItem label="是否具备汽运" prop="Steam_transportation">
            <Input v-model="formValidate.Steam_transportation" placeholder="请输入是否具备汽运"></Input>
            </FormItem>
            <FormItem label="备注" prop="Remarks">
            <Input v-model="formValidate.Remarks" placeholder="请输入备注"></Input>
            </FormItem>

            <FormItem label="照片1" prop="photo1">
            <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
            </Upload>
            </FormItem>
            <FormItem label="照片2" prop="photo2">
            <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
            </Upload>
            </FormItem>


            <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
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
        address: "",
        username: "",
        GraTemporary_Libraryde: "",
        Contacts: "",
        id: "",
        Drying_ability: "",
        Steam_transportation: "",
        Remarks: ""
      },
      ruleValidate: {
        id: [{ required: true, message: "ID不能为空", trigger: "blur" }],
        address: [{ required: true, message: "地址不能为空", trigger: "blur" }],
        username: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        GraTemporary_Libraryde: [
          { required: true, message: "这里不能为空", trigger: "blur" }
        ],
        Contacts: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
        Drying_ability: [
          { required: true, message: "烘干能力不能为空", trigger: "blur" }
        ],
        Steam_transportation: [
          { required: true, message: "是否具备汽运不能为空", trigger: "blur" }
        ],
        Remarks: [{ required: true, message: "备注不能为空", trigger: "blur" }]
      },
      isshow: true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "名称",
          align: "center",
          key: "name"
        },
        {
          title: "地址",
          align: "center",
          key: "address"
        },
        {
          title: "是否临库",
          align: "center",
          key: "GraTemporary_Libraryde"
        },
        {
          title: "烘干能力",
          align: "center",
          key: "Drying_ability"
        },
        {
          title: "联系人",
          align: "center",
          key: "Contacts"
        },
        {
          title: "备注",
          align: "center",
          key: "Remarks"
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



