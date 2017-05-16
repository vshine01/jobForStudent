<template>
    <div id="headBox">
        <div id="head">
            <h1>高校毕业生就业管理系统</h1>
            <div class="welcome">
              你好，<a href="#/PersonalInfo">{{userName}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderBar',
        data() {
          return {
            userName: ''
          }
        },
        methods: {
          userLoad() {
            if (!this.userName) {
              this.userName = window.localStorage.getItem("user");
              // console.log(this.userName);
            }
          }
        },
        mounted() {
          this.userLoad();
        }
    }
</script>

<style lang="scss">
   #headBox {
       width: 100%;
       height: auto;
       background: #167cc6;
   }
   #head {
       width: 1250px;
       height: 65px;
       margin: 0 auto;
   }
   h1 {
       height: 65px;
       color: #fff;
       font-size: 30px;
       padding-left: 60px;
       line-height: 65px;
       float: left;
   }
   .welcome {
     float: right;
     margin-right: 5%;
     height: 65px;
     line-height: 65px;
     color: #fff;
     a {
       color: #660000;
     }
   }
</style>
