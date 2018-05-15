<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";
.user1{
    background: white;
    padding: 20px;
    padding-left: 300px;
    padding-right: 300px;
    height: 100%;
    text-align: center;
  }
  .h1{
    padding: 10px;
    text-align: center;
    
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
            <p slot="title" style="height: 34px;overflow: visible">
                <Icon type="android-remove"></Icon>
                <span style="margin-right: 96px;">土地历史表格</span>
            </p>
            <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
            <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;" > +添加</Button>
            <router-view></router-view>
            <Page :total="100"   :page-size="5"></Page>
        </Card>
        </Col>
    </Row>
  </div>
  <div v-if="!isshow">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
    <h3 class="h1">添加关系</h3>
    <FormItem label="id" prop="id">
      <Input v-model="formValidate.id" placeholder="请输入id"></Input>
    </FormItem>
    <FormItem label="土地总量" prop="beforeTotalLand">
      <Input v-model="formValidate.beforeTotalLand" placeholder="请输入土地总量"></Input>
    </FormItem>
    <FormItem label="土地拥有者" prop="LandOwner">
      <Input v-model="formValidate.LandOwner" placeholder="请输入土地拥有者"></Input>
    </FormItem>
    <FormItem label="拥有时间" prop="Time">
      <Input v-model="formValidate.Time" placeholder="请输入时间"></Input>
    </FormItem>
        <FormItem label="标记" prop="concludeSignDate">
      <Input v-model="formValidate.concludeSignDate" placeholder="请输入标记"></Input>
    </FormItem>
        <FormItem label="" prop="audit">
      <Input v-model="formValidate.audit" placeholder="请输入"></Input>
    </FormItem>
    
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
      <Button v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
    </FormItem>
  </Form>
  </div>  
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
      formValidate: {
                    id: '',
                    beforeTotalLand: '',
                    LandOwner: '',
                    Time: '',
                    concludeSignDate:'',
                },
                ruleValidate: {
                    id: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    beforeTotalLand: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    LandOwner: [
                        { required: true, message: '这里不能为空', trigger: 'blur' }
                    ],
                    Time: [
                        { required: true, message: '这里不能为空', trigger: 'change' }
                    ],
                    concludeSignDate: [
                        { required: true, message: '这里不能为空', trigger: 'change' }
                    ]
                },
      // 地址
      local: "黑龙江",
      localID: 17,
      // 筛选的时间
      selectTime: "",
      // 筛选的品类
      selectType: "",

      // 品类列表
      typeLIst: [
        {
          value: 1,
          label: "玉米"
        },
        {
          value: 2,
          label: "大豆"
        },
        {
          value: 3,
          label: "土豆"
        },
        {
          value: 4,
          label: "稻米"
        }
      ],

      initTable1: [],

      editInlineColumns: [
        {
          title: "id",
          align: "center",
          key: "id",
        //   width: 80
        },
        {
          title: "土地总量",
          align: "center",
          key: " beforeTotalLand",
        //   width: 80
        },
        {
          title: "土地拥有者",
          align: "center",
          key: "LandOwner",
        //   width: 80
        },
        {
          title: "拥有时间",
          align: "center",
          key: "Time",
        //   width: 80,
          editable: true
        },
        {
          title: "标记",
          align: "center",
          key: "concludeSignDate",
        //   width: 80
        },
        {
          title: "操作",
          align: "center",
          width: 190,
          key: "handle",
          handle: ["edit", "delete"]
        }
      ],
      editInlineData: [],
      cityList: [
        {
          value: "Canberra",
          label: "1"
        }
      ]
    };
  },
  methods: {
    handleSubmit (deptId) {
                this.$refs[deptId].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (deptId) {
                this.$refs[deptId].resetFields();
            },
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
  mounted: function() {
    // 区域ID
    var localID = 17;

    //利用axios调用接口获取数据
    axios
      .get("http://39.107.253.90:60001/tbeforehandorder/findallorderpage")
      .then(
        response => {
          // console.log(response);
          // this.editInlineData = response.data.tbflist;
          console.log(response);
          // 筛选区域
          response.data.tbflist.forEach((item, index) => {
            // if (item.id === localID) {
            //   this.initTable1.push(item);
            // }
            this.initTable1.push(item);
          });
          this.editInlineData = this.initTable1;
          console.log(res);
        },
        response => {
          console.log("error");
        }
      );
  }
};
</script>



