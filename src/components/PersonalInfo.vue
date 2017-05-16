<template>
  <div id="personalInfoBox">
    <div id="personalHeader">
      <header-bar></header-bar>
    </div>
    <div id="personalBody">
      <div class="content">
        <div class="info">
          <h2 style="float:left;">个人资料</h2>
          <a href="javascript:;" style="float:right;" @click="goBack()">返回上一页</a>
        </div>
        <div class="information">
          <div class="jiben">
            <h3>基本信息</h3>
          </div>
          <p>用户名：<input type="text" :value="personalInfoData.userName" disabled="true"/></p>
          <p>性&nbsp;&nbsp;&nbsp;&nbsp;别：男：<input type="radio" :checked="man" disabled="true" name="sex"/>&nbsp;&nbsp;&nbsp;&nbsp;女：<input type="radio" disabled="true" name="sex" :checked="!man"/></p>
          <p>年&nbsp;&nbsp;&nbsp;&nbsp;龄：<input type="text" :value="personalInfoData.age" disabled="true"/></p>
          <p>电&nbsp;&nbsp;&nbsp;&nbsp;话：<input type="text" :value="personalInfoData.tel" disabled="true"/></p>
          <p>Q &nbsp;&nbsp;&nbsp;&nbsp;Q：<input type="text" :value="personalInfoData.qq" disabled="true"/></p>
          <p>密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" :value="personalInfoData.pw" disabled="true"/> <input type="button" class="changePw" value="修改密码" @click="pwModuleShow()"/></p>
          <div class="log">
            <p>个人日志</p>
            <div class="logDetails">
              <table border="1" cellpaddig="0" cellspacing="0">
                <tr>
                  <th>序号</th>
                  <th>日志内容</th>
                  <th>发布时间</th>
                  <th>操作</th>
                </tr>
                <tr v-for="item in personalInfoData.log">
                  <td>{{item.id}}</td>
                  <td>{{item.fairs}}</td>
                  <td>{{item.time}}</td>
                  <td><a href="javascript:;" @click="delLog(item.id)">删除</a></td>
                </tr>
              </table>
            </div>
            <div class="addLog">
              <button type="button" @click="addDailogShow()">添加日志</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="personalFotter">
      <footer-bar></footer-bar>
    </div>
    <div class="addDailog" v-if="addDailogFlag">
      <h3>添加日志<a href="javascript:;" style="float:right;fontWeight:normal;fontSize:16px;" @click="addDailogFlag=false">取消</a></h3>
      <div class="inLoad">
        <input type="text" placeholder="请输入你要添加的内容..." v-model="logFair">
      </div>
      <div class="submit">
        <input type="button" value="确定" @click="addDailogHidden()">
      </div>
    </div>
    <div class="changePwModule" v-if="pwDailogFlag">
      <h3>修改密码 <a href="javascript:;" style="float:right;fontWeight:normal;fontSize:16px;" @click="pwDailogFlag=false">取消</a></h3>
      <div class="oldPw">
        <input type="password" placeholder="请输入旧密码..." v-model="inOldPw">
      </div>
      <div class="newPw">
        <input type="password" placeholder="请输入新密码..." v-model="inNewPw">
      </div>
      <div class="submit">
        <input type="button" value="确定" @click="pwModuleHidden()">
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../layout/Header.vue';
import FooterBar from '../layout/Fotter.vue';
import $ from 'jquery';
export default {
  name: 'PersonalInfo',
  components: {
    HeaderBar,
    FooterBar
  },
  data() {
    return {
      personalInfoData: [],
      man: true,
      addDailogFlag: false, // 新增日志模块的显示隐藏
      logFair: '', //输入日志进行数据绑定
      inOldPw: '', // 输入旧密码
      inNewPw: '', // 输入新密码
      pwDailogFlag: false // 更改密码模块的显示隐藏
    }
  },
  methods: {
    personalInfoLoad() {
      let _this = this;
      $.ajax({
        url: '../mock/personalInfo.json',
        success: function(data) {
          data.map(item => {
            if (item.userName == window.localStorage.getItem("user")) {
              _this.personalInfoData = item;
            }
            if (_this.personalInfoData.sex == '男') {
              _this.man = true;
            } else {
              _this.man = false;
            }
          });
        }
      });
    },
    // 显示添加窗口
    addDailogShow() {
      this.addDailogFlag = true;
    },
    // 隐藏添加日志窗口
    addDailogHidden() {
      this.addDailogFlag = false;
      let year = new Date().getFullYear();
      let month = new Date().getMonth() + 1;
      let day = new Date().getDate();
      let id = this.personalInfoData.log.length + 1;
      // console.log(this.personalInfoData.log.length);
      if (this.logFair) {
        this.personalInfoData.log.push({id: id,fairs: this.logFair,time: year + "-" + month + "-" + day});
      } else {
        alert("输入不能为空");
        this.addDailogFlag = true;
      }
      this.logFair = '';
    },
    // 返回上一页
    goBack() {
      history.go(-1);
    },
    // 删除日志记录
    delLog(logId){
      let newData = [];
      let logNum = 1;
      if (confirm("是否删除这条日志记录")) {
        this.personalInfoData.log.map(item => {
          if (item.id != logId) {
            item.id = logNum ++;
            newData.push(item);
          }
        });
        this.personalInfoData.log = newData;
      }
    },
    // 更改密码模块显示
    pwModuleShow() {
      this.pwDailogFlag = true;
    },
    // 更改密码模块隐藏
    pwModuleHidden() {
      if (this.inOldPw == window.localStorage.getItem("password")) {
        this.pwDailogFlag = false;
        window.localStorage.setItem("password", this.inNewPw);
        if (confirm("修改密码成功，请重新登录")) {
          location.href= "http://localhost:8080/#";
        }
      } else {
        alert("旧密码输入错误，请重新输入！");
        this.inOldPw = '';
        this.inNewPw = '';
      }
    }
  },
  mounted() {
    this.personalInfoLoad();
  }
}
</script>

