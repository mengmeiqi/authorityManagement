<style lang="less">
@import "../access.less";
@import "../../../styles/common.less";
@import "../../tables/components/table.less";
#btn {
  left: 1020px;
  top: 30px;
  position: absolute;
}
</style>
<template>
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
                注册审核
            </p>            
            <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>          
        
          
        </Card>
        </Col>
       
    </Row>


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
      editInlineColumns: [
        {
          title: "用户名",
          align: "center",
          key: "iname",
         editable: true
        },
        {
          title: "姓名",
          align: "center",
          key: "name",
          editable: true
        },
        {
          title: "性别",
          align: "center",
          key: "sex",
          editable: true
        },
        {
          title: "密码",
          align: "center",
          key: "password",
          editable: true
        },
        {
          title: "状态",
          align: "center",
          width: 285,
          key: "handle",
          handle: ["edit", "delete"]                   
        }
      ],
      editInlineData: [],
      timearray:[]
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
      this.editInlineData = this.search(this.editInlineData, { role_name: this.searchConName3 });
    },
    //点击取消执行的函数
    handleCancel3() {
      this.editInlineData = this.initTable1;
    },
    
  },

  mounted: function() {
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
  }
  
};
</script>




