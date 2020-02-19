<template>
  <div class="container-com-b">
    B组件：
    <button @click="fn">传值给A</button>
  </div>
</template>

<script>
import eventBus from "@/eventBus";
export default {
  data() {
    return {
      str: "B组件的值"
    };
  },
  methods: {
    fn() {
      eventBus.$emit("b2a", this.str);
    }
  }
};
</script>

<style scoped lang='less'></style>