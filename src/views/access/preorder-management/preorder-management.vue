
<template>
<div class="wrapper">
  <!-- <div class="header-search"> -->
    <Row>
      <Col span="24">
        <div class="search-specific">
            <input icon="search" placeholder="请输入订单号、订单名称、乙方关键字搜索" class="search-ipt"/>
            <Icon type="android-search" class="search-icon" style="font-size: 26px;"></Icon>
          <!-- <Input v-model="searchConName1" icon="search" @on-change="handleSearch1" placeholder="请输入订单号、订单名称、乙方关键字搜索" /> -->
        </div>
      </Col>
    </Row>
  <!-- </div> -->
  <div class="order">
    <Row :gutter="64">
      <router-link to="order-add">
        <Col span="8">
          <div class="order-info">
            <div class="order-number">
              <Icon type="ios-list-outline"></Icon>
              <p style="display: inline;margin-left: 14px;">X201805100002</p>
            </div>
            <div class="order-area">黑龙江省牡丹江市宁安市</div>
            <div class="crops">
              <div class="variety">玉米</div>
              <div class="square" style="margin-left: 20px">90万亩</div>
            </div>
            <div class="publish">
              <Icon type="paper-airplane"></Icon>
              <router-link to="order-add"><div style="display:inline;margin-left: 10px;color: #00CD00;">发布</div></router-link>
              <div class="order-time">2018年2月10日</div>
            </div>
          </div>
        </Col>
      </router-link> 
      <router-link to="order-add">     
      <Col span="8">
        <div class="order-info">
          <div class="order-number">
            <Icon type="ios-list-outline"></Icon>
            <p style="display: inline;margin-left: 14px;">X201805100002</p>
          </div>
          <div class="order-area">黑龙江省牡丹江市宁安市</div>
          <div class="crops">
            <div class="variety">玉米</div>
            <div class="square" style="margin-left: 20px">90万亩</div>
          </div>
          <div class="publish">
            <Icon type="paper-airplane"></Icon>
            <router-link to="order-add"><div style="display:inline;margin-left: 10px;color: #00CD00;">发布</div></router-link>
            <div class="order-time">2018年2月10日</div>
          </div>
        </div>
      </Col>
      </router-link>
      <router-link to="order-add">
        <Col span="8">
          <div class="order-info">
            <div class="order-number">
              <Icon type="ios-list-outline"></Icon>
              <p style="display: inline;margin-left: 14px;">X201805100002</p>
            </div>
            <div class="order-area">黑龙江省牡丹江市宁安市</div>
            <div class="crops">
              <div class="variety">玉米</div>
              <div class="square" style="margin-left: 20px">90万亩</div>
            </div>
            <div class="publish">
              <Icon type="paper-airplane"></Icon>
              <router-link to="order-add"><div style="display:inline;margin-left: 10px;color: #00CD00;">发布</div></router-link>
              <div class="order-time">2018年2月10日</div>
            </div>
          </div>
        </Col>
       </router-link>
      <router-link to="order-add">
        <Col span="8">
            <div class="order-info">
              <div class="order-number">
                <Icon type="ios-list-outline"></Icon>
                <p style="display: inline;margin-left: 14px;">X201805100002</p>
              </div>
              <div class="order-area">黑龙江省牡丹江市宁安市</div>
              <div class="crops">
                <div class="variety">玉米</div>
                <div class="square" style="margin-left: 20px">90万亩</div>
              </div>
              <div class="publish">
                <Icon type="paper-airplane"></Icon>
                <router-link to="order-add"><div style="display:inline;margin-left: 10px;color: #00CD00;">发布</div></router-link>
                <div class="order-time">2018年2月10日</div>
              </div>
            </div>
        </Col>
      </router-link>
      
      
    </Row>
  </div>    
  <!-- <div class="order">
    <Row :gutter="72">
      <Col span="8">
          <div class="order-info">
            <div class="order-number">
              <Icon type="ios-list-outline"></Icon>
              <p style="display: inline;margin-left: 14px;">X201805100002</p>
            </div>
            <div class="order-area">黑龙江省牡丹江市宁安市</div>
            <div class="crops">
              <div class="variety">玉米</div>
              <div class="square" style="margin-left: 20px">90万亩</div>
            </div>
            <div class="publish">
              <Icon type="paper-airplane"></Icon>
              <div style="display:inline;margin-left: 10px;">发布</div>
              <div class="order-time">2018年2月10日</div>
            </div>
          </div>
      </Col>
    </Row>
  </div> -->
</div>
</template>
<script>

</script>
<style>
.wrapper{
  /* background: #00ff00; */
  position: relative;
}
/* .header-search{
  position: absolute;
  top: 20px;
  left: 20px;
} */
.search-specific{
  width: 500px;
  height: 40px;
  position: relative;
  margin: 20px 0 0 20px;
}
.search-icon{
  position: absolute;
  right: 5px;
  top: 7px;
  font-size: 26px;
  color: #c3c3c3;
}
.search-specific input{
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 10px;  
  border: 1px solid #E3E3E3;
}
.search input::-webkit-input-placeholder{
  color:#c3c3c3;
}
.order-info{
  height: 270px;
  background: #E3E3E3;
  font-size: 20px;  
  padding-left: 20px;
  position: relative;
  margin-top: 20px;
  border-radius: 14px;  
}
.order{
  position: absolute;
  top: 60px;
  left: 0;
  margin: 0 20px 0 20px;
}
.order-number{
  padding-top: 20px;
}
.order-area{
  margin-top: 40px;
}
.crops div{
  display: inline;
}
.crops{
  margin: 30px 0 40px 0;  
}
.publish{
  color: #00CD00;
}
.order-time{
  color: #000000;
  display: inline;
  position: absolute;
  right: 20px;
}
/* #changeP {
  height: 34px;
}
#pre-book {
  margin-right: 20px;
} */
</style>
