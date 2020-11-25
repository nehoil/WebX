<template>
  <section class="web-img" :style="cmpStyle">
    <img :src="info.content" alt="" />
  </section>
</template>

<script>
export default {
  props: {
    info: Object,
    cmpStyle: Object,
  },
  name: "web-img",
  components: {},
};
</script>
<style scoped>
</style>
