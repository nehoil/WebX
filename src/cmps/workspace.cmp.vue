<template>
  <div class="workspace">
    <component
      v-for="(cmp, idx) in waps[0].cmps"
      :is="cmp.type"
      :info="cmp.info"
      :key="idx"
    >
    </component>
    <pre v-if="waps"></pre>
  </div>
</template>

<script>
import json from "@/data/wap.json";
import webContainer from "@/cmps/web.container.cmp";
export default {
  name: "work-space",
  components: {
    webContainer,
  },
  data() {
    return {
      waps: json,
    };
  },
};
</script>
