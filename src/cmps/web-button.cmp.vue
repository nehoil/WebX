<template>
  <section class="web-img" :stlye="element.style">
     <div class="button">element.content</div>
  </section>
</template>

<script>

export default {
  props: {
    element: Object
  },
  name: 'web-button',
  components: {},
};
</script>
<style scoped>

</style>
