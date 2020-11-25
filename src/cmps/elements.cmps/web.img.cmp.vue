<template>
  <section class="web-img" :stlye="cmp.style">
     <img :src="cmp.info.content" alt="">
  </section>
</template>

<script>

export default {
  props: {
    cmp: Object,
  },
  name: 'web-img',
  components: {},
};
</script>
<style scoped>

</style>
