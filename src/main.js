import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)

Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});

router.beforeEach((to, from, next) => {
  if (to.path === "/users/1") {
    next({ path: "/" });
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// vueファイルはインポートして使用する
// 最終的にコンポーネントのオブジェクトになる