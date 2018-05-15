<style lang="less">
@import "../access.less";
@import "../../../styles/common.less";
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
                <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入政策编号..."  />
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
                扶贫政策管理
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
    <h3>添加扶贫项目</h3>
    
     
   
    <FormItem label="地区编号" prop="areaId">
      <Input v-model="formValidate.areaId" placeholder="请输入地区编号"></Input>
    </FormItem>
    <FormItem label="政策详情" prop="policyDetail">
      <Input v-model="formValidate.policyDetail" placeholder="请输入政策详情"></Input>
    </FormItem>
    <FormItem label="政策编号" prop="policyNum">
      <Input v-model="formValidate.policyNum" placeholder="请输入政策编号"></Input>
    </FormItem>
    <FormItem label="排序号" prop="sort">
      <Input v-model="formValidate.sort" placeholder="请输入排序号"></Input>
    </FormItem>
    
   
    <FormItem>
      <Button type="primary" @click="submit('formValidate')">提交</Button>
      <Button   v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
    </FormItem>
  </Form>



  </div>
</div>
    

  
</template>
<script>
import canEditTable from "../../tables/components/povertyEditTable.vue";
import axios from "axios";

export default {
  name: "editable-table",
  components: {
    canEditTable
  },
  data() {
    return {
      formValidate: {
        // Wpoverty: '',
        // povertyid: '',
        userOid: "",
        region: "",
        address: "",
        poorName: "",
        requirement: "",
        tel: "",
        family: "",
        labour: "",
        reason: "",
        salary: "",
        measure: "",
        target: "",
        assistant: "",
        assistantMan: "",
        createTime: "",
        status: "",
        deleteStatus: "",
        agriculturalAcreage: ""
      },
      ruleValidate: {
        userOid: [
          { required: true, message: "微信用户openid不能为空", trigger: "blur" }
        ]
      },
      isshow: true,
      // 搜索的字段
      searchConName3: "",
      thisTableData: [],
      edittingStore: [],
      initTable1: [],
      editInlineColumns: [
        {
          title: "id",
          align: "center",
          width: 50,
          key: "id"
        },
        {
          title: "地区编号",
          align: "center",
          key: "areaId",
          editable: true
        },
        {
          title: "政策详情",
          align: "center",
          key: "policyDetail",
          width: 200,
          editable: true
        },
        {
          title: "政策编号",
          align: "center",
          key: "policyNum",
          width: 150,
          editable: true
        },
        {
          title: "排序号",
          align: "center",
          key: "sort",
          editable: true
        },
        {
          title: "创建时间",
          align: "center",
          key: "createDate",
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
      timearray: []
    };
  },
  methods: {
    submit: function() {
      // 发送 POST 请求
      
      axios
        .post("http://www.wuyangdata.com:60001/wpovertypolicy/insertwpovertypolicy", {
          areaId: this.formValidate.areaId,
          policyDetail: this.formValidate.policyDetail,
          policyNum: this.formValidate.policyNum,
          sort: this.formValidate.sort,
          createDate: new Date().Format('yyyy-MM-dd')
        })
        .then(function(res) {
          alert("添加成功");
        })
        .catch(function() {
          alert("添加失败");
        });
    },
    //搜索方法
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
      console.log(1111);
    },
    //点击搜索执行的函数
    handleSearch3() {
      this.editInlineData = this.initTable1;
      this.editInlineData = this.search(this.editInlineData, {
        policyNum: this.searchConName3
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
    axios
      .get(
        "http://www.wuyangdata.com:60001/wpovertypolicy/getallwpovertypolicy"
      )
      .then(
        response => {
          console.log(response.data.wPovertyPolicys);
          this.initTable1 = response.data.wPovertyPolicys.filter(item => {
            return item["displayStatus"] != "1";
          });

          this.editInlineData = this.initTable1;
        },
        response => {
          console.log("error");
        }
      );
  }
};
</script>




