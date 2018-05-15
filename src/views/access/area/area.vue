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
                      <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入地块名称..."  />
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
                      地块管理
                  </p>            
                  <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>
                <Page :total="100" :page-size="5"></Page>
              </Card>
              </Col>
            
          </Row>
  </div>
  <div v-if="!isshow">
        4
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
       isshow: true,
      editInlineColumns: [
        {
          title: "id",
          align: "center",
          key: "role_id",
         
        },
        {
          title: "地块名称",
          align: "center",
          key: "role_name",
          editable: true
        },
        {
          title: "地块大小",
          align: "center",
          key: "description",
          editable: true
        },
          {
              title: "地块责任人",
              align: "center",
              key: "people",
              editable: true
          },

        {
          title: "操作",
          align: "center",
          width: 285,
          key: "handle",
          handle: ["view","edit", "delete"]                   
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
      console.log(1111);
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
  
  }
  
};
</script>




