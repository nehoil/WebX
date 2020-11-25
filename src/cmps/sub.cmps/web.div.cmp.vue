<template>
  <div class="web-div" :style="cmpStyle">
    <component v-for="(element, idx) in elements" :is="element.type" :key="idx" :element="element"></component>
  </div>
</template>

<script>
import webTxt from '@/cmps/elements.cmps/web.txt.cmp';
import webMap from '@/cmps/elements.cmps/web.map.cmp';
import webVideo from '@/cmps/elements.cmps/web.video.cmp';
import webImg from '@/cmps/elements.cmps/web.img.cmp';
import webForm from '@/cmps/elements.cmps/web.form.cmp';
import webButton from '@/cmps/elements.cmps/web.button.cmp';
import webList from '@/cmps/elements.cmps/web.list.cmp';

export default {
  name: 'web-div',
  props: {
    elements: Array,
    cmpStyle: Object
  },
  components: {
    webTxt,
    webMap,
    webImg,
    webForm,
    webButton,
    webList,
    webVideo
  },
};
</script>
