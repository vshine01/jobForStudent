<template lang="html">
  <div id="registerBox">
    <div class="systemName">
      <h2>高校毕业生就业管理系统</h2>
    </div>
    <div class="registerInfo">
      <div class="registerTitle">
        <h3>用户注册</h3>
      </div>
      <div class="userName">
        <p>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号： <input type="text" placeholder="请输入用户名" v-model="userName"></p>
      </div>
      <div class="password">
        <p>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码： <input type="password" placeholder="请输入密码" v-model="password"></p>
      </div>
      <div class="password">
        <p>确认密码： <input type="password" placeholder="请再次输入密码" v-model="pwSure"></p>
      </div>
      <div class="registerButton">
        <p>
          <a :href="link" @click="registerSuccess()">确定</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'Register',
  data() {
    return {
      link: '',
      userName: '',
      password: '',
      pwSure: ''
    }
  },
  methods: {
    registerSuccess() {
      if (this.password == this.pwSure) {
        window.localStorage.setItem("userName", this.userName);
        window.localStorage.setItem("password", this.password);
        if (confirm("注册成功，请登录！")) {
          this.link = "#/";
        }
      } else {
        this.link = "javascript:;";
        alert("前后密码不一致，请重新输入密码！")
      }
    }
  }

}
</script>

<style lang="scss">
  #registerBox {
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
    .registerInfo {
      height: 350px;
      width: 500px;
      border: 2px solid #bbb;
      border-radius: 10px;
      margin: 140px 0 0 350px;
      box-shadow: 3px 3px 10px #666;
      .registerTitle {
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
      .registerButton {
        height: 60px;
        line-height: 60px;
        text-align: center;
        margin-top: 30px;
        a {
          display: inline-block;
          height: 60px;
          width: 300px;
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
