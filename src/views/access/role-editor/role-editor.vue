<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
div.ivu-card-body{
  padding:0;
  margin:0;
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
button.btn {
  width: 180px;
  margin: 10px;
  text-align: center;
}
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
</style>
<style scoped>
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
<template>
    <div class="layout">
        <Layout>
            <Layout :style="{padding: '0'}">
                <Card>
                  <p slot="title">
                    <Icon type="android-remove"></Icon>
                    角色管理
                </p>
                <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff'}" v-if="isshow">
                         
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                               <div style="padding-left:43px;" class="btn" v-on:click="create"  type="ghost"><Icon type="ios-plus-empty"></Icon>创建角色</div>
                                <Submenu name="1">
                                    <MenuItem v-for="item1 in sourceData1" @click.native="selectRole(item1)">
                                        <Icon type="person"></Icon>
                                        <span >{{item1.role_name}}</span>
                                    </MenuItem>
                                </Submenu> 
                            </Menu>
                        </Sider>
                        <Content :style="{padding: '0 24px 24px 24px', minHeight: '280px', background: '#fff'}">
                          
                    <Card>
                      <div v-if="isshow">
                            <Form :model="formItem" :label-width="80" class="user2">
                              <FormItem v-for="(item,index) in sourceData" :key="item.res_id">
                              <CheckboxGroup v-model="formItem.checkbox">
                                <h5>
                                  <Checkbox  @click.native="selectAll(index,item.res_id)" :label="item.res_id">{{item.res_name}}：</Checkbox>
                                </h5>
                                <Checkbox @click.native="print(formItem.checkbox)" :label="it.res_id" v-for="it in item.zlist">{{it.res_name}}：</Checkbox>
                              </CheckboxGroup>
                            </FormItem>
                              <FormItem>
                                <Button type="primary" @click="update">更新角色权限</Button>
                              </FormItem>
       
                        </Form>
                       
                      </div>

                      <div  v-if="!isshow">
                                   <Form :model="formItem1" :label-width="80" class="user2">
                                        <h3 class="font-size1 " style="cursor:pointer;">添加角色</h3>
                                        <FormItem label="名称">
                                            <Input v-model="formItem1.input" placeholder="输入角色名称"></Input>
                                        </FormItem>
                                        <FormItem label="描述">
                                            <Input v-model="formItem1.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                                                  placeholder="添加描述"></Input>
                                        </FormItem>

                                        <FormItem v-for="item in sourceData" :key="item.res_id">
                                            <CheckboxGroup v-model="formItem1.checkbox">
                                                <h5>
                                                    <Checkbox :label="item.res_id">{{item.res_name}}：</Checkbox>
                                                </h5>
                                                <Checkbox :label="it.res_id" v-for="it in item.zlist">{{it.res_name}}：</Checkbox>

                                            </CheckboxGroup>
                                        </FormItem>


                                        <FormItem>
                                            <Button type="primary" @click="submit">提交</Button>
                                            <Button v-on:click="isshow=true" type="ghost" style="margin-left: 8px">取消</Button>
                                        </FormItem>

                                        <!--<Checkbox refs="table2" v-model="checkdata" ></Checkbox>-->
                                    </Form>
                      </div>
                        
                    </Card>


                        </Content>
                    </Layout>
                </Content>
                </Card>
                
            </Layout>
            <Footer class="layout-footer-center">2017-2018 &copy; wuyangdata</Footer>
        </Layout>
    </div>
</div>
                   
       


   


  

</template>
<script>
import axios from "axios";



export default {
  data() {
    return {
      
      // 角色权限列表
      rolePowerList: [],

      sourceData1: [],
      sourceData: [],
      formItem: {
        input: "",
        checkbox: [],
        textarea: "",
        checkdata: [],
        role_id:''
      },
      formItem1: {
        input: "",
        checkbox: [],
        textarea: "",
        checkdata: []
      },
      isshow: true,
      thisTableData: [],
      edittingStore: [],
      initTable1: [],

      editInlineData: [],
      timearray: [],
      isCollapsed: false
    };
  },
  methods: {
    print(param){
      console.log(param)
    },
    update: function() {
      axios
        .post("http://www.wuyangdata.com:60001/role/updaterole", {
          role_id: parseInt(this.formItem.role_id),
          idsarray: this.formItem.checkbox
        })
        .then(res => {
          console.log(this.formItem1.checkbox);
         
           alert("修改成功");
        })
        .catch(function() {
          console.log(111);

          alert("添加失败");
        });
    },
    create: function() {
      this.isshow = false;
      this.formItem;
    },
    //提交函数
    submit: function() {
      // 发送 POST 请求
      axios
        .post("http://www.wuyangdata.com:60001/role/addrole", {
          role_name: this.formItem1.input,
          description: this.formItem1.textarea,
          idsarray: this.formItem1.checkbox
        })
        .then(res => {
          console.log(this.formItem1.checkbox);
          this.isshow = true;
        })
        .catch(function() {
          console.log(111);

          alert("添加失败");
        });
    },
    selectRole(item) {
      console.log(item);
      this.formItem.checkbox = [];
      this.formItem.role_id = item.role_id;
      axios
        .get(
          "http://39.107.253.90:60001/role/roledetail?role_id=" + item.role_id
        )
        .then(res => {
          for (var i = 0; i < res.data.trlist.length; i++) {
            this.formItem.checkbox.push(res.data.trlist[i].res_id);
            if (res.data.trlist[i].zlist.length > 0) {
              for (var j = 0; j < res.data.trlist[i].zlist.length; j++) {
                this.formItem.checkbox.push(res.data.trlist[i].zlist[j].res_id);
              }
            }
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    selectAll(index,res_id) {
      if(this.formItem.checkbox.indexOf(res_id) < 0){
        this.formItem.checkbox.push(...this.rolePowerList[index]);
        for(var i=0;i<this.formItem.checkbox.length;i++){
          for(var j=i+1;j<this.formItem.checkbox.length;j++){
            if(this.formItem.checkbox[i] === this.formItem.checkbox[j]){
              this.formItem.checkbox.splice(j,1);
            }
          }
        }
      }else{
        for(var i=0;i<this.rolePowerList[index].length;i++){
          for(var j=0;j<this.formItem.checkbox.length;j++){
            if(this.rolePowerList[index][i] === this.formItem.checkbox[j]){
              this.formItem.checkbox.splice(j,1);
            }
          }
        }
      }

      console.log(this.formItem.checkbox);
    }
  },

  mounted: function() {
    axios
      .get("http://www.wuyangdata.com:60001/role/findrole")
      .then(res => {
        // console.log(res.data.trlist);
        this.sourceData1 = res.data.tlist;
        
   
      })
      .catch(err => {
        console.log(err);
      });
    // 发送 POST 请求
    axios
      .get("http://39.107.253.90:60001/role/preaddrole")
      .then(res => {
        this.sourceData = res.data.trlist;
        for (var i=0 ;i<res.data.trlist.length;i++){
          this.rolePowerList[i] = [];
          for (var j=0;j<res.data.trlist[i].zlist.length;j++){
            this.rolePowerList[i].push(res.data.trlist[i].zlist[j].res_id);
          }
        } 
        console.log(this.rolePowerList);

      })
      .catch(err => {
        console.log(err);
      });

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
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  }
};
</script>




