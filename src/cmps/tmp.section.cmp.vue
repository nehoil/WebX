<template>
  <section class="web-section">
    <component
      v-for="(subCmp, idx) in subCmps"
      :is="subCmp.type"
      :key="idx"
      :elements="subCmp.elements"
      :cmpStyle="subCmp.style"
    ></component>
  </section>
</template>

<script>
import webDiv from '@/cmps/sub.cmps/web.div.cmp';

export default {
  name: 'web-section',
  props: {
    subCmps: Array,
  },
  components: {
    webDiv,
  },
};
</script>
