/**
 * @file 路由信息的配置
 * @author yushuai
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import KeyJobFairs from './components/KeyJobFairs.vue';
import SpecialRecruitment from './components/SpecialRecruitment.vue';
import XiaoWaiRecruitment from './components/XiaoWaiRecruitment.vue';
import MutualSelect from './components/MutualSelect.vue';
import RecuritmentInfo from './components/RecuritmentInfo.vue';
import KeyJobDetails from './components/KeyJobDetails.vue';
import SpecialDetails from './components/SpecialDetails.vue';
import Login from './components/Login.vue';
import Info from './components/Info.vue';
import Register from './components/Register.vue';
import PersonalInfo from './components/PersonalInfo.vue';


Vue.use(VueRouter);

// export default new VueRouter({
//     history: true,
//     mode: 'hash',
//     routes: [{
//         path: '/',
//         name: 'KeyJobFairs',
//         component: KeyJobFairs
//     }, {
//         path: '/SpecialRecruitment',
//         name: 'SpecialRecruitment',
//         component: SpecialRecruitment
//     }, {
//         path: '/XiaoWaiRecruitment',
//         name: 'XiaoWaiRecruitment',
//         component: XiaoWaiRecruitment
//     }, {
//         path: '/MutualSelect',
//         name: 'MutualSelect',
//         component: MutualSelect
//     }, {
//         path: '/RecuritmentInfo',
//         name: 'RecuritmentInfo',
//         component: RecuritmentInfo
//     }, {
//         path: '/KeyJobDetails',
//         name: 'KeyJobDetails',
//         component: KeyJobDetails
//     }, {
//         path: '/SpecialDetails',
//         name: 'SpecialDetails',
//         component: SpecialDetails
//     }]
// });

export default new VueRouter({
  history: true,
  mode: 'hash',
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/Register',
    component: Register
  }, {
    path: '/PersonalInfo',
    component: PersonalInfo
  }, {
    path: '/Info',
    component: Info,
    children: [{
        path: '/Info',
        name: 'KeyJobFairs',
        component: KeyJobFairs
    }, {
        path: '/SpecialRecruitment',
        name: 'SpecialRecruitment',
        component: SpecialRecruitment
    }, {
        path: '/XiaoWaiRecruitment',
        name: 'XiaoWaiRecruitment',
        component: XiaoWaiRecruitment
    }, {
        path: '/MutualSelect',
        name: 'MutualSelect',
        component: MutualSelect
    }, {
        path: '/RecuritmentInfo',
        name: 'RecuritmentInfo',
        component: RecuritmentInfo
    }, {
        path: '/KeyJobDetails',
        name: 'KeyJobDetails',
        component: KeyJobDetails
    }, {
        path: '/SpecialDetails',
        name: 'SpecialDetails',
        component: SpecialDetails
    }]
  }]
});
