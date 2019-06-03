import Vue from 'vue';
import App from './App.vue';
import http from './utils/http';
// import './mockdata/index';

// Vue 配置 - 禁用vue默认情况下在浏览器 console 里面的一个提示
Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
  render: h => h(App)
}).$mount('#app')
