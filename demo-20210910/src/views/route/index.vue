<template>
  <div>
    <div>
      <button @click="handleRDemo1Click">RDemo1</button> |
      <router-link to="/route/rdemo2/id-111">RDemo2(id)</router-link> |
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handleRDemo1Click() {
      //   this.$router.push({
      //     path: "/route/rdemo1",
      //     query: { id: "rdemo01-id" },
      //   });
      this.$router.push({
        name: "RDemo1",
        params: { id: "rdemo01-id" },
      });
    },
  },
};
</script>

<style></style>
