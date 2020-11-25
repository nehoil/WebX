<template>
  <span class="web-txt" contenteditable :style="cmpStyle">
     <pre> {{info.content}}</pre>
      <!-- <pre>      {{element}}
 </pre> -->
     <!-- <pre> {{element.style}}</pre> -->
  </span>
</template>

<script>

export default {
  props: {
    info: Object,
    cmpStyle: Object,
  },
  name: 'web-txt',
  components: {},
};
</script>
<style scoped>

</style>
