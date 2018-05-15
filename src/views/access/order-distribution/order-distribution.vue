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
button.btn {
  width: 50px;
  margin: 10px 0;
  border: 1px solid #2d8cf0;
  background: #2d8cf0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}
</style>
<template>
    <div class="layout">
        <Layout>
           
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                         <Input placeholder="搜索"></Input>
                        <Submenu name="1" v-for="(cityItem,index) in citys"  @click.native="getcounty(citys[index].code)">
                            <template slot="title" >
                                <Icon type="ios-navigate"></Icon>
                                {{cityItem.name}}
                            </template>
                            <MenuItem name="1-1" @click.native="show" v-for="item1 in county">{{item1.name}}</MenuItem>
                        </Submenu>
                        
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>{{province}}</BreadcrumbItem>
                        
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                            <div>
                                <can-edit-table border ref="selection"  v-model="county" :columns-list="editInlineColumns"></can-edit-table>
                                
                            </div>
                            <p>分单说明：</p>
                            <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
                            <router-link to="order-management"><button class="btn" type="ghost">发单</button></router-link>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import canEditTable from "../../tables/components/order-distributioncanEditTable.vue";
import axios from "axios";

export default {
  name: "editable-table",
  components: {
    canEditTable
  },

  data() {
    return {
      value6: "",
      editInlineColumns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "名称",
          key: "name"
        },
        {
          title: "亩数",
          key: "area",
          editable: true
        },
        {
          title: "操作",
          key: "handel",
          handle: ["edit", "delete"]
        }
      ],
      editInlineData: [
        {
          name: "渤海镇",
          area: "20万亩"
        },
        {
          name: "马河乡",
          area: "30万亩"
        }
      ],
      citys:[],
      province:[],
      county:[]
    };
  },
  methods: {
    show:function(e){
      this.editInlineData.push({name:e.target.innerHTML,area:''});
    },
    getcounty(code){
      console.log(code);
      axios.get("http://39.107.253.90:60001/tarea/getcounty?city=" + code).then(
          (res)=>{
            // console.log(res);
            console.log(res.data.county);
            this.county = res.data.county;
          }
      )
    }
  },
  mounted:function(){
    // var province=230000; 
    axios.get("http://39.107.253.90:60001/tarea/getallprovince").then(
      response=>{
        // console.log(response);
        // console.log(response.data.province[0].name);
        this.province =  response.data.province[0].name;
      }
    ).then(
      axios.get("http://39.107.253.90:60001/tarea/getallcity?province=" + 230000).then(
        res=>{
          //console.log(res.data.citys);
          //this.province = response.data.province[0].code;
          this.citys = res.data.citys;
        }
      )
    )
       
  }
};
</script>
