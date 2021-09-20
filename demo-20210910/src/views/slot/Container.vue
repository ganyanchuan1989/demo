<template>
  <div>
    <div>Container</div>
    <div>
      <slot name="header">header</slot>
    </div>
    <div>
      <slot>default</slot>
    </div>
    <div>
      <slot name="footer"> footer </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="less" scoped></style>
