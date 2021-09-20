<template>
  <div>
    <h1>class&style</h1>
    <div>
      <h3>静态</h3>
      <div>
        <div class="staticCls">静态class</div>
        <div style="width: 200px; background: green">静态style</div>
      </div>
    </div>
    <div>
      <h3>动态 <input type="checkbox" v-model="checked" /></h3>
      <div>
        <div :class="{ staticCls: true, dynamicCls: this.checked }">
          动态class
        </div>
        <div
          :style="{
            width: '200px',
            background: 'green',
            color: this.checked ? '#fff' : '#000',
          }"
        >
          动态style
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "style",
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style lang="less" scoped>
.staticCls {
  width: 200px;
  height: 30px;
  line-height: 30px;
  background: red;
  color: #000;
}
.dynamicCls {
  color: #fff;
}
</style>
