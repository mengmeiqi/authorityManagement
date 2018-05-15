<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";
.user1{
    background: white;
    padding: 20px;
    padding-left: 300px;
    padding-right: 300px;
    height: 100%;
    text-align: center;
  }
  .h1{
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
                    <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入用户姓名..."  />
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
               物流管理
            </p>
            <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
           <Button  v-on:click="isshow=false" type="ghost" long style="margin:10px 0;" > +添加</Button>
            <router-view></router-view>
           
        </Card>
        </Col>
    </Row>
  </div>
  <div v-if="!isshow">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
            <h3 class="h1">添加物流</h3>
            <FormItem label="物流名称" prop="username">
              <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem label="物流编号" prop="name">
              <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem label="密码" prop="password">
              <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
              <Input v-model="formValidate.mail" placeholder="请输入电子邮件"></Input>
            </FormItem>
            <FormItem label="角色" prop="role">
              <Select v-model="formValidate.role" placeholder="选择角色">
                <Option value="beijing">中粮集团</Option>
                <Option value="shanghai">经销商</Option>
                <Option value="shenzhen">个体户</Option>
              </Select>
            </FormItem>

            <FormItem label="部门" prop="department">
              <Select v-model="formValidate.department" placeholder="选择部门">
                <Option value="beijing">人事部</Option>
                <Option value="shanghai">营销部</Option>
                <Option value="shenzhen">事业部</Option>
              </Select>
            </FormItem>

            <FormItem label="状态" prop="gender">
              <RadioGroup v-model="formValidate.gender">
                <Radio label="启用">启用</Radio>
                <Radio label="停用">停用</Radio>
              </RadioGroup>
            </FormItem>

            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
              <Button  v-on:click="isshow=true"  type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
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
                    name: '',
                    username: '',
                    password: '',
                    mail: '',
                    role: '',
                    department: '',
                    gender: '启用'
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: 'The username cannot be empty', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'The password cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    role: [
                        { required: true, message: 'Please select the role', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    department: [
                        { required: true, message: 'Please select the department', trigger: 'change' }
                    ]


                },
      isshow:true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "id",
          align: "center",
          key: "userId",
         
        },
        {
          title: "物流名称",
          align: "center",
          key: "realName",
          
        },
        {
          title: "物流编号",
          align: "center",
          key: "username",
          editable: true
        },
        
        {
          title: "物流id",
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
          title: "贸易id",
          align: "center",
          key: "commercialId",
          editable: true
        },
        {
          title: "最近交易",
          align: "center",
          key: "lastlogin",
         
        },
        {
          title: "物流公司id",
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
          title: "部门名称",
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
          handle: ["view","edit", "delete"]
        }
      ],
      editInlineData: []
    };
  },
  methods: {
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
            },
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
  mounted: function() {
   
    
  }
};
</script>



<style>

</style>
