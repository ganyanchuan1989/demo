<template>
  <div>txt:{{ txt }}</div>
</template>

<script>
export default {
  name: "RefChild",
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    fromParentCall(txt) {
      this.txt = txt;
      console.log(">>> from parent call");
    },
  },
};
</script>

<style></style>
