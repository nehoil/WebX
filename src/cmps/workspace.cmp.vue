<template>
  <div class="workspace">
    <draggable
      :class="{dragArea:isDragging}"
      :list="cmps"
      group="workspace-cmps"
      @change="updateSite"
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
    return {
      isDragging:false,
    };
  },
  methods: {
    emitItemToEdit() {
      console.log("im emiting");
    },
    updateSite(){
       eventBus.$emit("update-site");
    },
 
  },
  created() {
    eventBus.$on("addCmp", () => {
      this.$forceUpdate();
    });
    eventBus.$on("dragStart", () => {
      this.isDragging=true
    });
    eventBus.$on("dragStop", () => {
      this.isDragging=false
    });
  },
};
</script>
