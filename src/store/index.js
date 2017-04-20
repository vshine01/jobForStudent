/**
 * @file store文件
 * @author yushuai
 */
import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import actions from './action';
import getters from './getter';
import plugins from './plugins';
import $ from 'jquery';
import VueResource from 'vue-resource'

Vue.use(Vuex);
Vue.use(VueResource);
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    actions,
    modules,
    getters,
    strict: debug,
    plugins: plugins
});