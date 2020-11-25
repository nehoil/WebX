<template>
  <section contenteditable class="web-button" :stlye="element.style">
    <a :href="element.linkTo"></a>
     <section class="button">{{element.content}}</section>
  </section>
</template>

<script>

export default {
  props: {
    info: Object,
    cmpStyle: Object,
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
