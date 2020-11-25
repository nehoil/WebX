<template>
  <span class="tmp-div">
    <component v-for="(element, idx) in elements" :is="element.type" :key="idx" :element="element"></component>
  </span>
</template>

<script>
import tmpTxt from '@/cmps/elements.cmps/tmp.txt.cmp';
import tmpMap from '@/cmps/elements.cmps/tmp.map.cmp';
import tmpVideo from '@/cmps/elements.cmps/tmp.video.cmp';
import tmpImg from '@/cmps/elements.cmps/tmp.img.cmp';
import tmpForm from '@/cmps/elements.cmps/tmp.form.cmp';
import tmpButton from '@/cmps/elements.cmps/tmp.button.cmp';
import tmpList from '@/cmps/elements.cmps/tmp.list.cmp';

export default {
  name: 'tmp-div',
  props: {
    elements: Array
  },
  components: {
    tmpTxt,
    tmpMap,
    tmpImg,
    tmpForm,
    tmpButton,
    tmpList,
    tmpVideo
  },
};
</script>
