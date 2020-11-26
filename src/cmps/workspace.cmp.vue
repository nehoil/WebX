<template>
  <div class="workspace">
    <component
      v-for="(cmp, idx) in cmps"
      :style="cmp.style"
      :is="cmp.type"
      :cmp="cmp"
      :class="cmp.class"
      :key="idx"
    >
    </component>
    <!-- <pre v-if="waps"></pre> -->
  </div>
</template>

<script>
import webContainer from "@/cmps/web.container.cmp";
import { eventBus } from "@/services/eventbus.service.js";

export default {
  props: {
    cmps: Array,
  },
  name: "work-space",
  components: {
    webContainer,
  },
  data() {
    return {};
  },
  methods: {
    emitItemToEdit() {
      console.log("im emiting");
    },
  },
  created() {
    eventBus.$on("addCmp", () => {
      this.$forceUpdate();
    });
  },
};
</script>
