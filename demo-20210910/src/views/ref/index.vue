<template>
  <div>
    <h1>Ref</h1>
    <div>
      <input ref="txt" />
      <button @click="handleGetRef">get ref</button>
    </div>
    <div>
      <h3>call child method</h3>
      <button @click="handleCall">call</button>
      <RefChild ref="child"></RefChild>
    </div>
  </div>
</template>

<script>
import RefChild from "./RefChild.vue";

export default {
  name: "RefTest",
  components: {
    RefChild,
  },
  methods: {
    handleGetRef() {
      console.log(">>>", this.$refs.txt);
      this.$refs.txt.value = "xxx";
    },
    handleCall() {
      this.$refs.child.fromParentCall("parent text");
    },
  },
};
</script>

<style></style>
