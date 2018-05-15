<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";
#btn {
  left: 1020px;
  top: 30px;
  position: absolute;
}
.user1 {
  background: white;
  padding: 20px;
  padding-left: 300px;
  padding-right: 300px;
  height: 100%;
  text-align: center;
}
.h1 {
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
                        <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入品种名称..."  />
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
                    种植种类管理
                </p>
                <!-- <div id="idiv" >
                    <Button id="btn" type="primary" >新建</Button>
                </div>  -->
                <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
            <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>
                <Page :total="100"></Page>
            </Card>
            </Col>
        </Row>
    </div>
    <div v-if="!isshow">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
            <h3 class="h1">添加种植品种</h3>
            <FormItem label="id" prop="id">
            <Input v-model="formValidate.username" placeholder="请输入id"></Input>
            </FormItem>
            <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
            </FormItem>
            <FormItem label="分类" prop="variety">
            <Input v-model="formValidate.variety" placeholder="请输分类"></Input>
            </FormItem>
            
            <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button  v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
    </div>
</div>
   
  
</template>




<script>
import canEditTable from "../../tables/components/usercanEditTable.vue";
import axios from "axios";

export default {
  name: "editable-table",
  components: {
    canEditTable
  },
  data() {
    return {
      formValidate: {
        id: "",
        name: "",
        variety: ""
      },
      ruleValidate: {
        id: [{ required: true, message: "这里不能为空", trigger: "blur" }],
        name: [{ required: true, message: "这里不能为空", trigger: "blur" }]
      },
      isshow: true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "名称",
          align: "center",
          key: "name"
        },
        {
          title: "分类",
          align: "center",
          key: "classification"
        }
      ],
      editInlineData: []
    };
  },
  methods: {
    //搜索
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
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  },
  mounted() {}
};
</script>



