<template>
  <div style="width: 400px; margin: auto; padding-top: 50px">
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
  </div>
  <!-- <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <br><br>
    <button @click="add">追加</button>
    <ul style="width: 200px; margin: atuo">
      <transition-group name="fade">
        <li
        style="cursor: pointer;"
        v-for="(number, index) in numbers"
        :key="number"
        @click="remove(index)"
        >
        {{number}}
        </li>
      </transition-group>
    </ul>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
     <div class="circle" v-if="show"></div>
    </transition>
    <br>
    <button @click="myComponent= 'ComponentA'">ComponentA</button>
    <button @click="myComponent= 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent">
      </component>
    </transition>
 

    <transition name="fade" mode="out-in">
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>

    <transition
     enter-active-class="animate__animated animate__bounce"
     leave-active-class="animate__animated animate__shake"
    appear >
      <p v-if="show">hello</p>
    </transition>
    <transition :name="myAnimation" appear>
     <p v-if="show">bye</p>

    </transition>
  </div> -->
</template>

<script>

export default {
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll');

    }
  }
}
// import ComponentA from "./components/ComponentA.vue";
// import ComponentB from "./components/ComponentB.vue";

// export default {
//   components: {
//     ComponentA,
//     ComponentB
//   },
//   data() {
//     return {
//       numbers: [0,1,2],
//       nextNumber: 3,
//       show: true,
//       myAnimation: "slide",
//       myComponent: "ComponentA",
//     }
//   },
//   methods: {
//     randamIndex() {
//       return Math.floor(Math.random() * this.numbers.length)
//     },
//     add() {
//       this.numbers.splice(this.randamIndex(),0, this.nextNumber);
//       this.nextNumber += 1;
//     },
//     remove(index) {
//       this.numbers.splice(index, 1);
//     },
//     beforeEnter(el) {
//       el.style.transform = `scale(0)`
//     },
//     enter(el, done) {
//       let scale = 0;
//       const interval = setInterval(() => {
//         el.style.transform = `scale(${scale})`;
//         scale += 0.1;
//         if (scale > 1) {
//           clearInterval(interval)
//           done()
//         }
//       }, 200);
//     },
//     leave(el, done) {
//       let scale = 1;
//       const interval = setInterval(() => {
//         el.style.transform = `scale(${scale})`;
//         scale -= 0.1;
//         if (scale < 0) {
//           clearInterval(interval)
//           done()
//         }
//       }, 200);
//     },
//   }
// }
</script>

<style scoped>

.fade-enter,
.fade-leave-to {
  opacity: 0;  
}
.fade-enter-active,
.fade-leave-active {
 transition: opacity .5s;
}

/* .circle{
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: deeppink;
  border-radius: 100px;
} */

/* .fade-move {
  transition: transform 1s;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
  width: 200px;
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
} */
</style>