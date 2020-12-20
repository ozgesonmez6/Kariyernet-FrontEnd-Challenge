import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";
import joblist from './components/joblist';
import jobdetail from './components/jobdetail';
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 
import Router from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name:'joblist',  component: joblist },
  //{ path: '/joblist',  name:'joblist', component: joblist },
  { path: '/jobdetail/:id',  name:'jobdetail',  component: jobdetail, props: true}
  ]
})

Vue.config.productionTip= false

new Vue({
  router:router,
  el: "#app",
  render: h => h(App)
}).$mount('#app')
 