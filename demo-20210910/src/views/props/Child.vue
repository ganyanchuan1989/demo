<template>
  <div>
    <h3>Child</h3>
    <div>formParentProps：str1:{{ str1 }}, num1:{{ num1 }}</div>
    <div>
      <button @click="handleClick">emit to parent</button>
    </div>
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
  methods: {
    handleClick() {
      console.log(">>>>");
      this.$emit("changeTxt", "this is child text");
    },
  },
};
</script>

<style></style>
