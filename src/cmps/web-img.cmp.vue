<template>
  <section class="web-img" :stlye="element.style">
     <img src="element.src" alt="" srcset="">
  </section>
</template>

<script>

export default {
  props: {
    element: Object
  },
  name: 'web-img',
  components: {},
};
</script>
<style scoped>

</style>
