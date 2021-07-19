import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
Vue.directive("border", {
  // ライフスタイルフック関数
  bind() {},
  inserted() {},
  update() {},
  componentUpdated() {},
  unbind() {},
} )


new Vue({
  render: h => h(App),
}).$mount('#app')

// vueファイルはインポートして使用する
// 最終的にコンポーネントのオブジェクトになる