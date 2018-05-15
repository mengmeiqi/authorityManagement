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
                            <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入土地名称名称..."  />
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
                        粮仓表
                    </p>

                <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>
                    <Page :total="100"></Page>
                </Card>
                </Col>
            </Row>
  
    </div>
    <div v-if="!isshow">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
                <h3 class="h1">粮仓表添加</h3>
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
                <FormItem label="粮库权属" prop="Grain_depot_ownership">
                <Input v-model="formValidate.Grain_depot_ownership" placeholder="请输入粮库权属"></Input>
                </FormItem>
                <FormItem label="联系人" prop="Contacts">
                <Input v-model="formValidate.Contacts" placeholder="请输入联系人"></Input>
                </FormItem>
                <FormItem label="联系人电话" prop="phone">
                <Input v-model="formValidate.phone" placeholder="请输入联系方式"></Input>
                </FormItem>
                <FormItem label="地区" prop="region">
                    <Cascader :data="data" trigger="hover"></Cascader>
                <!-- <Input v-model="formValidate.region" placeholder="请输入地区"></Input> -->
                </FormItem>
                <FormItem label="存储量" prop="Storage_capacity">
                <Input v-model="formValidate.Storage_capacity" placeholder="请输入存储量"></Input>
                </FormItem>
                <FormItem label="是否是交割库" prop="Delivery">
                <Input v-model="formValidate.Delivery" placeholder="请输入创建时间"></Input>
                </FormItem>
                <FormItem label="仓储费" prop="Warehousing_fee">
                <Input v-model="formValidate.Warehousing_fee" placeholder="请输入仓储费"></Input>
                </FormItem>
                <FormItem label="请输入是否有铁路线" prop="Railway_line">
                <Input v-model="formValidate.Railway_line" placeholder="请输入是否有铁路线"></Input>
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
        Contacts: "",
        phone: "",
        id: "",
        region: "",
        Grain_depot_ownership: "",
        Storage_capacity: "",
        Delivery: "", //交割库
        Warehousing_fee: "",
        Railway_line: ""
      },
      ruleValidate: {
        id: [{ required: true, message: "ID不能为空", trigger: "blur" }],
        address: [{ required: true, message: "地址不能为空", trigger: "blur" }],
        username: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        grade: [{ required: true, message: "等级不能为空", trigger: "blur" }],
        Contacts: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
        phone: [{ required: true, message: "联系电话不能为空", trigger: "blur" }],
        region: [{ required: true, message: "地区不能为空", trigger: "blur" }],
        Grain_depot_ownership: [
          { required: true, message: "粮库权属不能为空", trigger: "blur" }
        ],
        Storage_capacity: [
          { required: true, message: "数量不能为空", trigger: "blur" }
        ],
        Delivery: [{ required: true, message: "不能为空", trigger: "blur" }],
        Warehousing_fee: [
          { required: true, message: "仓储费不能为空", trigger: "blur" }
        ],
        Railway_line: [{ required: true, message: "不能为空", trigger: "blur" }]
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
          title: "粮库权属",
          align: "center",
          key: "HomeOffice"
        },
        {
          title: "地区",
          align: "center",
          key: "region"
        },
        {
          title: "存储量",
          align: "center",
          key: "Storagecapacity"
        },
        {
          title: "是否是交割库",
          align: "center",
          key: "Deliverybank"
        },
        {
          title: "仓储费",
          align: "center",
          key: "Warehousing"
        },
        {
          title: "联系人",
          align: "center",
          key: "Contacts"
        },
        {
          title: "联系人电话",
          align: "center",
          key: "phone"
        },
        {
          title: "是否有铁路线",
          align: "center",
          key: "Railway"
        },
        {
          title: "照片",
          align: "center",
          key: "photo"
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



