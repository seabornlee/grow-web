<template>
  <div id="app">
    <div>
      <mt-field placeholder="比如：瘦成一道闪电" v-model="title"></mt-field>
      <mt-button type="default" id="add" @click="toast">+</mt-button>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="./assets/logo.png">
        目标
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./assets/logo.png">
        广场
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'app',
  components: {},
  methods: {
    toast() {
      Toast('Lets Rock!');
    },
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
