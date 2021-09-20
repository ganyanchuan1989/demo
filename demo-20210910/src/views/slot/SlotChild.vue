<template>
  <div>
    <h1>slot test</h1>
    <h3>default</h3>
    <Container></Container>
    <h3>slot</h3>
    <Container>
      <template v-slot:header>
        <div style="background: red">this is slot header</div>
      </template>
      <template>
        <div style="background: green">this is slot default</div>
      </template>
      <template v-slot:footer>
        <div style="background: gray">this is slot footer</div>
      </template>
    </Container>
  </div>
</template>

<script>
import Container from "./Container.vue";
export default {
  name: "SlotChild",
  components: {
    Container,
  },
};
</script>

<style lang="less" scoped></style>
