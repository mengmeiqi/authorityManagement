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
                            <input v-model="searchConName3" style="width:100%; height:30px;" placeholder=""  />
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
                        指挥中心管理
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
        <h3 class="h1">指挥中心管理添加</h3>
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
        <FormItem label="等级" prop="grade">
            <Input v-model="formValidate.grade" placeholder="请输入等级"></Input>
        </FormItem>
        <FormItem label="联系人" prop="Contacts">
            <Input v-model="formValidate.Contacts" placeholder="请输入联系人"></Input>
        </FormItem>
        <FormItem label="联系方式" prop="Contact_information">
            <Input v-model="formValidate.Contact_information" placeholder="请输入联系方式"></Input>
        </FormItem>
        <FormItem label="地区" prop="region">
             <Cascader :data="data" trigger="hover"></Cascader>
            <!-- <Input v-model="formValidate.region" placeholder="请输入地区"></Input> -->
        </FormItem>
        <FormItem label="父级ID" prop="Parent_ID">
            <Input v-model="formValidate.Parent_ID" placeholder="请输入父级ID"></Input>
        </FormItem>
        <FormItem label="合 作 社 数 量" prop="Numbe_of_cooperatives">
            <Input v-model="formValidate.Numbe_of_cooperatives" placeholder="请输入合作社数量"></Input>
        </FormItem>
        <FormItem label="合 作 社 总 面 积" prop="Total_area_of_cooperatives">
            <Input v-model="formValidate.Total_area_of_cooperatives" placeholder="请输入合作社总面积"></Input>
        </FormItem>
        <FormItem label="操作员ID" prop="Operator_ID">
            <Input v-model="formValidate.Operator_ID" placeholder="请输入操作员ID"></Input>
        </FormItem>
        <FormItem label="创建时间" prop="Creation_time">
            <Input v-model="formValidate.Creation_time" placeholder="请输入创建时间"></Input>
        </FormItem>
        <FormItem label="修改时间" prop="Modification_time">
            <Input v-model="formValidate.Modification_time" placeholder="请输入修改时间"></Input>
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
        grade: "",
        Contacts: "",
        Contact_information: "",
        id: "",
        region: "",
        Parent_ID: "",
        Total_area_of_cooperatives: "",
        Operator_ID: "",
        Creation_time: "",
        Modification_time: ""
      },
      ruleValidate: {
        id: [{ required: true, message: "ID不能为空", trigger: "blur" }],
        address: [{ required: true, message: "地址不能为空", trigger: "blur" }],
        username: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        grade: [{ required: true, message: "等级不能为空", trigger: "blur" }],
        Contacts: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
        Contact_information: [
          { required: true, message: "联系方式不能为空", trigger: "blur" }
        ],
        region: [{ required: true, message: "地区不能为空", trigger: "blur" }],
        Parent_ID: [{ required: true, message: "父级ID不能为空", trigger: "blur" }],
        Numbe_of_cooperatives: [
          { required: true, message: "数量不能为空", trigger: "blur" }
        ],
        Total_area_of_cooperatives: [
          { required: true, message: "合作社总面积不能为空", trigger: "blur" }
        ],
        Operator_ID: [
          { required: true, message: "操作员ID不能为空", trigger: "blur" }
        ],
        Creation_time: [
          { required: true, message: "创建时间不能为空", trigger: "blur" }
        ],
        Modification_time: [
          { required: true, message: "修改时间不能为空", trigger: "blur" }
        ]
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
          title: "等级",
          align: "center",
          key: "Grade"
        },
        {
          title: "联系人",
          align: "center",
          key: "Contacts"
        },
        {
          title: "联系方式",
          align: "center",
          key: "Contact_information"
        },
        {
          title: "地区",
          align: "center",
          key: "region"
        },
        {
          title: "父级ID",
          align: "center",
          key: "Parent_ID"
        },
        {
          title: "合作社数量",
          align: "center",
          key: "Number_of_cooperatives"
        },
        {
          title: "合作社总面积",
          align: "center",
          key: "Total_area_of_cooperatives"
        },
        {
          title: "创建时间",
          align: "center",
          key: "Creation_time"
        },
        {
          title: "修改时间",
          align: "center",
          key: "Modification_time"
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



