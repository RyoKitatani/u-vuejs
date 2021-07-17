<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent ='Home'">Home</button>
    <button @click="currentComponent ='About'">About</button>
    <component :is="currentComponent"></component>

    <About></About>
    <Home></Home>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";


export default {
  data() {
    return {
      number: 14,
      currentComponent:'Home'
    };
  },
  components: {
    LikeHeader,
    About,
    Home
   //パスカルケース 大文字で区切る
 },
 methods: {
   incrementNumber(value) {
     this.number =  value
   }
 }
}
</script>

// ルールとしては、コンポーネントはパスカルケース 統一する
// ケバブケースが用意されている理由、ブラウザが大文字小文字の区別ができない
// JSの使用から文字識別ができる仕組みになっているから識別可能

// キャメルケース 最初の文字が小文字

<style scoped>
div {
  border: 1px solid blue;
}
h1 {
  color: blue;
}

</style>

// props 親から子に渡す
// $emit() カスタムイベントを作ることができる。

//オールバックコンテンツ 中身がない時のデフォルト
//slotタグないに書いておくと、値がない場合のみ表示される。

//v-slot:好きな名前 名前付きスロット
// テンプレートで囲み、name属性で指定する

//デフォルトスロット
//v-slot #に置き換えることができる