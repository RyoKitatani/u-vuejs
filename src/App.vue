<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent ='Home'">Home</button>
    <button @click="currentComponent ='About'">About</button>
    <keep-alive>
     <component :is="currentComponent"></component>
    </keep-alive>
    <div style="padding: 10rem">
      <h2>イベントのフォーム</h2>
      <EventTitle v-model="eventDate.title"></EventTitle>

      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model.number="eventDate.maxNumber">
      <!-- stringではなく、number型にしてくれる .number -->
      <p>{{ eventDate.maxNumber}}</p>

      <label for="host">主催者</label>
      <input type="text" id="host" v-model.trim="eventDate.host">
      <!--  空白を取り除いてくれる .trim -->
      <pre>{{ eventDate.host}}</pre>
      <label for="detail"></label>
      <textarea id="detail" cols="30" rows="10" v-model="eventDate.detail"></textarea>
      <pre>{{ eventDate.detail}}</pre>

      <input type="checkbox" id="isPrivate" v-model="eventDate.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventDate.isPrivate}}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventDate.target">
      <label for="10代">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventDate.target">
      <label for="20代">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventDate.target">
      <label for="30代">30代</label>
      <p>{{eventDate.target}}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventDate.price">
      <label for="free">無料</label>
      <input type="radio" id="pay" value="有料" v-model="eventDate.price">
      <label for="pay">有料</label>


      <p>開催場所</p>
      <select v-model="eventDate.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventDate.location}}</p>

    </div>

    <About></About>
    <Home></Home>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";


export default {
  data() {
    return {
      number: 14,
      currentComponent:'Home',
      locations: ["東京", "大阪", "名古屋"],
      eventDate: {
        title: "タイトル",
        maxNumber: 0,
        host: "",
        detai: "",
        isPrivate: false,
        target: [],
        price: "無料",
        location: "東京"
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
   //パスカルケース 大文字で区切る
 },
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

</style>

// props 親から子に渡す
// $emit() カスタムイベントを作ることができる。

//オールバックコンテンツ 中身がない時のデフォルト
//slotタグないに書いておくと、値がない場合のみ表示される。

//v-slot:好きな名前 名前付きスロット
// テンプレートで囲み、name属性で指定する

//デフォルトスロット
//v-slot #に置き換えることができる