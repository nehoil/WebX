<template>
  <section class="tmp-img" :stlye="element.style">
     <img src="element.content" alt="">
  </section>
</template>

<script>

export default {
  props: {
    element: Object
  },
  name: 'tmp-img',
  components: {},
};
</script>
<style scoped>

</style>
