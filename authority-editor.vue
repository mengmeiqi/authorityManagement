<style lang="less">
    @import '../../../../styles/common.less';
    @import '../../access.less';
    @import '../../tables/components/table.less';
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
                    <input v-model="searchConName3" style="width:100%; height:30px;" placeholder="请输入权限名称..."  />
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
               权限管理
            </p>
           <Table  :columns="columns1"  :data="data3" refs="table2" span="1"   ></Table>
            <router-link to="authorityadd"><Button type="ghost" long style="margin:10px 0;" > +添加</Button></router-link>
            <router-view></router-view>
            <Page :total="100"></Page>
        </Card>
        </Col>
    </Row>


    

</template>




<script>
      
    import * as tableData from './authority-data.js';


    export default {
        name: 'editable-table',
        data () {
            return {
                columns1: tableData.editInlineColumns,
                data3: [],
                initTable3: []
            };
        },
        methods: {
            

            init () {
                this.data3 = this.initTable3 = tableData.editInlineData;
            },
            search (data, argumentObj) {
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
            handleSearch3 () {
                this.data3 = this.initTable3;
                this.data3 = this.search(this.data3, {name: this.searchConName3});
            },
            handleCancel3 () {
                this.data3 = this.initTable3;
            }





        },
         mounted () {
            this.init();
        }
    };
</script>



<style>

</style>
