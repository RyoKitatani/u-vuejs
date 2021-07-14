<template>
  <div>
  <LikeHeader header-text="Hello">
    <h1>トータルのいいね数</h1>
    <h2>{{ number}}</h2>
  </LikeHeader>
  <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
  <LikeNumber :total-number="number"></LikeNumber>
  <!-- ケバブケース推奨 属性のため -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return {
      number: 14
    };
  },
 components: {
   LikeHeader
   //パスカルケース 大文字で区切る
 } ,
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