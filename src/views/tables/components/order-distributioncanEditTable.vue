<style lang="less">
@import "./editable-table.less";
</style>

<template>
    <div>
        <Table :ref="refs" :columns="columnsList" :data="thisTableData" border disabled-hover></Table>
    </div>
</template>

<script>
import axios from "axios";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



const editButton = (vm, h, currentRow, index) => {
  return h(
    "Button",
    {
      props: {
        type: currentRow.editting ? "success" : "primary",
        loading: currentRow.saving
      },
      style: {
        margin: "0 5px"
      },
      on: {
        click: () => {
          if (!currentRow.editting) {
            if (currentRow.edittingCell) {
              for (let name in currentRow.edittingCell) {
                currentRow.edittingCell[name] = false;
                vm.edittingStore[index].edittingCell[name] = false;
              }
            }
            vm.edittingStore[index].editting = true;
            vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
          } else {
            vm.edittingStore[index].saving = true;
            vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
            let edittingRow = vm.edittingStore[index];
            edittingRow.editting = false;
            edittingRow.saving = false;
            vm.thisTableData = JSON.parse(JSON.stringify(vm.edittingStore));
            vm.$emit("input", vm.handleBackdata(vm.thisTableData));
            vm.$emit("on-change", vm.handleBackdata(vm.thisTableData), index);
            console.log(vm.thisTableData[index]);

            // const url = "http://www.wuyangdata.com:60001/role/updaterole";
            // var params = new URLSearchParams();
            // params.append("rold_id", parseInt(vm.thisTableData[index].role_id));
            // params.append("password", vm.thisTableData[index].role_name);
            // params.append("description", vm.thisTableData[index].description);
            // params.append("ids", "");
            // this.$axios({
            //   method: "post",
            //   url: url,
            //   data: params
            // }).then(res => {});
            axios.post("http://www.wuyangdata.com:60001/role/updaterole",
              {
                role_id: parseInt(vm.thisTableData[index].role_id),
                role_name: vm.thisTableData[index].role_name,
                description: vm.thisTableData[index].description,
                ids: "555"
              }

              )
              .then(function(res) {
                  alert("修改成功")
                  function myrefresh()
                        {
                            window.location.reload();
                        }
                myrefresh();
              })
              .catch(function() {
                alert("修改失败");
              });

            // $.get(
            //   "http://www.wuyangdata.com:60001/role/updaterole",
            //   {
            //     role_id: parseInt(vm.thisTableData[index].role_id),
            //     role_name: vm.thisTableData[index].role_name,
            //     description: vm.thisTableData[index].description,
            //     ids: ""
            //   }
            //   ,
            //   "text"
            // ); //ajax
          }
        }
      }
    },
    currentRow.editting ? "保存" : "编辑"
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
          vm.thisTableData.splice(index, 1);
          vm.$emit("input", vm.handleBackdata(vm.thisTableData));
          vm.$emit("on-delete", vm.handleBackdata(vm.thisTableData), index);
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
      columns: [],
      thisTableData: [],
      edittingStore: []
    };
  },
  created() {
    this.init();
  },
  methods: {
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
              if (item === "edit") {
                children.push(editButton(this, h, currentRowData, param.index));
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