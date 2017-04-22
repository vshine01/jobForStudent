<template>
    <div id="keyJob">
        <div class="keyJobName">
            <h4>重点推荐招聘会</h4>
            <input type="search" placeholder="搜索..." v-model="text" v-on:keyup.enter="search()">
        </div>
        <div class="keyJobNameTable">
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th class="companyName">企业名称</th>
                    <th class="publishTime">发布时间</th>
                </tr>
                <tr v-for="item in keyJobData">
                    <td><a href="#/KeyJobDetails">{{item.CompanyTitle}}</a></td>
                    <td style="textAlign:center;">{{item.Time}}</td>
                </tr>
            </table>
            <div v-if="emptyInfo" class="empty">没有找到对应的数据</div>
        </div>
        <div class="add" @click="add()" v-if="flag">加载更多数据...</div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'KeyJobFairs',
    data() {
        return {
            keyJobData: [],
            text: '',
            rushTime: 0,
            flag: true,
            emptyInfo: false
        }
    },
    methods: {
        // 获取校外招聘数据
        keyJobDataLoad() {
            let _this = this;
            $.ajax({
                url: '../mock/keyJob.json',
                success: function(msg) {
                    _this.keyJobData = msg;
                    _this.rushTime = new Date().getTime();
                },
                error: function() {
                    console.log('error');
                }
            });
        },
        // 搜索企业数据
        search() {
            this.keyJobDataLoad();
        },
        // 加载更多数据
        add() {
            this.keyJobData.map(item => {
                this.keyJobData.push(item);
            });
        }
    },
    mounted() {
        this.keyJobDataLoad();
    },
    watch: {
        // 每次请求数据时，在数据请求成功是刷新请求时间，实行实时更新
        rushTime() {
            let previousKeyJobData = this.keyJobData;
            let newKeyJobData = [];
            previousKeyJobData.map(item =>{
                if (item.CompanyTitle.indexOf(this.text) != (-1)) {
                    newKeyJobData.push(item);
                }
            });
            // 设置加载更多数据按钮的显示与隐藏
            if (this.text == "") {
                this.flag = true;
            } else {
                this.flag = false;
            }
            if (newKeyJobData.length) {
                this.keyJobData = newKeyJobData;
                this.emptyInfo = false;
            } else {
                this.keyJobData = [];
                this.emptyInfo = true;
            }
        }
    }
}
</script>

<style>
    .keyJobName {
        height: 50px;
    }
    .keyJobName h4 {
        height: auto;
        width:40%;
        margin-left: 10px;
        padding-top:10px;
        float: left;
    }
    .keyJobName input {
        width:170px;
        height: 30px;
        float: right;
        margin-top:10px;
        padding-left: 10px;
        border-radius: 5px;
        outline: none;
    }
    .keyJobNameTable {
        width: 100%;
        height: auto;
    }
    .keyJobNameTable table {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        overflow:hidden;
        font-size: 14px;
    }
    .keyJobNameTable table tr{
        height: 38px;
    }
    .keyJobNameTable table tr td a:hover {
      text-decoration: underline;
    }
    .keyJobNameTable table .companyName {
        text-align: left;
        width: 80%;
        padding-left: 10px;
    }
    .keyJobNameTable table .publishTime {
        text-align: center;
    }
    .add {
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
    .empty {
        font-size:20px;
        text-align:center;
        height:40px;
        line-height: 40px;
        border: 2px solid #ccc;
        border-top: none;
    }
</style>
