<template>
    <div id="footerBox">
        <div id="foot">
            <h3>Copyright yushuai 2017-4-18</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterBar'
    }
</script>

<style lang="scss">
    #footerBox {
        height:65px;
        width: 100%;
        background: #167cc6;
    }
    #foot {
        height: 100%;
        width: 1250px;
        margin: 0 auto;
    }
    #foot h3 {
        text-align: center;
        color: #fff;
        margin-top: 20px;
        line-height: 65px;
    }
</style>