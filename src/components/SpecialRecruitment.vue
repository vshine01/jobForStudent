<template>
    <div id="specialRecruitmentBox">
        <div class="recruitmentName">
            <h4>专场招聘会</h4>
        </div>
        <div class="first">
            <h5>今天的招聘会</h5>
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;">招聘单位</th>
                    <th style="width:30%;">招聘时间</th>
                    <th style="width:30%;">招聘地点</th>
                </tr>
                <tr v-for="item in recuritmentData.first">
                    <td><a href="#">{{item.name}}</a></td>
                    <td>{{item.date}}</td>
                    <td>{{item.where}}</td>
                </tr>
            </table>
        </div>
        <div class="second">
            <h5>明天的招聘会</h5>
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;">招聘单位</th>
                    <th style="width:30%;">招聘时间</th>
                    <th style="width:30%;">招聘地点</th>
                </tr>
                <tr v-for="item in recuritmentData.second">
                    <td><a href="#">{{item.name}}</a></td>
                    <td>{{item.date}}</td>
                    <td>{{item.where}}</td>
                </tr>
            </table>
        </div>
        <div class="third">
            <h5>后天的招聘会</h5>
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;">招聘单位</th>
                    <th style="width:30%;">招聘时间</th>
                    <th style="width:30%;">招聘地点</th>
                </tr>
                <tr v-for="item in recuritmentData.third">
                    <td><a href="#">{{item.name}}</a></td>
                    <td>{{item.date}}</td>
                    <td>{{item.where}}</td>
                </tr>
            </table>
        </div>
        <div class="fourth">
            <h5>第四天的招聘会</h5>
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;">招聘单位</th>
                    <th style="width:30%;">招聘时间</th>
                    <th style="width:30%;">招聘地点</th>
                </tr>
                <tr v-for="item in recuritmentData.fourth">
                    <td><a href="#">{{item.name}}</a></td>
                    <td>{{item.date}}</td>
                    <td>{{item.where}}</td>
                </tr>
            </table>
        </div>
        <div class="fifth">
            <h5>第五天的招聘会</h5>
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;">招聘单位</th>
                    <th style="width:30%;">招聘时间</th>
                    <th style="width:30%;">招聘地点</th>
                </tr>
                <tr v-for="item in recuritmentData.fifth">
                    <td><a href="#">{{item.name}}</a></td>
                    <td>{{item.date}}</td>
                    <td>{{item.where}}</td>
                </tr>
            </table>
        </div>
        <div class="sixth">
            <h5>第六天的招聘会</h5>
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;">招聘单位</th>
                    <th style="width:30%;">招聘时间</th>
                    <th style="width:30%;">招聘地点</th>
                </tr>
                <tr v-for="item in recuritmentData.sixth">
                    <td><a href="#">{{item.name}}</a></td>
                    <td>{{item.date}}</td>
                    <td>{{item.where}}</td>
                </tr>
            </table>
        </div>
        <div class="seventh">
            <h5>第七天的招聘会</h5>
            <table border="1" cellpadding="0" cellspacing="0">
                <tr>
                    <th style="width:40%;">招聘单位</th>
                    <th style="width:30%;">招聘时间</th>
                    <th style="width:30%;">招聘地点</th>
                </tr>
                <tr v-for="item in recuritmentData.seventh">
                    <td><a href="#">{{item.name}}</a></td>
                    <td>{{item.date}}</td>
                    <td>{{item.where}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'SpecialRecruitment',
        data() {
            return {
                recuritmentData: {}
            }
        },
        methods: {
            recuritmentDataLoad() {
                let _this = this;
                $.ajax({
                    url: '../mock/specialRecruitment.json',
                    success: function(data) {
                        _this.recuritmentData = Object.assign({},data);
                    }
                });
            }
        },
        mounted() {
            this.recuritmentDataLoad();
        }
    }
</script>

<style lang="scss">
    .recruitmentName {
        height: 50px;
    }
    .recruitmentName h4 {
        height: auto;
        width:40%;
        margin-left: 10px;
        padding-top:10px;
        float: left;
    }
    .first, .second, .third, .fourth, .fifth, .sixth, .seventh {
        border: 1px solid #ccc;
        height: auto;
        margin-bottom: 10px;
        padding: 5px;
    }
    #specialRecruitmentBox h5 {
        color: #ed4e00;
    }
    #specialRecruitmentBox table {
        width: 100%;
        font-size: 14px;
        border: 1px solid #ccc;
    }
    #specialRecruitmentBox table tr {
        height: 38px;
        text-align:center;
    }
</style>