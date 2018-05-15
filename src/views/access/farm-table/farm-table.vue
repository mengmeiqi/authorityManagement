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
                            <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入土地名称..."  />
                        </Col>
                        <Col span="4">
                        <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                        <Button @click="handleCancel3" type="ghost" >取消</Button>
                        </Col>
                    </Row>

                </Card>
                </Col>

                <Col span="24">
                <Card >
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        农场表
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
                    <h3 class="h1">添加农场</h3>
                    <FormItem label="农场ID" prop="id">
                    <Input v-model="formValidate.id" placeholder="请输入农场id"></Input>
                    </FormItem>
                    <FormItem label="名称" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
                    </FormItem>
                    <FormItem label="归属局" prop="HomeOffice">
                    <Input v-model="formValidate.HomeOffice" placeholder="请输入归属局"></Input>
                    </FormItem>
                    <FormItem label="种植方式" prop="Plantingmode">
                    <Input v-model="formValidate.Plantingmode" placeholder="请输入种植方式"></Input>
                    </FormItem>
                    <FormItem label="面积" prop="area">
                    <Input v-model="formValidate.area" placeholder="请输入面积"></Input>
                    </FormItem>
                    <FormItem label="联系人" prop="extend">
                    <Input v-model="formValidate.extend" placeholder="请输入联系人"></Input>
                    </FormItem>
                    <FormItem label="联系方式" prop="Contactinformation">
                    <Input v-model="formValidate.Contactinformation" placeholder="请输入联系方式"></Input>
                    </FormItem>
                    <FormItem label="北纬1" prop="Northlastitude1">
                    <Input v-model="formValidate.Northlastitude1" placeholder="请输入北纬1"></Input>
                    </FormItem>
                    <FormItem label="北纬2" prop="Northlastitude2">
                    <Input v-model="formValidate.Northlastitude2" placeholder="请输入北纬2"></Input>
                    </FormItem>
                    <FormItem label="东经1" prop="Eastlongitude1">
                    <Input v-model="formValidate.Eastlongitude1" placeholder="请输入东经1"></Input>
                    </FormItem>
                    <FormItem label="东经2" prop="Eastlongitude2">
                    <Input v-model="formValidate.Eastlongitude2" placeholder="请输入东经2"></Input>
                    </FormItem>
                    <FormItem label="级别" prop="level">
                    <Input v-model="formValidate.level" placeholder="请输入级别"></Input>
                    </FormItem>
                    <!-- <FormItem label="附件" prop="enclosure">
                    <Input v-model="formValidate.enclosure" placeholder="请输入附件"></Input>
                    </FormItem> -->
                    <!-- <FormItem label="附件" prop="enclosure">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">请输入附件</Button>
                    <FormItem> -->
                    <FormItem label="附件" prop="enclosure">
                        <Upload>
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>点击或拖拽文件到这里上传</p>
                        </div>
                        </Upload>
                    </FormItem>
                    <FormItem label="备注" prop="Remarks">
                    <Input v-model="formValidate.Remarks" placeholder="请输入备注"></Input>
                    </FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button  v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
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
        name: "",
        HomeOffice: "",
        Plantingmode: "",
        area: "",
        extend: "",
        Contactinformation: "",
        Northlastitude1: "",
        Northlastitude2: "",
        Eastlongitude1: "",
        Eastlongitude2: "",
        level: "",
        enclosure: "",
        Remarks: ""
      },
      ruleValidate: {
        id: [{ required: true, message: "农场ID不能为空", trigger: "blur" }],
        name: [{ required: true, message: "名称不能为空", trigger: "blur" }],
        HomeOffice: [{ required: true, message: "归属局不能为空", trigger: "blur" }],
        Plantingmode: [
          { required: true, message: "种植方式不能为空", trigger: "blur" }
        ],
        area: [{ required: true, message: "面积不能为空", trigger: "blur" }],
        extend: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
        Contactinformation: [
          { required: true, message: "联系方式不能为空", trigger: "blur" }
        ],
        Northlastitude1: [
          { required: true, message: "请输入北纬1", trigger: "blur" }
        ],
        Northlastitude2: [
          { required: true, message: "请输入北纬2", trigger: "blur" }
        ],
        Eastlongitude1: [
          { required: true, message: "请输入东经1", trigger: "blur" }
        ],
        Eastlongitude2: [
          { required: true, message: "请输入东经2", trigger: "blur" }
        ],
        level: [{ required: true, message: "级别不能为空", trigger: "blur" }],
        enclosure: [{ required: true, message: "请输入附件", trigger: "blur" }],
        Remarks: [{ required: true, message: "请输入备注", trigger: "blur" }]
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
          title: "归属局",
          align: "center",
          key: "HomeOffice"
        },
        {
          title: "种植方式",
          align: "center",
          key: "Plantingmode"
        },
        {
          title: "面积",
          align: "center",
          key: "area"
        },
        {
          title: "联系人",
          align: "center",
          key: "extend"
        },
        {
          title: "联系方式",
          align: "center",
          key: "Contactinformation"
        },
        {
          title: "北纬",
          align: "center",
          key: "Northlatitude"
        },
        {
          title: "东经",
          align: "center",
          key: "Eastlongitude"
        },
        {
          title: "级别",
          align: "center",
          key: "level"
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
  mounted() {}
};
</script>



