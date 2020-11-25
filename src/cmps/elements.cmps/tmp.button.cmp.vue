<template>
  <section class="tmp-button" :stlye="element.style">
    <a :href="element.linkTo"></a>
     <section class="button">element.content</section>
  </section>
</template>

<script>

export default {
  props: {
    element: Object
  },
  name: 'tmp-button',
  components: {},
  methods: {
    // moveTo(){
    //   this.element.linkTo
    // }
  },
};
</script>
<style scoped>

</style>
