<template>
  <section contenteditable class="web-button" :stlye="cmpStyle" v-if="info">
    <a :href="info.linkTo"></a>
     <section class="button">{{info.content}}</section>
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
