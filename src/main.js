import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App';
import router from './router';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>'
});
