<style lang="less">
    @import "../../../../styles/common.less";
    @import "../../access.less";
    @import "../../tables/components/table.less";

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
                        <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入部门姓名..."/>
                        </Col>
                        <Col span="4">
                        <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary"
                                                                                     icon="search">搜索</Button></span>
                        <Button @click="handleCancel3" type="ghost">取消</Button>
                        </Col>
                    </Row>

                </Card>
                </Col>

                <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        部门管理
                    </p>
                    <can-edit-table refs="table2" v-model="editInlineData"
                                    :columns-list="editInlineColumns"></can-edit-table>
                    <Button v-on:click="isshow=false" type="ghost" long style="margin:10px 0;"> +添加</Button>
                    <router-view></router-view>
                    <Page :total="100" :page-size="5"></Page>
                </Card>
                </Col>
            </Row>

        </div>
        <div v-if="!isshow">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="user1">
                <h3 class="h1">添加部门</h3>
                <FormItem label="部门名称" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入部门名称"></Input>
                </FormItem>
                <FormItem label="部门名称" prop="dapa_id">
                    <Select v-model="parenId" style="width:80%;padding-bottom: 20px">
                        <Option v-for="item in this.list" :value="item.parenId"
                                :key="item.deptName">{{ item.deptName }}
                        </Option>
                    </Select>
                </FormItem>


                <FormItem>
                    <Button type="primary" @click="submit('formValidate')">提交</Button>
                    <Button v-on:click="isshow=true" type="ghost" @click="handleReset('formValidate')"
                            style="margin-left: 8px">取消
                    </Button>
                </FormItem>
            </Form>
        </div>
    </div>


</template>


<script>
    import canEditTable from '../../tables/components/departmentcanEditTable.vue';
    import axios from 'axios';

    export default {
        name: 'editable-table',
        components: {
            canEditTable
        },
        data () {
            return {
                formValidate: {
                    name: '',
                    parenId: '',
                    dapa_id: ''

                },
                ruleValidate: {
                    name: [
                        {required: true, message: '这里不能为空', trigger: 'blur'}
                    ],
                    deptId: [
                        {required: true, message: '这里不能为空', trigger: 'blur'}
                    ]
                },
                isshow: true,
                initTable1: [],
                editInlineColumns: [
                    {
                        title: '部门id',
                        align: 'center',
                        key: 'deptId',

                    },
                    {
                        title: '部门名称',
                        align: 'center',
                        key: 'deptName',
                        editable: true

                    },
                    {
                        title: '父级id',
                        align: 'center',
                        key: 'parenId',
                    },
                    {
                        title: '等级',
                        align: 'center',
                        key: 'level',
                    },
                    {
                        title: '操作',
                        align: 'center',
                        width: 285,
                        key: 'handle',
                        handle: ['view', 'edit', 'delete']
                    }
                ],
                editInlineData: []
            };
        },
        methods: {
            submit: function () {
                console.log(this.formValidate.name);

                // 发送 POST 请求
                axios.post('http://39.107.253.90:60001/tdepartment/addtdepartment',
                    {
                        deptName: this.formValidate.name,
                        parenId: this.parenId
                    })
                    .then(function (res) {

                        alert('添加成功');

                    })
                    .catch(function () {
                        alert('添加失败');
                    });
            },
            //提交
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
        mounted: function () {
            //利用axios接口调用获取数据
            axios.get('http://www.wuyangdata.com:60001/tdepartment/querypage')
                .then(
                    response => {
                        this.editInlineData = response.data.tdlist;
                        this.initTable1 = response.data.tdlist;
                    },
                    response => {
                        console.log('error');
                    }
                );
            axios.get('http://39.107.253.90:60001/tdepartment/queryall')
                .then(
                    response => {
//                        console.log(response.data.tdlist);
                        this.list = response.data.tdlist;
                    },
                    response => {
                        console.log('error');
                    }
                );

        }
    };
</script>


<style>

</style>