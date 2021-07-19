<template>
<div>
  <p v-border:solid.round.shadow="{width: '3px', color: 'blue'}">{{tmpData}}</p>
  <h2>{{ title | lowerCase }}</h2>
  <p>{{ subTitle | lowerCase }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      tmpData: "hello",
      title: "Welocme to Tokyo",
      subTitle: "Tokyo is great city"
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if(binding.modifiers.round) { 
        el.style.borderRadius = "0.5rem"
      }
      if(binding.modifiers.shadow) { 
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0 ,0.26)";
      }
    }
  },
}
</script>