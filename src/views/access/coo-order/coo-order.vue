<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";
</style>

<template>

<div>
  <Row style="width:100%">
      <Col span="24" style="margin-bottom:20px;">
        <Col span="24" style="position:relative;background:#ffffff;height:265px">
          <img span="24" style="top:0;left:0;width:100%" src="../../../images/order_01.png" alt="">
          <span style="position:absolute;bottom:100px;left:185px;font-size:24px;font-weight:500;">合作社名称</span>
          <Col span="24" style="height:63px;position:relative;">
            <Col span="5">
                <Col style="z-index:2;margin-left:30px;margin-top:-66px;width:132px;height:132px;border:5px solid rgba(102, 204, 102, 1);border-radius:132px;">
                  <img style="transform:translate(50%, 50%);height:66px;" src="../../../images/order_02.png" alt="">
                </Col>
            </Col>
            <Col span="5" style="height:90px;line-height:90px">
              <img style="vertical-align:middle;height:37px;" src="../../../images/order_03.png" alt="">
              <span style="font-size: 16px;">已实名认证</span>
            </Col>
            <Col span="8" style="height:90px;line-height:90px">
              <img style="vertical-align:middle;height:37px" src="../../../images/order_04.png" alt="">
              <span style="font-size:16px">5级</span>            
            </Col>  
            <Col span="6" style="height:90px;line-height:90px;">
              <button style="font-size:16px;vertical-align:middle;color:white;text-align:center;line-height:42px;width:177px;height:42px;background-color:rgba(26, 173, 25, 1);border: none;border-radius: 21px;">编辑资料</button>
            </Col>         
            
          </Col>
        </Col>
      </Col>
      <Col span="24" style="margin-bottom:20px;">
        <Col span="18">
          <Card>
            <Input v-model="searchConName1" icon="search" @on-change="handleSearch1" placeholder="请输入订单号、订单名称、乙方关键字搜索" style="width:425px;padding-bottom:10px;" />
            <Table border :columns="columns1" :data="data1"></Table>
            <router-view></router-view>
          </Card>
        </Col>
        <Col span="6">
          <Card style="height:120px;margin-left:10px;">
            <Col span="12" style="text-align:center">
              <div style="border-right:1px #000000 solid;">
                <div style="font-size: 28px;color: #1AAD19;">2</div>
                <span style="font-size: 16px;margin-left:10px;">已完成</span>
              </div>
            </Col>
            <Col span="12" style="text-align:center">
              <div>
                <div style="font-size: 28px;color: #1AAD19;">5</div>
                <span style="font-size: 16px;margin-left:10px;">未完成</span>
              </div>
            </Col>
          </Card> 
          <Card span="6" style="height:245px;margin-left:10px;margin-top:10px;">
            <p slot="title" style="font-size:16px;">
              其他选项
            </p>
          </Card>
        </Col>
      </Col>
  </Row>
</div>
</template>




<script>
import canEditTable from "../../tables/components/preordermanagementusercanEditTable.vue";
import axios from "axios";

export default {
  name: "editable-table",
  components: {
    canEditTable
  },
  data() {
    return {
      isshow:true,
      initTable1: [],
      columns1: [
        {
            title: '订单编号',
            key: 'num'
        },
        {
            title: '订单名称',
            key: 'name'
        },
        {
            title: '品种',
            key: 'type'
        },
        {
            title: '订单时间',
            key: 'data'
        },
        {
            title: '省份',
            key: 'Province'
        },
        {
            title: '状态',
            key: 'state'
        }
      ],
      data1: [
        {
            num: 'X201805100002',
            name: '2018年中粮玉米订单',
            type: '玉米',
            data: '2018-2-10',
            Province: '黑龙江',
            state: '已发布'
        },
        {
            num: 'X201805100003',
            name: '2018年黑龙江省玉米订单',
            type: '小豆',
            data: '2018-2-11',
            Province: '黑龙江',
            state: '已接收'
        },
        {
            num: 'X201805100002',
            name: '2018年中粮玉米订单',
            type: '玉米',
            data: '2018-2-10',
            Province: '黑龙江',
            state: '已发布'
        },
        {
            num: 'X201805100003',
            name: '2018年黑龙江省玉米订单',
            type: '小豆',
            data: '2018-2-11',
            Province: '黑龙江',
            state: '已接收'
        },
        {
            num: 'X201805100002',
            name: '2018年中粮玉米订单',
            type: '玉米',
            data: '2018-2-10',
            Province: '黑龙江',
            state: '已发布'
        },
        {
            num: 'X201805100003',
            name: '2018年黑龙江省玉米订单',
            type: '小豆',
            data: '2018-2-11',
            Province: '黑龙江',
            state: '已接收'
        },
      ]
    };
  },
  methods: {
    search(data, argumentObj) {
      let res = data;
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
    handleSearch3() {
      this.editInlineData = this.initTable1;
      this.editInlineData = this.search(this.initTable1, {
        beforehandNum: this.searchConName3
      });
    },
    handleCancel3() {
      this.searchConName3="";
      this.editInlineData = this.initTable1;
    },

    // 时间选择事件处理函数
    handleTimeSelect() {
      console.log(arguments);
    },
    // 品类选择处理函数
    handleTyleSelect() {
      console.log(arguments);
    }
  },
};
</script>



