<template>
  <div>
    Child
    <div>参数：str1:{{ str1 }}, num1:{{ num1 }}</div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    str1: {
      type: String,
      default: "",
    },
    num1: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
