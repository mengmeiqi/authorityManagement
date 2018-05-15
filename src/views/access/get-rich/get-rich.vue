<style lang="less">
@import "../access.less";
@import "../../../styles/common.less";
@import "../../tables/components/table.less";
#btn {
  left: 1020px;
  top: 30px;
  position: absolute;
}
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
                  <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入省地区..."  />
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
                  致富政策管理
              </p>            
              <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>          
             <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;">+添加</Button>
            <Page :total="100" :page-size="5"></Page>
          </Card>
          </Col>
        
      </Row>
    </div>
  <div v-if="!isshow">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
          <h3 class="h1">致富添加</h3>
          <FormItem label="微信号:" prop="wxname">
            <Input v-model="formValidate.wxname" placeholder="请输入微信号" ></Input>
            
          </FormItem>
          <FormItem label="姓名:" prop="wxname">
            
             <Input v-model="formValidate.name" placeholder="请输入姓名" ></Input>
            
          </FormItem>
          <FormItem label="致富时间:" prop="wxname">
           
              <Input v-model="formValidate.crestedTime" placeholder="致富时间" ></Input>
          </FormItem>
           <FormItem label="致富项目:" prop="wxname">
           
              <Input v-model="formValidate.project" placeholder="致富项目" ></Input>
          </FormItem>
           <FormItem label="需求:" prop="wxname">
           
              <Input v-model="formValidate.requirement" placeholder="需求" ></Input>
          </FormItem>
          <FormItem>
          致富人地址：
            <Cascader :data="data1" v-model="value" style="width: 80%;float: right;text-align: center;padding-bottom: inherit"></Cascader>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="submit('formValidate')">提交</Button>
            <Button v-on:click="isshow=true"  type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
          </FormItem>
        </Form>

  </div>
</div>
    


</template>
<script>
import canEditTable from "../../tables/components/get-rich-table.vue";
import axios from "axios";

export default {
  name: "editable-table",
  components: {
    canEditTable
  },
  data() {
    return {
      value: "",

      wtorich: [],
      data1: [],
      formValidate: {
        wxname: ""
      },

      //是否为必填项
      ruleValidate: {
        wxname: [{ required: true, message: "微信名不能为空！", trigger: "blur" }]
      },
      isshow: true,
      thisTableData: [],
      edittingStore: [],
      initTable1: [],
      editInlineColumns: [
        {
          title: "id",
          align: "center",
          width: 50,
          key: "richId"
        },
        {
          title: "微信号",
          align: "center",
          width: 150,
          key: "userOid",
           editable: true
        },
        {
          title: "致富人姓名",
          align: "center",
          key: "name",
          editable: true
        },
        {
          title: "省地区",
          align: "center",
          key: "region1",
          width: 70,
          editable: true
        },
         {
          title: "市区",
          align: "center",
          key: "region2",
          width: 70,
          editable: true
        },
         {
          title: "县",
          align: "center",
          key: "region3",
          width: 70,
          editable: true
        },
        {
          title: "项目",
          align: "center",
          key: "project",
          width: 150,
          editable: true
        },
        {
          title: "创建时间",
          align: "center",
          key: "crestedTime",
          editable: true
        },
        {
          title: "致富时间",
          align: "center",
          key: "richTime",
          editable: true
        },
        {
          title: "是否致富0否/1是",
          align: "center",
          key: "status",
          editable: true
        },
        {
          title: "需求",
          align: "center",
          key: "requirement",
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
      editInlineData: [],
      timearray: [],
      // 搜索框的值
      searchConName3: ""
    };
  },
  methods: {
    //提交
     submit: function() {
//                console.log(this.formValidate.wxname);
                // 发送 POST 请求
                axios.post("http://www.wuyangdata.com:60001/wtorich/insertwtorich",
                    {

                        userOid:this.formValidate.wxname,//返回微信id给后台
                        name:this.formValidate.name,
                        crestedTime:this.formValidate.crestedTime,
                        project:this.formValidate.project,
                        requirement:this.formValidate.requirement,
                        region1:this.value[0],//返回省给后台
                        region2:this.value[1],//返回市给后台
                        region3:this.value[2]//返回区给后台


                    })
                    .then(function(res) {
                        alert("添加成功");
                    })
                    .catch(function() {
                        console.log("添加失败");
                    });


            },
    //搜索方法
    search(data, argumentObj) {
      console.log(arguments);
      let res = [];
      let dataClone = data;
      for (let argu in argumentObj) {
        if (argumentObj[argu].length > 0) {
          res = dataClone.filter(d => {
            if (!!d[argu]) {
              return d[argu].indexOf(argumentObj[argu]) > -1;
            }
          });
          dataClone = res;
        }
      }
      return res;
    },
    //点击搜索执行的函数
    handleSearch3() {
      this.editInlineData = this.initTable1;
      this.editInlineData = this.search(this.editInlineData, {
        region1: this.searchConName3
      });
    },
    //点击取消执行的函数
    handleCancel3() {
      this.searchConName3 = "";
      this.editInlineData = this.initTable1;
    }
  },

  mounted: function() {
    //利用axios接口调用获取数据

    axios.get("http://www.wuyangdata.com:60001/wtorich/getallbyregion").then(
      response => {
        console.log(response);

        this.initTable1 = response.data.wtorich.filter(item => {
          return item.deleteStatus != 1;
        });
        console.log(this.initTable1);
        this.editInlineData = this.initTable1;
      },
      response => {
        console.log("error");
      }
    );




            //利用axios接口调用获取数据

            axios.get("http://www.wuyangdata.com:60001/wtorich/getallbyregion").then(
                response => {
//                    console.log(response.data.wtorich[0].region1);

                    this.wtorich = response.data.wtorich;
                    this.data1 = [{
                        value: this.wtorich[0].region1,
                        label: this.wtorich[0].region1,
                        children: [
                            {
                                value: this.wtorich[0].region2,
                                label: this.wtorich[0].region2,
                                children: [
                                    {
                                        value: this.wtorich[0].region3,
                                        label: this.wtorich[0].region3,
                                    }
                                ]
                            },
                            {
                                value: this.wtorich[1].region2,
                                label: this.wtorich[1].region2,
                                children: [
                                    {
                                        value: this.wtorich[1].region3,
                                        label: this.wtorich[1].region3,
                                    }
                                ]
                            }
                        ],
                    }]

                },
                response => {
                    console.log("error");
                }

            );
  }
};
</script>




