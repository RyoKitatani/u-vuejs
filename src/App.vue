<template>
  <div>
  <like-header></like-header>
  <!-- ケバブケース -->
  <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

export default {
 components: {
   LikeHeader: LikeHeader
   //パスカルケース 大文字で区切る
 } 
}
</script>

// ルールとしては、コンポーネントはパスカルケース 統一する
// ケバブケースが用意されている理由、ブラウザが大文字小文字の区別ができない
// JSの使用から文字識別ができる仕組みになっているから識別可能

// キャメルケース 最初の文字が小文字