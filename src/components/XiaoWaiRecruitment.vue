<template>
    <div id="xiaowai">
        <div class="xiaowaiName">
            <h4>校外招聘会</h4>
            <input type="search" placeholder="搜索..." v-model="text" @keyup.enter="searchXiaowai()">
        </div>
        <div class="xiaowaiTable">
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;" align="left">标题</th>
                    <th style="width:40%;" align="left">地点</th>
                    <th style="width:20%;" align="left">时间</th>
                </tr>
                <tr v-for="item in xiaowaiData">
                    <td><a href="#/KeyJobDetails">{{item.Title}}</a></td>
                    <td>{{item.MeetSite}}</td>
                    <td>{{item.MeetTime}}</td>
                </tr>
            </table>
            <div v-if="emptyInfo" class="empty">没有找到对应的数据</div>
        </div>
        <div class="addMoreXiaowai" @click="loadMoreXiaowai()" v-if="flag">加载更多数据...</div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'XiaoWaiRecruitment',
        data() {
            return {
                xiaowaiData: [],
                xiaowaiRushTime: 0,
                xiaowaiText: '',
                text: '',
                flag: true,
                emptyInfo: false
            }
        },
        methods: {
            // 获取校外招聘数据
            xiaowaiDataLoad() {
                let _this = this;
                $.ajax({
                    url: '../mock/xiaowai.json',
                    success: function(msg) {
                        _this.xiaowaiData = msg;
                        _this.xiaowaiRushTime = new Date().getTime();
                    },
                    error: function() {
                        console.log('error');
                    }
                });
            },
            // 加载更多数据
            loadMoreXiaowai() {
                this.xiaowaiData.map(item => {
                    this.xiaowaiData.push(item);
                });
            },
            // 搜索企业数据
            searchXiaowai() {
                this.xiaowaiDataLoad();
            }
        },
        mounted() {
            this.xiaowaiDataLoad();
        },
        watch: {
            // 每次请求数据时，在数据请求成功是刷新请求时间，实行实时更新
            xiaowaiRushTime() {
                let previousXiaowaiData = this.xiaowaiData;
                let newXiaowaiData = [];
                previousXiaowaiData.map(item =>{
                    if (item.Title.indexOf(this.text) != (-1)) {
                        newXiaowaiData.push(item);
                    }
                });
                // 设置加载更多数据按钮的显示与隐藏
                if (this.text == "") {
                    this.flag = true;
                } else {
                    this.flag = false;
                }
                if (newXiaowaiData.length) {
                    this.xiaowaiData = newXiaowaiData;
                    this.emptyInfo = false;
                } else {
                    this.xiaowaiData = [];
                    this.emptyInfo = true;
                }
            }
        }
    }
</script>

<style lang="scss">
    .xiaowaiName {
        height: 50px;
    }
    .xiaowaiName h4 {
        height: auto;
        width:40%;
        margin-left: 10px;
        padding-top:10px;
        float: left;
    }
    .xiaowaiName input {
        width:170px;
        height: 30px;
        float: right;
        margin-top:10px;
        padding-left: 10px;
        border-radius: 5px;
        outline: none;
    }
    #xiaowai table {
        a:hover {
          text-decoration: underline;
        }
        width: 100%;
        height: auto;
        border: 1px solid #ccc;
        border-radius:5px;
        overflow: hidden;
        font-size: 14px;
    }
    #xiaowai table tr {
        height: 38px;
    }
    #xiaowai table th, #xiaowai table td {
        padding-left: 10px;
    }
    .addMoreXiaowai {
        height: 40px;
        background: blue;
        width:100%;
        margin-top: 10px;
        color: #fff;
        font-size:20px;
        font-weight:900;
        text-align:center;
        line-height:40px;
        cursor:pointer;
    }
</style>
