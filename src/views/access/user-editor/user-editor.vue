<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
Button.btn {
  width: 200px;
  margin: 10px 0;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
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
.left {
  float: left;
}
.btn {
  float: right;
}
</style>

<template>
  <div class="layout">
    <Layout>

      <Layout :style="{padding: '0 0px'}">

        <Content :style="{padding: '4px 0', minHeight: '280px', background: '#fff'}">

          <Layout>

            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <div v-if="isshow">
                <Card style="height: 100px" />

                <Card>
                <Row class="margin-top-10">
                  <Row>
                    
                      <Input class="left" v-model="searchConName3" icon="search" @on-change="handleSearch3" placeholder="请输入姓名搜索..." style="width: 350px" />
                    
                    <Button style="float:right" class="btn" v-on:click="isshow=false" type="ghost">
                      <Icon type="ios-plus-empty"></Icon> 添加用户</Button>
                    
                  </Row>

                  <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                </Row>
                </Card>
              </div>
              <div v-if="!isshow">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
                  <h3 class="h1">添加用户</h3>
                  <FormItem label="用户名" prop="username">
                    <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
                  </FormItem>
                  <FormItem label="真实姓名" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入真实姓名"></Input>
                  </FormItem>
                  <FormItem label="密码" prop="password">
                    <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
                  </FormItem>
                  部门 id:
                  <Select v-model="dapa_id" style="width:80%;padding-bottom: 20px">
                    <Option v-for="item in formValidate.depaList" :value="item.label" :key="item.value">{{ item.value }}</Option>
                  </Select>
                  <br/> 请为当前用户添加角色：
                  <br/>
                  <CheckboxGroup v-model="roleValue">
                    <Checkbox v-for="item in roleList" :key="item.role_id" :label="item.role_id">
                      <span>{{item.role_name}}</span>
                    </Checkbox>

                  </CheckboxGroup>

                  <FormItem label="电话" prop="phone">
                    <Input v-model="formValidate.phone" placeholder="请输入电话"></Input>
                  </FormItem>
                  <FormItem label="公司id" prop="company">
                    <Input v-model="formValidate.company" placeholder="请输入公司id"></Input>
                  </FormItem>
                  <FormItem label="区域id" prop="region">
                    <Input v-model="formValidate.region" placeholder="请输入区域id"></Input>
                  </FormItem>

                  <FormItem>
                    <Button type="primary" @click="submit('formValidate')">提交</Button>
                    <Button v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
                  </FormItem>
                </Form>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; wuyangdata</Footer>
    </Layout>
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
      sourceData1: [],
      // 值列表
      roleValue: [],
      // 角色列表
      roleList: [],

      dapa_id: "", //对应select所选择的
      formValidate: {
        name: "",
        username: "",
        password: "",
        depaList: [
          {
            value: "1:中粮",
            label: " 1"
          },
          {
            value: "2:市",
            label: "2"
          },
          {
            value: "3:区",
            label: "3"
          },
          {
            value: "4:县",
            label: "4"
          },
          {
            value: "5:合作社123",
            label: "5"
          },
          {
            value: "6:一部",
            label: "6"
          },
          {
            value: "7:二部",
            label: "7"
          },
          {
            value: "8:二部的一部",
            label: "8"
          },
          {
            value: "9:一部",
            label: "9"
          },
          {
            value: "10:一部",
            label: "10"
          },
          {
            value: "11:一部",
            label: "11"
          },
          {
            value: "12:合作社一部",
            label: "12"
          }
        ],
        phone: "",
        company: "",
        region: ""
      },

      //是否为必填项
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
        depaList: [
          {
            required: true,
            message: "The department-id cannot be empty",
            trigger: "blur"
          }
        ],
        region: [
          {
            required: true,
            message: "The region cannot be empty",
            trigger: "blur"
          }
        ]
      },
      isshow: true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "用户名",
          align: "center",
          key: "username",
          editable: true
        },

        {
          title: "部门id",
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
          title: "最近登陆",
          align: "center",
          key: "lastlogin"
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
          width: 285,
          key: "handle",
          handle: ["view", "delete"]
        }
      ],
      editInlineData: []
    };
  },
  methods: {
    submit: function() {
      //                console.log(this.a)
      // console.log(this.dapa_id);
      var obj = {
        username: this.formValidate.username,
        realName: this.formValidate.name,
        passwd: this.formValidate.password,
        departmentId: 22,
        phone: parseInt(this.formValidate.phone),
        companyId: parseInt(this.formValidate.company),
        areaId: this.formValidate.region,
        roleId: [53, 54, 55]
      };

      console.log(obj);
      // 发送 POST 请求
      axios
        .post("http://www.wuyangdata.com:60001/toperator/addtoperator", obj)
        .then(res => {
          this.isshow = true;
        })
        .catch(function() {
          alert("添加失败");
          // console.log(this.username);
        });
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
  mounted: function() {
    //有更改
    axios
      .get("http://www.wuyangdata.com:60001/toperator/queryall")
      .then(res => {
        this.sourceData1 = res.data.tolist;
        console.log(this.sourceData1);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://39.107.253.90:60001/role/findrole")
      .then(res => {
        this.roleList = res.data.tlist;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    //利用axios接口调用获取数据

    axios.get("http://www.wuyangdata.com:60001/toperator/queryall").then(
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
