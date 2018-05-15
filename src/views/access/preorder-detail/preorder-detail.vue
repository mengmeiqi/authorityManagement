<style>
.top {
  width: 100%;
}
.top-l {
  text-align: center;
  line-height: 400px;
  width: 68%;
  height: 402px;
  float: left;
  margin-right: 5px;
}
.r-1 {
  text-align: center;
  width: 31%;
  height: 200px;
  float: left;
  margin-bottom: 5px;
}
.r-2 {
  text-align: center;
  width: 31%;
  height: 200px;
  float: left;
  position: relative;
}
textarea {
  margin-top: 8px;
  width: 70%;
  height: 90px;
  margin-bottom: 10px;
}
span {
  float: left;
  margin-top: 6px;
}
.q {
  border-bottom: 1px solid rgb(207, 206, 206);
  text-align: left;
}
.b3 {
  margin: 0 auto;
  vertical-align: middle;
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -14px;
  left: 40%;
}
.z {
  margin-top: 5px;
}
.bottom {
  text-align: center;
  top: 418px;
  width: 67%;
  position: absolute;
}
</style>
<template>
    <div class="container">
        <div class="top">
            <Card class="top-l">
                     订单详情
            </Card>
            <div>
              <Card class="r-1">
                <div class="q"> 意见</div>
                <Textarea ></Textarea>
                <div>
                  <Button type="primary" class="b1" @click="agree">同意</Button>
                  <Button type="ghost" class="b2" @click="noagree">不同意</Button>
                </div>
              </Card>
              <Card class="r-2">
                <div class="q"> 项目</div>
                <router-link to="order-distribution"><Button type="primary" class="b3" id="bt1" disabled>分单</Button></router-link>
              </Card>
            </div>
        </div>
        <Card class="bottom">
          <Layout>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <div>
                <can-edit-table border ref="selection"  v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
              </div>
            </Content>
          </Layout>
        </Card>
      </div>
</template>




<script>
import canEditTable from "../../tables/components/order-distributioncanEditTable.vue";
import axios from "axios";export default {
  name: "editable-table",
  components: {
    canEditTable
  },
  data() {
    return {
      editInlineColumns: [     
        {
          title: "主键",
          key: "id"
        },
        {
          title: "订单编号",
          key: "beforehandNum"
        },
        {
          title: "订单名称",
          key: "orderName"
        },
        {
          title: "父ID",
          key: "parentId"
        },
        {
          title: "服务商",
          key: "commercialCode"
        },
        {
          title: "发起者",
          key: "fromParty"
        },
        {
          title: "接收者",
          key: "toParty"
        },
        {
          title: "合作社",
          key: "cooId"
        }
      ],
      editInlineData: []
    };
  },
  methods: {
    agree() {
      document.getElementById("bt1").disabled = false;
    },
    noagree() {
      document.getElementById("bt1").disabled = true;
    }
  },
  mounted: function(){
    axios
      .get("https://www.wuyangdata.com:60001/tbeforehandorder/findallorderpage")
      .then(res => {
        this.editInlineData = res.data.tbflist;
        console.log(this.editInlineData);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>