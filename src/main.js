import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueRouter)

import StartMenu from "./components/StartMenu.vue";
import Game from "./components/Game.vue";
import End from "./components/End.vue";

const routes = [
  { path: '/', component: StartMenu },
  { path: '/game', component: Game },
  { path: '/end', component: End },
]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
