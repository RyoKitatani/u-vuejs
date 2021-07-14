<template>
<div>
  <slot>デフォルトのタイトル</slot>
  <!-- <p>{{headerText}}</p> -->
</div>
  <!-- スロット HTMLテキストを全て送れる -->
</template>

<script>

export default {
  props: ["headerText"]
  };
</script>

<style scoped>

h1 {
  color: red;
}

</style>