<style lang="less">
@import "../../../../styles/common.less";
@import "../../access.less";
@import "../../tables/components/table.less";
#btn {
  left: 1020px;
  top: 30px;
  position: absolute;
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
                    <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入合作社名称..."  />
                </Col>
                <Col span="4">
                 <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                <Button @click="handleCancel3" type="ghost" >取消</Button>
                </Col>
            </Row>
 
        </Card>
        </Col>
         
        <Col span="24">
        <p slot="title">
                <Icon type="android-remove"></Icon>
                合作社管理
            </p>
          <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
          <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>

            <Page :total="100"></Page>
        </Card>
        </Col>
    </Row>
    </div>
    <div v-if="!isshow">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
            <h3 class="h1">添加合作社</h3>
            <FormItem label="合作社ID" prop="id">
            <Input v-model="formValidate.id" placeholder="请输入合作社ID"></Input>
            </FormItem>
            <FormItem label="名称" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入名称"></Input>
            </FormItem>
            <FormItem label="地址" prop="address">
            <Cascader :data="data" trigger="hover"></Cascader>
            <!-- <Input v-model="formValidate.address" placeholder="请输入地址"></Input> -->
            </FormItem>
            <FormItem label="行政地区" prop="administrative">
                <Cascader :data="data" trigger="hover"></Cascader>
            <!-- <Input v-model="formValidate.administrative" placeholder="请输入行政地区"></Input> -->
            </FormItem>
            <FormItem label="是否有仓库" prop="storehouse">
            <Input v-model="formValidate.storehouse" placeholder="请输入是否有仓库"></Input>
            </FormItem>
            <FormItem label="是否有扩展量" prop="extend">
            <Input v-model="formValidate.extend" placeholder="请输入是否有扩展量"></Input>
            </FormItem>
            <FormItem label="区域" prop="area">
                <Cascader :data="data" trigger="hover"></Cascader>
            <!-- <Input v-model="formValidate.area" placeholder="请输入区域"></Input> -->
            </FormItem>
            <FormItem label="联系人" prop="contact">
            <Input v-model="formValidate.contact" placeholder="请输入联系人"></Input>
            </FormItem>
            <FormItem label="联系人电话" prop="contactphonenumber">
            <Input v-model="formValidate.contactphonenumber" placeholder="请输入联系人电话"></Input>
            </FormItem>
            <FormItem label="合作社类型" prop="cooperativetype">
            <Input v-model="formValidate.cooperativetype" placeholder="请输入合作社类型"></Input>
            </FormItem>
            <FormItem label="备注" prop="remarks">
            <Input v-model="formValidate.remarks" placeholder="请输入备注"></Input>
            </FormItem>
            <FormItem label="创建时间" prop="createtime">
            <Input v-model="formValidate.createtime" placeholder="请输入创建时间"></Input>
            </FormItem>
            <FormItem label="积温带" prop="accumulativetemperaturezone">
            <Input v-model="formValidate.accumulativetemperaturezone" placeholder="请输入积温带"></Input>
            </FormItem>
            <FormItem label="是否有烘干塔" prop="dryingtower">
            <Input v-model="formValidate.dryingtower" placeholder="请输入是否有烘干塔"></Input>
            </FormItem>
            <FormItem label="日烘干能力" prop="dailydryingcapacity">
            <Input v-model="formValidate.dailydryingcapacity" placeholder="请输入日烘干能力"></Input>
            </FormItem>
            <FormItem label="粮食品种" prop="grainvarieties">
            <Input v-model="formValidate.grainvarieties" placeholder="请输入粮食品种"></Input>
            </FormItem>
            <FormItem label="法定代表人姓名" prop="legalrepresentative">
            <Input v-model="formValidate.legalrepresentative" placeholder="请输入法定代表人姓名"></Input>
            </FormItem>
            <FormItem label="法定代表人性别" prop="legalpersonsex">
            <Input v-model="formValidate.legalpersonsex" placeholder="请输入法定代表人性别"></Input>
            </FormItem>
            <FormItem label="法定代表人生日" prop="legalpersonbirthday">
            <Input v-model="formValidate.legalpersonbirthday" placeholder="请输入法定代表人生日"></Input>
            </FormItem>
            <FormItem label="法人电话" prop="legalpersonnumber">
            <Input v-model="formValidate.legalpersonnumber" placeholder="法人电话"></Input>
            </FormItem>
            <FormItem label="法人证件类型" prop="idtype">
            <Input v-model="formValidate.idtype" placeholder="法人证件类型"></Input>
            </FormItem>
            <FormItem label="法人证件号码" prop="idnumber">
            <Input v-model="formValidate.idnumber" placeholder="请输入法人证件号码"></Input>
            </FormItem>
            <FormItem label="法人现居住地" prop="residence">
                <Cascader :data="data" trigger="hover"></Cascader>
            <!-- <Input v-model="formValidate.residence" placeholder="请输入法人现居住地"></Input> -->
            </FormItem>
            <FormItem label="法人身份证正面" prop="idpositive">
            <Input v-model="formValidate.idpositive" placeholder="请输入法人身份证正面"></Input>
            </FormItem>
            <FormItem label="法人身份证反面" prop="idopposite">
            <Input v-model="formValidate.idopposite" placeholder="请输入法人身份证反面"></Input>
            </FormItem>
            <FormItem label="合作社营业执照" prop="businesslicense">
            <Input v-model="formValidate.businesslicense" placeholder="请输入合作社营业执照"></Input>
            </FormItem>
            <FormItem label="传真" prop="fax">
            <Input v-model="formValidate.fax" placeholder="请输入传真"></Input>
            </FormItem>
        

            <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
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
      isshow: true,
      initTable1: [],
      editInlineColumns: [
        {
          title: "合作社ID",
          align: "center",
          type: "index"
        },
        {
          title: "名称",
          align: "center",
          key: "name",
          editable: true
        },
        {
          title: "地址",
          align: "center",
          key: "address"
        },
        {
          title: "是否有仓库",
          align: "center",
          key: "storehouse",
          editable: true
        },
        {
          title: "有无扩展量",
          align: "center",
          key: "extend",
          editable: true
        },
        {
          title: "联系人",
          align: "center",
          key: "contaxt"
        },
        {
          title: "联系人电话",
          align: "center",
          key: "pnumber"
        },
        {
          title: "创建时间",
          align: "center",
          key: "createtime"
        },
        {
          title: "法定代表人姓名",
          align: "center",
          key: "headername"
        }
      ],
      editInlineData: []
    };
  },
  methods: {},
  mounted() {}
};
</script>



