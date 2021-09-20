<template>
  <div>
    <h1>Props & emit</h1>
    <div>
      <h3>child</h3>
      <Child :str1="str1" :num1="100" @changeTxt="handleChangeTxt"></Child>
    </div>
    <div>
      <h3>parent</h3>
      <div>fromChildTxt:{{ fromChildTxt }}</div>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "PropsTest",
  data() {
    return {
      str1: "",
      fromChildTxt: "",
    };
  },
  components: {
    Child,
  },
  methods: {
    handlePropsChild() {},
    handleChangeTxt(txt) {
      this.fromChildTxt = txt;
    },
  },
};
</script>

<style></style>
