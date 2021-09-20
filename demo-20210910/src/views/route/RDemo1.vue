<template>
  <div>
    <h2>RDemo1</h2>
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
};
</script>

<style></style>
