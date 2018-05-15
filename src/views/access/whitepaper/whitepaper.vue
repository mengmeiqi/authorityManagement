
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
                <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入姓名..."  />
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
                扶贫政策白皮书
            </p>            
            <can-edit-table highlight-row refs="currentRowTable" :columns-list="Column" v-model="data1"></can-edit-table>          
            <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;">+添加</Button>
           <Page :total="100" :page-size="5"></Page>
        </Card>
        </Col>
       
    </Row>  
    </div>
    <div v-if="!isshow">
        <Form :model="formItem" :label-width="80" class="user2">
                <h3 class="font-size1">扶贫政策白皮书</h3>
                <FormItem label="白皮书内容:">
                    <Input  v-model="formItem.input"  type="textarea"  :rows="4" placeholder="输入详情"></Input >
                </FormItem>
                <FormItem class="qqq">
                    <Button type="primary" @click="submit">提交</Button>
                    <Button v-on:click="isshow=true" type="ghost" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
    </div>
</div>
   
</template>
<script>
import canEditTable from "../../tables/components/rolecanEditTable.vue";
import axios from "axios";

export default {
  name: "editable-table",
  components: {
    canEditTable
  },
  data() {
    return {
      thisTableData: [],
      edittingStore: [],
      initTable1: [],
      data1: [
       
      ],
      Column: [
        {
          type: "index",
          width: 60,
          align: "center"
        },
        {
          title: "扶贫政策白皮书",
          key: "policyDetail"
        }
      ],

      timearray: [],
      isshow: true,
      formItem: {
        input: "",
        checkbox: [],
        textarea: "",
        checkdata: []
      }
    };
  },
  methods: {
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
      console.log();
    },
    //点击搜索执行的函数
    handleSearch3() {
      this.editInlineData = this.initTable1;
      this.editInlineData = this.search(this.editInlineData, {
        role_name: this.searchConName3
      });
    },
    //点击取消执行的函数
    handleCancel3() {
      this.editInlineData = this.initTable1;
    },

    submit: function() {
        
                // 发送 POST 请求
                axios.post("http://39.107.253.90:60001/wpovertypolicy/insertwpovertypolicy",
                    {

                        policyDetail:this.formItem.input,
                        id:10
                        
                       
                       


                    })
                    .then(function(res) {
                        alert("添加成功");
                    })
                    .catch(function() {
                        console.log("添加失败");
                    });


            },

  },
  mounted: function() {
    axios.get("http://39.107.253.90:60001/wpovertypolicy/getallwpovertypolicy").then(
      response => {
      console.log(response);
      this.data1 = response.data.wPovertyPolicys;
      },
      err => {
        console.log("error");
      }
    );
    //利用axios接口调用获取数据
  }
};
</script>
<style lang="less">
@import "../access.less";
@import "../../../styles/common.less";
@import "../../tables/components/table.less";
.user2 {
  background: white;
  padding: 20px;
  padding-left: 300px;
  padding-right: 300px;
  height: 100%;
  /*text-align: center;*/
}
.font-size1 {
  padding: 10px;
  text-align: center;
}
textarea {
  width: 400px;
  height: 200px;
}
.qqq {
  text-align: center;
}
#btn {
  left: 1020px;
  top: 30px;
  position: absolute;
}
</style>
