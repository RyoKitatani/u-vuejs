<template>
<div>
  <h2>{{ title | lowerCase | upperCase}}</h2>
  <p>{{ subTitle | upperCase | lowerCase }}</p>
  <p>{{ number}}</p>
  <button @click="number++">+1</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welocme to Tokyo",
      subTitle: "Tokyo is great city",
      number:  0
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
}
</script>