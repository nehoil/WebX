<template>
  <span class="web-div">
    <component v-for="(element, idx) in elements" :is="element.type" :key="idx" :element="element"></component>
  </span>
</template>

<script>
import webTxt from '../cmps/web-txt.cmp';
import webMap from '../cmps/web-map.cmp';

export default {
  name: 'web-div',
  props: {
    elements: Array
  },
  components: {
    webTxt,
    webMap
  },
};
</script>
