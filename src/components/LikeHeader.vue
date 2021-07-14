<template>
<div>

  <slot name="title"></slot>
  <hr>
  <p>いいねの数</p>
  <slot name="number"></slot>
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