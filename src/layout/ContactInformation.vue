<template>
    <div id="contactBox">
        <h4>联系我们</h4>
        <div class="contactWayBox">
            <div class="contactWay">
                <p>就业指导电话:</p>
                <p>029-87082036</p>
            </div>
            <div class="contactWay">
                <p>就业指导传真:</p>
                <p>029-87082114</p>
            </div>
            <div class="contactWay">
                <p>单位招聘咨询电话:</p>
                <p>029-87082460</p>
            </div>
            <div class="contactWay">
                <p>单位招聘传真:</p>
                <p>029-87082114</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactInformation'
    }
</script>

<style lang="scss">
    #contactBox {
        width: 185px;
        height: auto;
        border: 1px solid #0ccef5;
        border-radius: 5px;
    }
    #contactBox h4 {
        padding: 10px 0 10px 10px;
    }
    .contactWayBox .contactWay {
        padding: 10px 0 10px 10px;
    }
    .contactWayBox .contactWay p {
        margin-top: 5px;
    }
</style>