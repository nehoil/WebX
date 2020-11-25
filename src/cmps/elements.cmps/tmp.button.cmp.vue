<template>
  <section class="web-button" :stlye="element.style">
    <a :href="element.linkTo"></a>
     <section class="button">{{element.content}}</section>
  </section>
</template>

<script>

export default {
  props: {
    element: Object
  },
  name: 'web-button',
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
