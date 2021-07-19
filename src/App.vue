<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <transition 
     enter-active-class="animate__animated animate__bounce" 
     leave-active-class="animate__animated animate__shake"
    appear >
      <p v-if="show">hello</p>
    </transition>
    <transition :name="myAnimation" appear>
     <p v-if="show">bye</p>

    </transition>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      show: true,
      myAnimation: "slide"
    }
  }
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.main {
   width: 70%;
   margin: auto;
   padding-top: 5rem;
   text-align: center;
}
</style>