<style lang="scss">
#personalBody {
  min-height: 550px;
  width: 100%;
  margin-top: 20px;
  .content {
    padding: 10px 20px;
    width: 1100px;
    margin: 0 auto;
    border: 2px solid #ccc;
    border-radius: 10px;
    min-height: 530px;
    .info {
      height: 65px;
      line-height: 65px;
    }
    .information {
      border: 2px solid #ccc;
      padding: 10px;
      border-radius: 5px;
      .changePw {
        height:20px;
        border-radius: 5px;
        border:0;
        width: 100px;
        cursor: pointer;
      }
      .changePw:hover {
        background: #abcdef;
      }
      p {
        padding-left: 10px;
        margin-top: 20px;
        input {
          border-radius: 5px;
          outline: none;
          font-size: 16px;
        }
      }
      .log {
        p {
          padding: 10px;
          margin-top:0;
        }
        border-radius: 5px;
        border: 2px solid #ccc;
        margin-top: 20px;
        padding: 10px;
        table {
          width: 100%;
          border-radius: 5px;
          font-size: 16px;
          overflow: hidden;
          tr {
            height: 30px;
          },
          td {
            text-align: center;
            a:hover {
              color: #ff0000;
            }
          }
        }
        .addLog {
          margin-top: 20px;
          button {
            width: 100px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            background: #ccc;
            border: 0;
            outline: none;
            cursor: pointer;
            border-radius: 10px;
            margin-left: 90%;
          }
          button:hover {
            background: #abcdef;
          }
        }
      }
    }
  }
}
.addDailog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 600px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #ccc;
  padding: 20px;
  h3 {
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
  }
  .inLoad {
    width: 100%;
    height: 100px;
    margin-top: 20px;
    line-height: 100px;
    text-align: center;
    border-bottom: 1px solid #fff;
    input {
      outline: none;
      height: 30px;
      width: 40%;
      padding-left: 20px;
      font-size: 16px;
      border-radius: 10px;
    }
  }
  .submit {
    margin-top: 20px;
    input {
      height: 30px;
      width: 100px;
      background: #ccc;
      outline: none;
      cursor: pointer;
      margin-left: 80%;
      border-radius: 10px;
    }
    input:hover {
      background: #fff;
    }
  }
}
.changePwModule {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 600px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #ccc;
  padding: 20px;
  h3 {
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
  }
  .oldPw, .newPw {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
    text-align: center;
    input {
      outline: none;
      height: 30px;
      width: 40%;
      padding-left: 20px;
      font-size: 16px;
      border-radius: 10px;
    }
  }
  .submit {
    margin-top: 20px;
    input {
      height: 30px;
      width: 100px;
      background: #fff;
      outline: none;
      cursor: pointer;
      margin-left: 80%;
      border-radius: 10px;
    }
    input:hover {
      background: #ccc;
    }
  }
}
</style>
