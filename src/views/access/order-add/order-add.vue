<style>
.center{
 background: #fff;
  width: 83%;
  height: 100px;
  margin-top: 20px;
}
.step {
     width: 83%;
  height: 100px;
  margin: 0 auto;
  display: flex;
 
}
.peo {
  margin: auto;
    
}
.pro {
  margin: auto;
}
.area {
  margin: auto;
}
.center {
}
</style>

<template>
<div>
    <div style="display:flex">
        <div style="flex:1">
            <div>


    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
        <Row>
            <Col span="12">
                <FormItem label="预订单编号" prop="beforehand_num">
                    <Input v-model="formValidate.beforehand_num" placeholder="预订单编号"></Input>
                </FormItem>
            </Col>
            <Col span="12">
                <FormItem label="合同编号" prop="compact_num">
                    <Input v-model="formValidate.compact_num" placeholder="合同编号"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="签订地点" prop="conclude_sign_place">
                    <Input v-model="formValidate.conclude_sign_place" placeholder="签订地点"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="签订时间" prop="conclude_sign_date">
                    <Input v-model="formValidate.conclude_sign_date" placeholder="签订时间"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="甲方(收购方)" prop="first_party">
                    <Input v-model="formValidate.first_party" placeholder="甲方(收购方)"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="乙方(出售方)" prop="second_party">
                    <Input v-model="formValidate.second_party" placeholder="乙方(出售方)"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="合同年份" prop="year">
                    <Input v-model="formValidate.year" placeholder="合同年份"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="种植区域及面积" prop="plant_area">
                    <Input v-model="formValidate.plant_area" placeholder="种植区域及面积"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="面积" prop="acreage">
                    <Input v-model="formValidate.acreage" placeholder="面积"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="干粮吨数" prop="field_rations_num">
                    <Input v-model="formValidate.field_rations_num" placeholder="干粮吨数"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="干粮水分" prop="field_rations_wet">
                    <Input v-model="formValidate.field_rations_wet" placeholder="14%"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="潮粮吨数" prop="moist_grain_num">
                    <Input v-model="formValidate.moist_grain_num" placeholder="潮粮吨数"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="潮粮水分" prop="moist_grain_wet">
                    <Input v-model="formValidate.moist_grain_wet" placeholder="28%"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="上下浮动不超过" prop="floating">
                    <Input v-model="formValidate.floating" placeholder="5%"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="质量标准" prop="national_standard">
                    <Input v-model="formValidate.national_standard" placeholder="国标（GB 1353-2009）"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="国标等级" prop="national_level">
                    <Input v-model="formValidate.national_level" placeholder="三等以上含三等"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="水分25%以下(含25%)" prop="wet1">
                    <Input v-model="formValidate.wet1" placeholder="25%以下(含25%)"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="25%折扣比例" prop="discount_rate1">
                    <Input v-model="formValidate.discount_rate1" placeholder="25%折扣比例"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="水分25%-30%(含30%)" prop="wet_2">
                    <Input v-model="formValidate.wet_2" placeholder="25%-30%(含30%)"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="25%-30折扣比例" prop="discount_rate2">
                    <Input v-model="formValidate.discount_rate2" placeholder="25%-30折扣比例"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="水分30%以上" prop="wet_3">
                    <Input v-model="formValidate.wet_3" placeholder="30%"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="水分30%以上折扣量" prop="discount_rate3">
                    <Input v-model="formValidate.discount_rate3" placeholder="水分30%以上折扣量"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="生霉粒率 " prop="mildew">
                    <Input v-model="formValidate.mildew" placeholder="2%-3%"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="生霉粒2-3%折扣比例" prop="mildew_rate1">
                    <Input v-model="formValidate.mildew_rate1" placeholder="需要输入百分比"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="生霉粒3-4%折扣比例" prop="mildew_rate2">
                    <Input v-model="formValidate.mildew_rate2" placeholder="需要输入百分比"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="生霉粒超4%拒收 " prop="mildew_rate3">
                    <Input v-model="formValidate.mildew_rate3" placeholder="4%"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="锁定价格 元/吨" prop="farelock1">
                    <Input v-model="formValidate.farelock1" placeholder="锁定价格"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="锁定价格28水分" prop="farelock2">
                    <Input v-model="formValidate.farelock2" placeholder="锁定价格28水分"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="几日支付保证金" prop="pay_earnest_money_date">
                    <Input v-model="formValidate.pay_earnest_money_date" placeholder="几日支付保证金"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="保证金 元/吨" prop="per_earnest_money">
                    <Input v-model="formValidate.per_earnest_money" placeholder="保证金元/吨"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="年化率" prop="year_rate">
                    <Input v-model="formValidate.year_rate" placeholder="年化率"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="保底价14水" prop="minimum_price1">
                    <Input v-model="formValidate.minimum_price1" placeholder="元/吨"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="保底价28水" prop="minimum_price2">
                    <Input v-model="formValidate.minimum_price2" placeholder="元/吨"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="交粮期限" prop="jiaoliang_date">
                    <Input v-model="formValidate.jiaoliang_date" placeholder="交粮期限"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="几日内签订书面变更合同" prop="change_date">
                    <Input v-model="formValidate.change_date" placeholder="2日"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="不可抗拒力发生几日通报" prop="notice_date">
                    <Input v-model="formValidate.notice_date" placeholder="5日"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="不可抗力持续超过几日" prop="continue_date">
                    <Input v-model="formValidate.continue_date" placeholder="15日"></Input>
                </FormItem>
            </Col>
            <Col span="6">
                <FormItem label="不可抗力不能达成协议天数" prop="no_agreement">
                    <Input v-model="formValidate.no_agreement" placeholder="30日"></Input>
                </FormItem>
            </Col>
        </Row>
        <Row>
            <Col span="6">
                <FormItem label="合同有效日期" prop="efficacious_date">
                    <Input v-model="formValidate.efficacious_date" placeholder="合同有效日期"></Input>
                </FormItem>
            </Col>
        </Row>
    </Form>

 </div> 
        </div>
        <div style="width:16%;margin-left:20px; ">
            <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
            <div style="display:flex;margin-top:20px">
               
            <button style='background:rgb(45,140,240);flex:1;height:35px;border-radius:10%;border:none' @click="addSub"> <router-link to="order-management" style="color:#000;">发布</router-link></button>
            <button style='flex:1;height:35px;border-radius:10%;border:none;margin:0 7px'><router-link to="preorder-management" style="color:#000;">保存草稿</router-link></button>
            <button style='flex:1;height:35px;border-radius:10%;border:none'>预览</button>
            </div>
        </div>
    </div>
    <div class="center">
           <Steps  :current="1" class="step">
        
            <Step class="peo" title="中粮集团XX部(或XX人)" content="发起订单" ></Step>
            <Step class="pro" status='wait' title="省无央平台" content="接受订单"></Step>
            <Step class="area" title="县无央平台" content="接受订单"></Step>
        
    </Steps>
    </div>
