<template>
  <div class="workspace">
    <draggable
      class="dragArea list-workspace"
      :list="cmps"
      group="workspace-cmps"
    >
      <component
        v-for="(cmp, idx) in cmps"
        :style="cmp.style"
        :is="cmp.type"
        :cmp="cmp"
        :class="cmp.class"
        :key="idx"
      >
      </component>
    </draggable>
  </div>
</template>

<script>
import webContainer from "@/cmps/web.container.cmp";
import { eventBus } from "@/services/eventbus.service.js";
import draggable from "vuedraggable";

export default {
  props: {
    cmps: Array,
  },
  name: "work-space",
  components: {
    webContainer,
    draggable,
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
