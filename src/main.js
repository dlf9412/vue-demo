import Vue from 'vue';
import echarts from 'echarts';
import VueResource from 'vue-resource';
import { Button, Select } from 'element-ui';
import router from './router';
import App from './App';


Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(VueResource);
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>'
});
