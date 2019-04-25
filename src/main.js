import Vue from 'vue'
import Router from 'vue-router'
import BootStrapVue from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import Vuetify from 'vuetify'

import App from './App'
import home from './components/home'
import welcome from './components/welcome'
import menu from './components/menu'
import brew from './components/brew'
import design from './components/design'
import data from './components/data'


Vue.use(Router);
Vue.component('apexchart', VueApexCharts);
Vue.use(BootStrapVue);
Vue.use(Vuetify);

const routes = [
  { path : '/', component: welcome },
  { path: '/home', component: home},
  { path: '/home/:userName', component: home},
  { path: '/menu', component: menu},
  { path: '/brew', component: brew},
  { path: '/brew/:drinkName', component: brew},
  { path: '/buildDrink', component: design},
  { path: '/data', component: data}
];

const router = new Router({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
