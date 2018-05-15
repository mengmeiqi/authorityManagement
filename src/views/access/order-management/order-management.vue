<style>
.opt {
  /* margin-left: 30%; */
  text-indent: 90px;
}
.bag {
  position: absolute;
  left: 5%;
  top: 15px;
  z-index: 2;
  font-size: 20px;
}
/* .sle {
  position: absolute;
  right: 10%;
  top: 10px;
} */
.ivu-select-visible .ivu-select-arrow:nth-of-type(2) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.search {
  position: absolute;
  right: 6%;
  top: 15px;
  font-size: 20px;
}
.sum span {
  margin: 0 60px;
}
.num h2 {
  display: inline;
  margin: 0 70px;
}
.sum .red {
  color: red;
}
.sum .green {
  color: green;
}
.count {
  width: 100px;
  float: left;
}
</style>

<template>
  <div>
    <div>
      <Row class="sum">
        <Col span="1">
        <Icon type="connection-bars" size="20"></Icon>
        </Col>
        <Col span="1">统计</Col>
      </Row>
      <Row class="sum">
        <Col :sm="24" :md="10">
        <div class="count">
          <p>订单总数</p>
          <h2>120</h2>
        </div>
        <div class="count">
          <p>已完成</p>
          <h2 class="red">89</h2>
        </div>
        <div class="count">
          <p>未完成</p>
          <h2 class="green">31</h2>
        </div>
        </Col>
        <Col :sm="20" :md="10">
        <div class="count">
          <p>合作社数量</p>
          <h2 class="red">150</h2>
        </div>
        <div class="count">
          <p>散户数量</p>
          <h2 class="green">90</h2>
        </div>
        </Col>
        <col :sm="4" :md="4">
        <Icon type="plus-circled" color="blue" size="40"></Icon>
        </col>
      </Row>

    </div>
    <br>
    <br>
    <br>
    <hr>
    <br>
    <Row>
      <Col :sm="24" :md="hasZhongliang?24:12">
      <div style=" position: relative; width:420px;">
        <input v-model="searchConName3" style="width:400px; height:30px;margin: 10px" placeholder="请输入订单号、订单名称、乙方关键字搜索" />
        <Icon type="ios-search-strong" class='search'></Icon>
      </div>
      </Col>
      <Col v-if="!hasZhongliang" :sm="24" :md="12">
      <div class='sle'>
        <Icon type="ios-briefcase" class='bag'></Icon>
        <Select v-model="model1" style="width:240px;    margin: 10px;" class='opt' placeholder='    按时间排序'>
          <Option v-for="item in cityList" :value="item.value" :key="item.value"></Option>
        </Select>
      </div>
      </Col>
    </Row>
    <div>
      <Row>
        <Col :span="hasZhongliang?24:12">
        <Table border :columns="columns1" :data="data1"></Table>
        </Col>
        <Col span="12" v-if="!hasZhongliang">
        <Table border :columns="columns1" :data="data2"></Table>
        </Col>
      </Row>
    </div>

  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      columns1: [
        {
          title: "订单编号",
          key: "num"
        },
        {
          title: "订单名称",
          key: "name"
        },
        {
          title: "品种",
          key: "type"
        },
        {
          title: "订单时间",
          key: "data"
        },
        {
          title: "省份",
          key: "Province"
        },
        {
          title: "状态",
          key: "state"
        }
      ],
      data1: [
        {
          num: "X201805100002",
          name: "2018年中粮玉米订单",
          type: "玉米",
          date: "2018-2-10",
          Province: "黑龙江",
          state: "已发布"
        },
        {
          num: "X201805100003",
          name: "2018年黑龙江省玉米订单",
          type: "小豆",
          date: "2018-2-11",
          Province: "黑龙江",
          state: "已发布"
        }
      ],
      data2: [
        {
          num: "X201805100002",
          name: "2018年中粮玉米订单",
          type: "玉米",
          date: "2018-2-10",
          Province: "黑龙江",
          state: "已接收"
        },
        {
          num: "X201805100003",
          name: "2018年黑龙江省玉米订单",
          type: "小豆",
          date: "2018-2-11",
          Province: "黑龙江",
          state: "已接收"
        }
      ],
      cityList: [
        {
          value: "第一天",
          label: "1"
        },
        {
          value: "第二天",
          label: "2"
        },
        {
          value: "第三天",
          label: "3"
        },
        {
          value: "第四天",
          label: "4"
        }
      ],
      // 用户角色角色有不有中粮
      hasZhongliang: false,
      model1: ""
    };
  },
  mounted() {
    // 判断登陆角色是否是中粮
    if(Cookies.get('loginRole').includes('中粮')){
      this.hasZhongliang = true;
    }
  }
};
</script>