<template>
  <div>
    <div>
      <h2>global</h2>
      <div>{{ appId }}-{{ appDesc }}</div>
      <div>appInfo:{{ appInfo }}</div>
      <button @click="changeAppInfo('appId-xxx', 'appDesc-XXX')">
        changeAppInfo
      </button>
    </div>
    <div>
      <h2>Module Counter:{{ count }}</h2>
      <div>
        <button @click="increment(1)">sync add</button>
        <button @click="asyncIncrement(10)">async add</button>
        <button @click="decrement(1)">sync dec</button>
        <button @click="asyncDecrement(10)">async dec</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Counter",
  // 注意：state和getter在computed
  computed: {
    ...mapGetters("counter", ["count"]), // counter: namespaced
    ...mapGetters(["appInfo"]), // no namespaced
    ...mapState(["appId", "appDesc"]), // no namespaced
  },
  methods: {
    ...mapMutations("counter", ["increment", "decrement"]),
    ...mapActions("counter", ["asyncIncrement", "asyncDecrement"]),
    ...mapMutations(["changeAppInfo"]),
  },
};
</script>

<style lang="less">
.counter {
  background: #fff;
  border-radius: 8px;
  min-height: 800px;
  padding: 20px;
}
</style>
