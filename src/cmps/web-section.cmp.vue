<template>
  <span class="web-section">
    <component v-for="(subCmp, idx) in subCmps" :is="subCmp.type" :key="idx" :elements="subCmp.elements"></component>
  </span>
</template>

<script>
import webDiv from '@/cmps/web-div.cmp';

export default {
  name: 'web-section',
  props: {
    subCmps: Array
  },
  components: {
    webDiv
  },
};
</script>
