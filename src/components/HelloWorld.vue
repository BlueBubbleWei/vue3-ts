<template>
  <div class="hello">
    <input v-model="inputValue" />
    <p>父组件传值{{ propMessage }}</p>
    <p>计算出的值computed msg:{{ computedMsg }}</p>
    <button @click="greet">点击事件</button>
    <h1>{{ '首页' + basicValue }}</h1>
    <p>绑定的值</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
// import { Component, Prop, Vue } from 'vue-property-decorator';
// 在这里指定类型 !代表不接受undefined   等同于下方一样的处理方式
@Component({
  props: {
    propMessage: String,
  },
})
export default class HelloWorld extends Vue {
  // @Prop() private msg!: string;
  basicValue = 'call me 哈啰'

  inputValue = '哈哈哈'

  get computedMsg() {
    // 计算属性
    return `computed${this.basicValue}`
  }

  mounted() {
    this.greet()
  }

  // 方法
  greet = () => {
    console.log('greeting with汪汪汪')
  }
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
