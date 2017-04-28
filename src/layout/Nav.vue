<template>
    <div id="navBox">
        <div class="jobApply"><p>就业应用</p></div>
        <div class="navOption">
            <ul>
                <li :class="{'active': flags[0].value}"><a href="#/Info" @click="tabLi(0)">重点推荐招聘会</a></li>
                <li :class="{'active': flags[1].value}"><a href="#/SpecialRecruitment" @click="tabLi(1)">专场招聘会</a></li>
                <li :class="{'active': flags[2].value}"><a href="#/XiaoWaiRecruitment" @click="tabLi(2)">校外招聘会</a></li>
                <li :class="{'active': flags[3].value}"><a href="#/MutualSelect" @click="tabLi(3)">双选会</a></li>
                <li :class="{'active': flags[4].value}"><a href="#/RecuritmentInfo" @click="tabLi(4)">招聘信息</a></li>
                <!--<li :class="{'active': flags[5].value}"><a href="#" @click="tabLi(5)">实习信息</a></li>-->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data() {
            return {
                flags: [
                    {value: true},
                    {value: false},
                    {value: false},
                    {value: false},
                    {value: false},
                    {value: false}
                ]
            }
        },
        methods: {
            tabLi(no) {
                this.flags.map((item, index) => {
                    if (index == no) {
                        item.value = true;
                    } else {
                        item.value = false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    #navBox {
        width: 185px;
        height: auto;
        overflow: hidden;
        border-radius: 5px;
        border: 1px solid #167cc6;
    }
    .jobApply {
        height: 40px;
        width: 100%;
    }
    .jobApply p {
        height: 100%;
        width: 160px;
        line-height: 40px;
        padding-left: 25px;;
        color: #fff;
        background: #167cc6;
        font-size: 20px;
    }
    .navOption {
        width: 100%;
        height: auto;
    }
    .navOption ul li {
        height: 40px;
        width: 160px;
        padding-left: 25px;
        line-height: 40px;
    }
    .navOption a {
        color: #000;
    }
    .navOption a:hover {
        color: #167cc6;
    }
    .active {
        background: #abcdef;
    }
</style>
