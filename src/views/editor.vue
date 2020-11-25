<template>
  <div class="home">
    <component v-for="(cmp, idx) in waps[0].cmps" :is="cmp.type" :subCmps="cmp.subCmps" :key="idx"></component>
 <pre v-if="waps">
   <!-- {{waps[0].cmps[1].subCmps[0]}} -->
   <!-- {{waps[0].cmps[0].subCmps[0].type}} -->
 </pre>
  </div>
</template>

<script>
import json from '@/data/wap.json';
import webSection from '@/cmps/web.section.cmp';
export default {
  name: 'Home',
  components: {
    webSection,
  },
  data() {
    return {
      waps: json,
      // cmps: [
      //   {
      //     type: 'web-section',
      //     subCmps: [{
      //       type: 'web-div',
      //       elements: [{
      //         type: 'web-txt'
      //       }]
      //     }],
      //   },
      // ],
    };
  },
};
</script>
