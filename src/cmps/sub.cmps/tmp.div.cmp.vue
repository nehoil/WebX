<template>
  <span class="tmp-div">
    <component v-for="(element, idx) in elements" :is="element.type" :key="idx" :element="element"></component>
  </span>
</template>

<script>
import tmpTxt from '@/cmps/elements.cmps/tmp.txt.cmp';
import tmpMap from '@/cmps/elements.cmps/tmp.map.cmp';

export default {
  name: 'tmp-div',
  props: {
    elements: Array
  },
  components: {
    tmpTxt,
    tmpMap
  },
};
</script>
