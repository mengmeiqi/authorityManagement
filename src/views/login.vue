<style lang="less">
@import "./login.less";
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
export default {
  data() {
    return {
      form: {
        userName: "iview_admin",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        // 用户权限列表
        var access = [];

        if (valid) {
          // 请求登陆接口
          console.log(this.form.userName);
          var username = this.form.userName;
          var passwd = this.form.password;
          axios
            .get("http://www.wuyangdata.com:60001/toperator/loginMod", {
              params: {
                username,
                passwd
              }
            })
            .then(res => {
              console.log(res);

              if (res.data.message.trim() === "登陆成功") {
                this.$store.commit(
                  "setAvator",
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                );

                Cookies.set("user", this.form.userName);
                Cookies.set("password", this.form.password);
                // 保存角色
                Cookies.set("loginRole", this.form.userName);

                for (var i = 0; i < res.data.resource.length; i++) {
                  access.push(res.data.resource[i].res_id);
                }

                console.log(access);
                console.log(res);

                // 保存用户权限数组
                sessionStorage.setItem("access", JSON.stringify(access));

                // 跳转到主页
                this.$router.push({
                  name: "home_index"
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  }
};
</script>

<style>

</style>
