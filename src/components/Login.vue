<template lang="html">
  <div id="loginBox">
    <div class="systemName">
      <h2>高校毕业生就业管理系统</h2>
    </div>
    <div class="loginInfo">
      <div class="loginTitle">
        <h3>用户登录</h3>
      </div>
      <div class="userName">
        <p>账号： <input type="text" placeholder="请输入用户名" v-model="userName"></p>
      </div>
      <div class="password">
        <p>密码： <input type="password" placeholder="请输入密码" v-model="password"></p>
      </div>
      <div class="loginButton">
        <p>
          <a :href="routerLink" @click="login()">登录</a>
          <a href="#/Register">注册</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Login',
  data() {
    return {
      loginData: [],
      routerLink: '',
      userName: '',
      password: ''
    }
  },
  methods: {
    // 获取用户
    loginDataLoad() {
      let _this = this;
      $.ajax({
        url: '../mock/login.json',
        success: function(data) {
          _this.loginData = data;
        }
      });
    },
    // 用户登录信息验证
    login() {
      this.loginData.map(item => {
        if ((this.userName == item.userName && this.password == item.password) || (this.userName == localStorage.getItem("userName") && this.password == localStorage.getItem("password"))) {
          this.routerLink = '#/Info';
        }
      });
      if (this.routerLink != "#/Info") {
        this.routerLink = "javascript:;";
      }
      if (this.routerLink == 'javascript:;') {
        alert("用户名或者密码错误，请重新输入！");
      }
    }
  },
  mounted() {
    this.loginDataLoad();
  }
}
</script>

<style lang="scss">
  #loginBox {
    height: 100%;
    width: 100%;
    background: url(../assets/bg.jpg);
    background-size: cover;
    overflow: hidden;
    .systemName {
      height: 60px;
      width: 100%;
      margin: 100px 0 0 50px;
      h2 {
        color: #ddd;
        font-size: 80px;
        text-shadow: 2px 2px 10px #ccc;
      }
    }
    .loginInfo {
      height: 300px;
      width: 500px;
      border: 2px solid #bbb;
      border-radius: 10px;
      margin: 170px 0 0 350px;
      box-shadow: 3px 3px 10px #666;
      .loginTitle {
        margin-top: 30px;
        h3 {
          text-align: center;
          color: #666;
          font-size: 30px;
        }
      }
      .userName, .password {
        margin-top: 30px;
        p {
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 26px;
          color: #666;
          input {
            width: 300px;
            height: 30px;
            font-size: 20px;
            border-radius: 10px;
            outline: none;
            border: 2px solid #666;
            padding-left: 10px;
          }
        }
      }
      .loginButton {
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-top: 30px;
        a {
          display: inline-block;
          height: 60px;
          width: 100px;
          background: #abcdef;
          color: #666;
          font-size: 26px;
          border-radius: 10px;
          margin-left: 20px;
          margin-right: 20px;
        }
      }
    }
  }
</style>
