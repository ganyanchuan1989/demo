<template>
  <div>
    <h2>RDemo2</h2>
    param: {{ id }}
  </div>
</template>

<script>
export default {
  name: "RouteDemo1",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  created() {
    // this.id = this.$route.params.id;
    // console.log(">", this.$route.params.id);
  },
};
</script>

<style></style>
