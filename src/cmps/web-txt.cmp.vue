<template>
  <span class="web-txt" contenteditable :style="element.style">
     <pre> {{element.content}}</pre>
      <!-- <pre>      {{element}}
 </pre> -->
     <!-- <pre> {{element.style}}</pre> -->
  </span>
</template>

<script>

export default {
  props: {
    element: Object
  },
  name: 'web-txt',
  components: {},
};
</script>
<style scoped>

</style>
