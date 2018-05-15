<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";

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
                    <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入预订单..."  />
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
                预订单管理
            </p>
            <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
            <router-link to="preorderadd"><Button type="ghost" long style="margin:10px 0;" > +添加</Button></router-link>
            <router-view></router-view>
            <Page :total="100"   :page-size="5"></Page>
        </Card>
        </Col>
    </Row>




</template>




<script>
import canEditTable from "../../tables/components/canEditTable.vue";
import axios from "axios";

export default {
  name: "editable-table",
  components: {
    canEditTable
  },
  data() {
    return {
      initTable1: [],
      editInlineColumns: [
        {
          title: "id",
          align: "center",
          key: "id",
          width:80,
        },
        {
          title: "预订单编号",
          align: "center",
          key: "beforehandNum",
          width:80,
        },
        {
          title: "合同编号",
          align: "center",
          key: "compactNum",
          width:80,
        },
        {
          title: "签订地点",
          align: "center",
          key: "concludeSignPlace",
          width:80,
        },
        {
          title: "签订时间",
          align: "center",
          key: "concludeSignDate",
          width:80,
        },
         {
          title: "甲方(收购方)",
          align: "center",
          key: "firstParty",
          width:80,
        },
        {
          title: "乙方(出售方)",
          align: "center",
          key: "secondParty",
          width:80,
        },
        {
          title: "合同年份",
          align: "center",
          key: "year",
          width:80,
        },
        {
          title: "种植区域及面积",
          align: "center",
          key: "plantArea",
          width:80,
        },
         {
          title: "面积",
          align: "center",
          key: "acreage",
          width:80,
        },
         {
          title: "干粮吨数",
          align: "center",
          key: "fieldRationsNum",
          width:80,
        },
        {
          title: "干粮水分",
          align: "center",
          key: "fieldRationsWet",
          width:80,
        },
        {
          title: "潮粮吨数",
          align: "center",
          key: "moistGrainNum",
          width:80,
        },
        {
          title: "潮粮水分",
          align: "center",
          key: "moistGrainWet",
          width:80,
        },
         {
          title: "上下浮动不超过",
          align: "center",
          key: "floating",
          width:80,
        },
         {
          title: "质量标准",
          align: "center",
          key: "nationalStandard",
          width:80,
        },
         {
          title: "国标等级",
          align: "center",
          key: "nationalLevel",
          width:80,
        },
        {
          title: "水分25%",
          align: "center",
          key: "wet1",
          width:80,
        },
        {
          title: "25%折扣比例",
          align: "center",
          key: "discountRate1",
          width:80,
        },
        {
          title: "水分25-30%",
          align: "center",
          key: "wet2",
          width:80,
        },
        {
          title: "25%-30折比例",
          align: "center",
          key: "discountRate2",
          width:80,
        },
        {
          title: "水分30%以上",
          align: "center",
          key: "wet3",
          width:80,
        },
         {
          title: "水分30%以上折扣比例",
          align: "center",
          key: "discountRate3",
          width:80,
        },
         {
          title: "生霉粒率",
          align: "center",
          key: "mildew",
          width:80,
        },
         {
          title: "生霉粒2-3%",
          align: "center",
          key: "mildewRate1",
          width:80,
        },
        {
          title: "3%-4%扣量比例",
          align: "center",
          key: "mildewRate2",
          width:80,
        },
        {
          title: "生霉粒超4%拒收",
          align: "center",
          key: "mildewRate3",
          width:80,
        },
        {
          title: "锁定价格14水分",
          align: "center",
          key: "farelock1",
          width:80,
        },
          {
          title: "锁定价格28水分",
          align: "center",
          key: "farelock2",
          width:80,
        },
         {
          title: "几日支付保证金",
          align: "center",
          key: "payEarnestMoneyDatew",
          width:80,
        },
         {
          title: "保证金元/吨",
          align: "center",
          key: "perEarnestMoney",
          width:80,
        },
        {
          title: "年化率",
          align: "center",
          key: "yearRate",
          width:80,
        },
        {
          title: "保底价14水",
          align: "center",
          key: "minimumPrice1",
          width:80,
        },
        {
          title: "保底价28水",
          align: "center",
          key: "minimumPrice2",
          width:80,
        },
         {
          title: "水分30%以上",
          align: "center",
          key: "wet3",
          width:80,
        },
         {
          title: "水分30%以上折扣比例",
          align: "center",
          key: "discountRate3",
          width:80,
        },
         {
          title: "生霉粒率",
          align: "center",
          key: "mildew",
          width:80,
        },
         {
          title: "生霉粒2-3%",
          align: "center",
          key: "mildewRate1",
          width:80,
        },
        {
          title: "3%-4%扣量比例",
          align: "center",
          key: "mildewRate2",
          width:80,
        },
        {
          title: "生霉粒超4%拒收",
          align: "center",
          key: "mildewRate3",
          width:80,
        },
        {
          title: "锁定价格14水分",
          align: "center",
          key: "farelock1",
          width:80,
        },
          {
          title: "锁定价格28水分",
          align: "center",
          key: "farelock2",
          width:80,
        },
         {
          title: "交粮期限",
          align: "center",
          key: "jiaoliangDate",
          width:80,
        },
         {
          title: "几日内签订书面变更合同",
          align: "center",
          key: "changeDate",
          width:80,
        },
        {
          title: "不可抗拒力发生几日通报",
          align: "center",
          key: "noticeDate",
          width:80,
        },
        {
          title: "不可抗力持续超过几日",
          align: "center",
          key: "continueDate",
          width:80,
        },
        {
          title: "不可抗力不能达成协议天数",
          align: "center",
          key: "noAgreement",
          width:80,
        },
         {
          title: "合同有效日",
          align: "center",
          key: "efficaciousDate",
          width:80,
        },
         {
          title: "",
          align: "center",
          key: "graindepotId",
          width:80,
        },
         {
          title: "烘干塔ID",
          align: "center",
          key: "dtowerId",
          width:80,
        },
        {
          title: "",
          align: "center",
          key: "operatorId",
          width:80,
        },
        {
          title: "",
          align: "center",
          key: "separateBill",
          width:80,
        },
        {
          title: "",
          align: "center",
          key: "cooId",
          width:80,
        },
          {
          title: "",
          align: "center",
          key: "audit",
          width:80,
        },
        {
          title: "操作",
          align: "center",
          width: 190,
          key: "handle",
          handle: ["edit", "delete"]
        }
      ],
      editInlineData: []
    };
  },
  methods: {
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
    //利用axios接口调用获取数据
    axios.get("http://39.107.253.90:60001/tbeforehandorder/findallorderpage").then(
      response => {
        this.editInlineData = response.data.tbflist;
        this.initTable1 = response.data.tbflist;
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
