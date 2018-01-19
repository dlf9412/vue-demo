import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Page from '@/pages/page';
import Echarts from '@/pages/echarts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts
    }
  ],
});
