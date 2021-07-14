<template>
<div>
  <slot></slot>
</div>
  <!-- スロット HTMLテキストを全て送れる -->
</template>

<script>

export default {
  props: ["headerText"]
  };
</script>