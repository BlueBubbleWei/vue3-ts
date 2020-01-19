<template>
  <div class="hello">
    <input v-model="inputValue" />
    <p>父组件传值{{propMessage}}</p>
    <p>计算出的值computed msg:{{computedMsg}}</p>
    <button @click="greet">点击事件</button>
    <h1>{{ '首页'+msg }}</h1>
    <p>绑定的值</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
// import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    propMessage: String, // 在这里指定类型 !代表不接受undefined   等同于下方一样的处理方式
  },
})
export default class HelloWorld extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