</div>    
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formValidate: {
        beforehand_num: "",
        compact_num: "",
        conclude_sign_place: "",
        conclude_sign_date: "",
        first_party: "",
        second_party: "",
        year: "",
        plant_area: "",
        acreage: "",
        field_rations_num: "",
        field_rations_wet: "",
        moist_grain_num: "",
        moist_grain_wet: "",
        floating: "",
        national_standard: "",
        national_level: "",
        wet1: "",
        discount_rate1: "",
        wet_2: "",
        discount_rate2: "",
        wet_3: "",
        discount_rate3: "",
        mildew: "",
        mildew_rate1: "",
        mildew_rate2: "",
        mildew_rate3: "",
        farelock1: "",
        farelock2: "",
        pay_earnest_money_date: "",
        per_earnest_money: "",
        year_rate: "",
        minimum_price1: "",
        minimum_price2: "",
        jiaoliang_date: "",
        change_date: "",
        notice_date: "",
        continue_date: "",
        no_agreement: "",
        efficacious_date: "",
      },
      ruleValidate: {
        beforehand_num: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        compact_num: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        conclude_sign_place: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        conclude_sign_date: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        first_party: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        second_party: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        year: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        plant_area: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        acreage: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        field_rations_num: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        field_rations_wet: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        moist_grain_num: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        moist_grain_wet: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        floating: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        national_standard: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        national_level: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        wet1: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        discount_rate1: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        wet_2: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        discount_rate2: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        wet_3: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        discount_rate3: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        mildew: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        mildew_rate1: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        mildew_rate2: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        mildew_rate3: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        farelock1: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        farelock2: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        pay_earnest_money_date: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        per_earnest_money: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        year_rate: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        minimum_price1: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        minimum_price2: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        jiaoliang_date: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        change_date: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        notice_date: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        continue_date: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        no_agreement: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
        efficacious_date: [
          { required: true, message: "此项不能为空", trigger: "blur" }
        ],
      },
      index: 1
    };
  },
  methods: {
    addSub:function(){
      console.log(this.formValidate.beforehand_num);
      axios.post('http://192.168.1.113:60001/tbeforehandorder/addtbo',{
        beforehandNum:this.formValidate.beforehand_num,
        compactNum:this.formValidate.compact_num
      })
      .then(response=>{
        alert('xixi');
        console.log(response.data);
      }).catch(res=>{
        console.log(res.data);
        console.log(params);
      })
    }
  }
};
</script>
