<template>
  <div class="container-setting">
    <com-a></com-a>
    <com-b></com-b>
  </div>
</template>

<script>
import ComA from "@/components/com-a";
import ComB from "@/components/com-b";
export default {
  components: { ComA, ComB },
  name: "app-setting"
};
</script>

<style scoped lang='less'></style>