<template>
  <div>
    <h1>demo01</h1>
    <div>
      <h3>child</h3>
      <Child str1="abc" :num1="100"></Child>
    </div>
    <div>
      <h3>data</h3>
      <div>{{ text1 }}</div>
    </div>
    <div>
      <h3>computed</h3>
      <input v-model="text2" />
      <input v-model="text3" />
      <div>{{ textc }}</div>
    </div>
    <div>
      <h3>watch</h3>
      <input v-model="textWatch" />
    </div>
    <div>
      <h3>method</h3>
      <button @click="handleClick">call method</button>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "Demo01",
  components: {
    Child,
  },
  data() {
    return {
      text1: "text1",
      text2: "text2",
      text3: "text3",
      textWatch: "",
    };
  },
  computed: {
    textc() {
      return this.text2 + "_" + this.text3;
    },
  },
  watch: {
    textWatch() {
      setTimeout(() => {
        console.log(">>>>watch");
      }, 1000);
    },
  },
  methods: {
    handleClick() {
      console.log(">>>call method");
    },
  },
};
</script>

<style lang="less" scoped></style>
