import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Componente1 from "./components/componente1";
import Componente2 from "./components/componente2";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: '/componente1', component: Componente1 },
  { path: '/componente2', component: Componente2 }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
