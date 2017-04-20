<template>
    <div id="mutualSelectBox">
        <div class="navName">
            <h4>双选会招聘企业</h4>
            <input type="search" placeholder="搜索..." v-model="mutualText" @keyup.enter="mutualSearch()">
        </div>
        <div class="mutualCompany">
            <div class="mutualCompanyInfo" v-for="item in mutualData">
                <div class="companyImg"><img src="../assets/m.jpg" alt="图片加载失败"></div>
                <div class="info">
                    <p class="mutualName"><a href="javascript:;">{{item.CompanyTitle}}</a></p>
                    <p class="mutualLink">
                        <span>单位邮箱：{{item.CompanyEmail}}</span>
                        <span>联系人：{{item.LinkMan}}</span>
                        <span>联系电话：{{item.LinkPhone}}</span>
                    </p>
                    <p class="mutualTime">招聘时间：{{item.MeetTime}}</p>
                    <p class="mutualSite">招聘地点：{{item.MeetAddress}}</p>
                </div>
                <div class="linkButton">
                    <a href="#">查看</a>
                </div>
            </div>
            <div v-if="emptyMutual" class="empty">没有找到对应的数据</div>
            <div class="add" @click="addMutual()" v-if="mutualFlag">查看更多</div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        name: 'MutualSelect',
        data() {
            return {
                mutualData: [],
                mutualTime: 0,
                mutualText: '',
                mutualFlag: true,
                emptyMutual: false
            }
        },
        methods: {
            mutualDataLoad() {
                let _this = this;
                $.ajax({
                    url: '../mock/mutal.json',
                    success: function(data) {
                        _this.mutualData = data;
                        _this.mutualTime = new Date().getTime();
                    }
                });
            },
            mutualSearch() {
                this.mutualDataLoad();
            },
            addMutual() {
                this.mutualData.map(item => {
                    this.mutualData.push(item);
                });
            }
        },
        mounted() {
            this.mutualDataLoad();
        },
        watch: {
            mutualTime() {
                let previousMutualData = this.mutualData;
                let newMutualData = [];
                previousMutualData.map(item =>{
                    if (item.CompanyTitle.indexOf(this.mutualText) != (-1)) {
                        newMutualData.push(item);
                    }
                });
                // 设置加载更多数据按钮的显示与隐藏
                if (this.mutualText == "") {
                    this.mutualFlag = true;
                } else {
                    this.mutualFlag = false;
                }
                if (newMutualData.length) {
                    this.mutualData = newMutualData;
                    this.emptyMutual = false;
                } else {
                    this.mutualData = [];
                    this.emptyMutual = true;
                }
            }
        }
    }
</script>

<style lang="scss">
    .navName {
        height: 50px;
        border-bottom: 1px solid #ccc;
        h4 {
            padding: 10px 0 0 10px;
            height: auto;
            width:40%;
            float: left;
        }
        input {
            width:170px;
            height: 30px;
            float: right;
            margin-top:10px;
            padding-left: 10px;
            border-radius: 5px;
            outline: none;
        }
    }
    .mutualCompanyInfo {
        height: 90px;
        border-bottom: 1px solid #ccc;
        .companyImg {
            width: 50px;
            padding: 15px 0 0 10px;
            float: left;
        }
        .info {
            width: 80%;
            height: 90px;
            float: left;
            margin-left: 20px;
            .mutualName {
                a {
                    color: #0077b5;
                }
                font-size: 16px;
                margin-top: 10px;
            }
            .mutualLink, .mutualTime, .mutualSite {
                margin-top: 3px;
                font-size: 12px;
            }
        }
        .linkButton {
            float:right;
            height: 60px;
            padding-top: 30px;
            margin-right: 40px;
            a {
                display: inline-block;
                height: 25px;
                width: 40px;
                background: #2778b7;
                color: #fff;
                text-align: center;
                line-height: 25px;
                border-radius: 5px;
            }
        }
    }
</style>