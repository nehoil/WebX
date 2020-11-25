<template>
  <span class="tmp-section">
    <component v-for="(subCmp, idx) in subCmps" :is="subCmp.type" :key="idx" :elements="subCmp.elements"></component>
  </span>
</template>

<script>
import webDiv from '@/cmps/sub.cmps/tmp.div.cmp';

export default {
  name: 'tmp-section',
  props: {
    subCmps: Array
  },
  components: {
    webDiv
  },
};
</script>
