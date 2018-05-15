<style lang="less">
@import "../access.less";
@import "../../../styles/common.less";
@import "../../tables/components/table.less";
#btn {
  left: 1020px;
  top: 30px;
  position: absolute;
}
.user2 {
  background: white;
  padding: 20px;
  padding-left: 300px;
  padding-right: 300px;
  height: 100%;
  /*text-align: center;*/
}
.font-size1 {
  padding: 10px;
  text-align: center;
}
.qqq {
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
                            <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入土地名称..."  />
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
                        农场表
                    </p>
                    <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                    <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>
                    <Page :total="100"></Page>
                </Card>
                </Col>
            </Row>
    </div>
    <div v-if="!isshow">
            <Form :model="formItem" :label-width="80" class="user2">
                        <h3 class="font-size1">添加烘干塔</h3>
                        <FormItem label="烘干塔id">
                            <Input v-model="formItem.input" placeholder="输入烘干塔id"></Input>
                        </FormItem>
                        <FormItem label="烘干塔名称">
                            <Input v-model="formItem.input" placeholder="输入烘干塔名称"></Input>
                        </FormItem>
                        <FormItem label="烘干塔地址">
                            <Input v-model="formItem.input" placeholder="输入烘干塔地址"></Input>
                        </FormItem>
                        <FormItem label="名称">
                            <Input v-model="formItem.input" placeholder="输入烘干塔名称"></Input>
                        </FormItem>
                        

                        <FormItem class="qqq">
                            <Button type="primary" @click="submit">提交</Button>
                            <Button  v-on:click="isshow=true" type="ghost" style="margin-left: 8px">取消</Button>
                        </FormItem>

                        <!--<Checkbox refs="table2" v-model="checkdata" ></Checkbox>-->
            </Form>
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
      formItem: {
        input: "",
        checkbox: [],
        textarea: "",
        checkdata: []
      },
      thisTableData: [],
      edittingStore: [],
      isshow: true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "烘干塔id",
          align: "center",
          key: "id"
        },
        {
          title: "烘干塔名称",
          align: "center",
          key: "name",
          editable: true
        },
        {
          title: "烘干塔地址",
          align: "center",
          key: "description",
          editable: true
        },
        {
          title: "操作",
          align: "center",
          width: 285,
          key: "handle",
          handle: ["view", "edit", "delete"]
        }
      ],
      editInlineData: [
        {
        title: '名称',
        align: 'center',
        key: 'name'
    },
    {
        title: '归属局',
        align: 'center',
        key: 'HomeOffice'
    },
    {
        title: '种植方式',
        align: 'center',
        key: 'Plantingmode'
    },
    {
        title: '面积',
        align: 'center',
        key: 'area'
    },
    {
        title: '联系人',
        align: 'center',
        key: 'extend'
    },
    {
        title: '联系方式',
        align: 'center',
        key: 'Contactinformation'
    },
    {
        title: '北纬',
        align: 'center',
        key: 'Northlatitude'
    },
    {
        title: '东经',
        align: 'center',
        key: 'Eastlongitude'
    },
    {
        title: '级别',
        align: 'center',
        key: 'level'
    },
    {
        title: '备注',
        align: 'center',
        key: 'Remarks'
    }
      ],
      timearray: []
    };
  },
  methods: {
    submit: function() {
      // 发送 POST 请求
      axios
        .post("http://www.wuyangdata.com:60001/role/addrole", {
          role_name: this.formItem.input,
          description: this.formItem.textarea,
          idsarray: this.formItem.checkbox
        })
        .then(function(res) {
          alert("添加成功");
        })
        .catch(function() {
          alert("添加失败");
        });
    },
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
      this.editInlineData = this.search(this.editInlineData, {
        role_name: this.searchConName3
      });
    },
    //点击取消执行的函数
    handleCancel3() {
      this.editInlineData = this.initTable1;
    }
  },

  mounted: function() {}
};
</script>




