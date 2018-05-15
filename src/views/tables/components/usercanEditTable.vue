<style lang="less">
@import "./editable-table.less";
body,
html {
  height: 100%;
}
#animate {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 0;
  overflow: hidden;
  background: #f8f8f9;
  height: 100%;
  transition: all 0.3s linear;
  z-index: 100;
}
#dele {
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
}
h1 {
  margin: 10px 0 0 10px;
}
.role {
  // overflow: hidden;
  margin: 20px 0;
}
.role-name {
  margin: 10px 0;
}
.small {
  width: 85%;
  margin: 10px auto;
}
.small > .div {
  height: 40px;
}
.small p {
  float: left;
}
.small input {
  float: right;
}
</style>

<template>
    <div>
        <Table  @on-row-click="handleClick" :ref="refs" :columns="columnsList" :data="thisTableData" border disabled-hover></Table>
        <div id='animate' ref="mybox">

          <h1>设置信息</h1>
          <span id='dele' @click="del">X</span>
          <div class='small' v-if="userDetail">
              <div class="div"><p>id</p><input type="text" disabled v-model="userDetail.userId"></div>
              <div class="div"><p>用户名</p><input type="text"  v-model="userDetail.username"></div>
               <div class="div"><p>密码</p><input type="text"  v-model="userDetail.passwd"></div>
              <div class="div"><p>电话号码</p><input type="text" v-model="userDetail.phone"></div>
              <div class="role">
                <div class="role-name" >用户角色:</div>
                <CheckboxGroup v-model="userRole">
                    <Checkbox :label="item.role_id" v-for="item in allRole">
                        <span>{{item.role_name}}</span>
                    </Checkbox>
                </CheckboxGroup>
              </div>
              
              <div style="text-align: center;margin-top: 30px;"><Button type="primary" @click="updateUser">修 改</Button></div>
          </div>
         
          
      </div>
    </div>
</template>

<script>
import axios from "axios";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//  var oDel = document.getElementById('dele');
//   oDel.onclick = function(){
//   vm.$refs.mybox.style.width = '0';
// }
const viewButton = (vm, h, currentRow, index) => {
  return h(
    "Button",
    {
      style: {
        margin: "0 5px"
      },
      props: {
        placement: "top",
        type: "primary"
      },
      on: {
        click: () => {
          // alert("123");
          vm.$refs.mybox.style.width = "40%";
        }
      }
    },
    "设置"
  );
};

const deleteButton = (vm, h, currentRow, index) => {
  return h(
    "Poptip",
    {
      props: {
        confirm: true,
        title: "您确定要删除这条数据吗?",
        transfer: true
      },
      on: {
        "on-ok": () => {
          var deleteRole = vm.thisTableData.splice(index, 1);
          vm.$emit("input", vm.handleBackdata(vm.thisTableData));
          vm.$emit("on-delete", vm.handleBackdata(vm.thisTableData), index);
          axios
            .post("http://www.wuyangdata.com:60001/toperator/deletetoperator", {
              userId: parseInt(deleteRole[0].userId)
            })
            .then(function(res) {
              console.log(res);
            })
            .catch(function() {});
        }
      }
    },
    [
      h(
        "Button",
        {
          style: {
            margin: "0 5px"
          },
          props: {
            type: "error",
            placement: "top"
          }
        },
        "删除"
      )
    ]
  );
};

export default {
  name: "canEditTable",
  props: {
    refs: String,
    columnsList: Array,
    value: Array,
    url: String,
    editIncell: {
      type: Boolean,
      default: false
    },
    hoverShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 全部角色
      allRole: [],
      //用户的角色
      userRole: [],
      // 用户详情
      userDetail: null,
      columns: [],
      thisTableData: [],
      edittingStore: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    updateUser() {
      console.log(this.userRole);
      axios({
        method: "post",
        url: "http://www.wuyangdata.com:60001/toperator/updatetoperator",
        data: {
          userId: this.userDetail.userId,
          roleId: this.userRole,
          username: this.userDetail.username,
          phone:this.userDetail.phone,
          passwd:this.userDetail.passwd
        


        }})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    },

    handleClick(user) {
      console.log(user);
      this.userDetail = user;
      this.userRole = [];
      if (user.rolelist.length > 0) {
        user.rolelist.forEach(item => {
          this.userRole.push(item.role_id);
        });
      }
      axios
        .get("http://39.107.253.90:60001/role/findrole")
        .then(res => {
          // console.log(res);
          this.allRole = res.data.tlist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    del() {
      this.$refs.mybox.style.width = "0";
    },
    init() {
      let vm = this;
      let editableCell = this.columnsList.filter(item => {
        if (item.editable) {
          if (item.editable === true) {
            return item;
          }
        }
      });
      let cloneData = JSON.parse(JSON.stringify(this.value));
      let res = [];
      res = cloneData.map((item, index) => {
        let isEditting = false;
        if (this.thisTableData[index]) {
          if (this.thisTableData[index].editting) {
            isEditting = true;
          } else {
            for (const cell in this.thisTableData[index].edittingCell) {
              if (this.thisTableData[index].edittingCell[cell] === true) {
                isEditting = true;
              }
            }
          }
        }
        if (isEditting) {
          return this.thisTableData[index];
        } else {
          this.$set(item, "editting", false);
          let edittingCell = {};
          editableCell.forEach(item => {
            edittingCell[item.key] = false;
          });
          this.$set(item, "edittingCell", edittingCell);
          return item;
        }
      });
      this.thisTableData = res;
      this.edittingStore = JSON.parse(JSON.stringify(this.thisTableData));
      this.columnsList.forEach(item => {
        if (item.editable) {
          item.render = (h, param) => {
            let currentRow = this.thisTableData[param.index];
            if (!currentRow.editting) {
              if (this.editIncell) {
                return h(
                  "Row",
                  {
                    props: {
                      type: "flex",
                      align: "middle",
                      justify: "center"
                    }
                  },
                  [
                    h(
                      "Col",
                      {
                        props: {
                          span: "22"
                        }
                      },
                      [
                        !currentRow.edittingCell[param.column.key]
                          ? h("span", currentRow[item.key])
                          : cellInput(this, h, param, item)
                      ]
                    ),
                    h(
                      "Col",
                      {
                        props: {
                          span: "2"
                        }
                      },
                      [
                        currentRow.edittingCell[param.column.key]
                          ? saveIncellEditBtn(this, h, param)
                          : incellEditBtn(this, h, param)
                      ]
                    )
                  ]
                );
              } else {
                return h("span", currentRow[item.key]);
              }
            } else {
              return h("Input", {
                props: {
                  type: "text",
                  value: currentRow[item.key]
                },
                on: {
                  "on-change"(event) {
                    let key = param.column.key;
                    vm.edittingStore[param.index][key] = event.target.value;
                  }
                }
              });
            }
          };
        }
        if (item.handle) {
          item.render = (h, param) => {
            let currentRowData = this.thisTableData[param.index];
            let children = [];
            item.handle.forEach(item => {
              if (item === "view") {
                children.push(viewButton(this, h, currentRowData, param.index));
              } else if (item === "delete") {
                children.push(
                  deleteButton(this, h, currentRowData, param.index)
                );
              }
            });
            return h("div", children);
          };
        }
      });
    },

    handleBackdata(data) {
      let clonedData = JSON.parse(JSON.stringify(data));
      clonedData.forEach(item => {
        delete item.editting;
        delete item.edittingCell;
        delete item.saving;
      });
      return clonedData;
    }
  },
  watch: {
    value(data) {
      this.init();
    }
  }
};
</script>
