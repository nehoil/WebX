<template>
  <section v-if="info.cmps" class="web-container">
    
    <component
      v-for="(cmp, idx) in info.cmps"
      :is="cmp.type"
      :key="idx"
      :info="cmp.info"
      :cmpStyle="cmp.style"
    ></component>
  </section>
</template>

<script>
import webMap from '@/cmps/elements.cmps/web.map.cmp';
import webTxt from '@/cmps/elements.cmps/web.txt.cmp';
import webVideo from '@/cmps/elements.cmps/web.video.cmp';
import webImg from '@/cmps/elements.cmps/web.img.cmp';
import webForm from '@/cmps/elements.cmps/web.form.cmp';
import webButton from '@/cmps/elements.cmps/web.button.cmp';
import webList from '@/cmps/elements.cmps/web.list.cmp';
export default {
  name: 'web-container',
  props: {
    info: Object,
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
