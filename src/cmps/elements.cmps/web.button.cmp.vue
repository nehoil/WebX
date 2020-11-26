<template>
  <section contenteditable class="web-button" :style="cmp.style" v-if="cmp">
    <a :href="cmp.info.linkTo">{{cmp.info.content}}</a>
  </section>
</template>

<script>
export default {
  props: {
    cmp: Object,
  },
  name: "web-button",
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
