<template>
<div>
  <slot :user="user" text="text"></slot>
  <!-- <slot name="title" :user="user" text="text"></slot> -->
  <slot></slot>
  <hr>
  <p>いいねの数</p>
  <slot></slot>
  <slot name="number"></slot>
  <!-- <p>{{headerText}}</p> -->
</div>
  <!-- スロット HTMLテキストを全て送れる -->
</template>

<script>

export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
}
</script>

<style scoped>

h1 {
  color: red;
}

</style>