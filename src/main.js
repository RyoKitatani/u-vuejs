import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px"
} );
  // 5つのライフスタイルフック関数

  // bind(el, binding, vnode) {
    // ディレクティブが初めて対象の要素に紐づいた時
  // },

  // inserted(el, binding, vnode) {
  // //  親Nodeに挿入された時
  // },

  // update(el, binding, vnode, oldVnode) {
    // コンポーネントが更新される度。子コンポーネントが更新される前
  // }

  // componentUpdated(el, binding, vnode, oldVnode) {
  //   // コンポーネントが更新される度。子コンポーネントが更新された後
  // },
  // unbind(el, binding, vnode) {
  //   // ディレクティブが紐づいている要素から取り除かれた時
  // },


new Vue({
  render: h => h(App),
}).$mount('#app')

// vueファイルはインポートして使用する
// 最終的にコンポーネントのオブジェクトになる