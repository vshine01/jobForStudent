<template>
    <div id="recuritmentInfoBox">
        <div class="recuritmentInfoHeader">
            <h4>招聘信息</h4>
        </div>
        <div class="recuritmentSearch">
            <div class="unitNature">单位性质:
                <select  v-model="natureValue" @change="valueChange()">
                    <option value="0">--请选择--</option>
                    <option v-for="item in unitNatureData" :value="item.value">{{item.text}}</option>
                </select>
            </div>
            <div class="unitIndustry">单位行业:
                <select v-model="industryValue" @change="valueChange()">
                    <option value="0">--请选择--</option>
                    <option v-for="item in unitIndustryData" :value="item.value">{{item.text}}</option>
                </select>
            </div>
            <div class="unitSite">单位所在:
                <select v-model="siteValue" @change="valueChange()">
                    <option value="0">--请选择--</option>
                    <option v-for="item in unitSiteData" :value="item.id">{{item.Name}}</option>
                </select>
            </div>
        </div>
        <div class="searchResult">
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th>招聘单位</th>
                    <th>招聘岗位</th>
                    <th>招聘人数</th>
                    <th>发布时间</th>
                </tr>
                <tr v-for="item in searchResultData">
                    <td><a href="#/specialDetails">{{item.CompanyTitle}}</a></td>
                    <td>{{item.WorkPositon}}</td>
                    <td>{{item.EmployNum}}</td>
                    <td>{{item.Createtime}}</td>
                </tr>
            </table>
            <div v-if="searchResultData.length == 0" style="height:50px;lineHeight:50px;textAlign:center;width:100%;">没有找到相应数据</div>
            <div class="checkMore" @click="checkMoreInfo()" v-if="checkMoreIsShow">查看更多</div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        name: 'RecuritmentInfo',
        data() {
            return {
                unitNatureData: [],
                unitIndustryData: [],
                unitSiteData: [],
                searchResultData: [],
                natureValue: 0,
                industryValue: 0,
                siteValue: 0,
                oldData: [],
                checkMoreIsShow: true
            }
        },
        methods: {
            unitNatureDataLoad() {
                let _this = this;
                $.ajax({
                    url: '../mock/unitNature.json',
                    success: function(data) {
                        _this.unitNatureData = data;
                    }
                });
            },
            unitIndustryDataLoad () {
                let _this = this;
                $.ajax({
                    url: '../mock/unitIndustry.json',
                    success: function(data) {
                        _this.unitIndustryData = data;
                    }
                });
            },
            unitSiteDataLoad() {
                let _this = this;
                $.ajax({
                    url: '../mock/unitSite.json',
                    success: function(data) {
                        _this.unitSiteData = data;
                    }
                });
            },
            searchResultDataLoad() {
                let _this = this;
                $.ajax({
                    url: '../mock/searchResultData.json',
                    success: function(data) {
                        _this.searchResultData = data;
                        _this.oldData = data;
                    }
                });
            },
            checkMoreInfo() {
                this.searchResultData.map(item => {
                    this.searchResultData.push(item);
                });
            },
            valueChange() {
                this.checkMoreIsShow = false;
                this.searchResultData = this.oldData;
                let oldSearchData = this.searchResultData;
                let newSearchData = [];
                if ((this.natureValue != 0) && (this.industryValue != 0) && (this.siteValue != 0)) {
                    oldSearchData.map(item => {
                        if ((this.natureValue == item.Type) && (this.siteValue == item.CompanyProvice) && (this.industryValue == item.Attribute)) {
                            newSearchData.push(item);
                        }
                    });
                    this.searchResultData = newSearchData;
                } else if ((this.natureValue != 0) && (this.industryValue != 0) && (this.siteValue == 0)) {
                    oldSearchData.map(item => {
                        if ((this.natureValue == item.Type) && (this.industryValue == item.Attribute)) {
                            newSearchData.push(item);
                        }
                    });
                    this.searchResultData = newSearchData;
                } else if ((this.natureValue != 0) && (this.industryValue == 0) && (this.siteValue != 0)) {
                    oldSearchData.map(item => {
                        if ((this.natureValue == item.Type) && (this.siteValue == item.CompanyProvice)) {
                            newSearchData.push(item);
                        }
                    });
                    this.searchResultData = newSearchData;
                }else if ((this.natureValue == 0) && (this.industryValue != 0) && (this.siteValue != 0)) {
                    oldSearchData.map(item => {
                        if ((this.industryValue == item.Attribute) && (this.siteValue == item.CompanyProvice)) {
                            newSearchData.push(item);
                        }
                    });
                    this.searchResultData = newSearchData;
                }else if ((this.natureValue != 0) && (this.industryValue == 0) && (this.siteValue == 0)) {
                    oldSearchData.map(item => {
                        if (this.natureValue == item.Type) {
                            newSearchData.push(item);
                        }
                    });
                    this.searchResultData = newSearchData;
                }else if ((this.natureValue == 0) && (this.industryValue != 0) && (this.siteValue == 0)) {
                    oldSearchData.map(item => {
                        if (this.industryValue == item.Attribute) {
                            newSearchData.push(item);
                        }
                    });
                    this.searchResultData = newSearchData;
                }else if ((this.natureValue == 0) && (this.industryValue == 0) && (this.siteValue != 0)) {
                    oldSearchData.map(item => {
                        if (this.siteValue == item.CompanyProvice) {
                            newSearchData.push(item);
                        }
                    });
                    this.searchResultData = newSearchData;
                }else {
                    this.checkMoreIsShow = true;
                }
            }
        },
        mounted() {
            this.unitNatureDataLoad();
            this.unitIndustryDataLoad();
            this.unitSiteDataLoad();
            this.searchResultDataLoad();
        }
    }
</script>

<style lang="scss">
    .recuritmentInfoHeader {
        height: 50px;
        width: 100%;
        h4 {
            height: auto;
            width:40%;
            margin-left: 10px;
            padding-top:10px;
        }
    }
    .recuritmentSearch {
        width: 925;
        height: auto;
        border: 1px solid #428bd3;
        min-height: 100px;
        border-radius: 5px;
        padding: 20px;
    }
    .unitNature, .unitIndustry, .unitSite {
        margin-bottom: 10px;
        select {
            height: 20px;
            width: 560px;
            outline: none;
        }
    }
    .searchResult {
        width: 100%;
        margin-top: 40px;
        table {
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 5px;
            overflow: hidden;
            tr {
                text-align: left;
                height: 38px;
                td, th {
                    padding-left: 5px;
                    a {
                        color: #428bd3;
                    }
                    a:hover {
                      text-decoration: underline;
                    }
                }
            }
        }
        .checkMore {
            height: 50px;
            width: 100%;
            text-align: center;
            line-height: 50px;
            background: blue;
            cursor: pointer;
            margin-top: 20px;
            color: #fff;
            font-size: 20px;
            font-weight: 900;
        }
    }
</style>
