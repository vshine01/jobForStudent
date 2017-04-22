<template lang="html">
  <div id="keyJobDetails">
    <div class="keyJobDetailsTitle">
      <h2><a href="javascript:;">{{companyInfoData.CompanyName}}</a></h2>
    </div>
    <div class="speedInfo">
      <div class="speedTime">
        宣讲时间：{{companyInfoData.MeetDate}}
      </div>
      <div class="speedSite">
        宣讲地点：{{companyInfoData.SitusName}}
      </div>
      <div class="linkWay">
        联系方式：{{companyInfoData.CompanyLinkmen}}({{companyInfoData.CompanyTel}})
      </div>
      <div class="employSite">
        招聘职位：{{companyInfoData.PostDemand}}({{companyInfoData.Plannumber}}人)
      </div>
    </div>
    <div class="recuritmentDetails">
      <h4>⭐️ 招聘详情</h4>
      <div class="detailsInfo" v-html="companyInfoData.RecruitContent">
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'KeyJobDetails',
  data() {
    return {
      companyInfoData: {}
    }
  },
  methods: {
    companyInfoLoad() {
      let _this = this;
      $.ajax({
        url: '../mock/keyJobDetails.json',
        success: function(data) {
          _this.companyInfoData = Object.assign({}, data);
        }
      });
    }
  },
  mounted() {
    this.companyInfoLoad();
  }
}
</script>

<style lang="scss">
  .keyJobDetailsTitle {
    height: 65px;
    border: 1px solid #428bd3;
    border-top: 5px solid #428bd3;
    width: 100%;
    h2 {
      height: 100%;
      width: 100%;
      text-align: center;
      line-height: 65px;
      a {
        color: #428bd3;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
  .speedInfo {
    width: 950px;
    height: auto;
    border: 1px solid #428bd3;
    border-top: 0;
    padding: 15px 0 15px 15px;
    div {
      height: 30px;
      line-height: 30px;
    }
  }
  .recuritmentDetails {
    width: 100%;
    height: auto;
    border: 1px solid #428bd3;
    border-top: 0;
    h4 {
      color: #ed4e00;
      padding: 15px 0 15px 15px;
    }
    .detailsInfo {
      padding: 0 15px 30px 15px;
    }
  }
</style>
