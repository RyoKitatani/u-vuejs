import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import router from './router'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)

Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});

router.beforeEach((to, from, next) => {
  
  next();
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

// vueファイルはインポートして使用する
// 最終的にコンポーネントのオブジェクトになる