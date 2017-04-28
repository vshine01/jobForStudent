<template>
  <div id="bigBox">
    <router-view></router-view>
  </div>
</template>

<script>
// import HeaderBar from './layout/Header.vue';
// import NavBar from './layout/Nav.vue';
// import FooterBar from './layout/Fotter.vue';
// import ContactInformation from './layout/ContactInformation.vue';
export default {
  // name: 'app',
  // components: {
  //   HeaderBar,
  //   NavBar,
  //   FooterBar,
  //   ContactInformation
  // }
}
</script>

<style lang="scss">
  body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select {
    padding: 0;
    margin: 0;
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    border: 0;
  }
  body, html {
    height: 100%;
    width: 100%;
  }
  #bigBox {
    width: 100%;
    height: 100%;
  }
  #jobInfo {
    width: 1185px;
    height: auto;
    overflow: hidden;
    padding: 15px 0 0 95px;
  }
  .navContainer {
    float: left;
    margin-right: 10px;
  }
  .companyInfo {
    width: 965px;
    float: left;
    min-height: 500px;
  }
</style>
