<template>
  <div class="workspace">
    <draggable
      :class="{ dragArea: isDragging }"
      :list="cmps"
      group="workspace-cmps"
      @change="updateSite"
      @add="updateCmpId"
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
import { utilService } from "../services/util-service.js";
// import { templateService } from "@/services/template.service.js";

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
      isDragging: false,
    };
  },
  methods: {
    emitItemToEdit() {
      console.log("im emiting");
    },
    updateSite() {
      eventBus.$emit("update-site");
    },
    updateCmpId(ev) {
      const cmpCopy = JSON.parse(JSON.stringify(this.cmps[ev.newIndex]));
      cmpCopy.id = utilService.makeId(9);
      this.cmps.splice(ev.newIndex, 1, cmpCopy);
    },
  },
  created() {
    eventBus.$on("addCmp", () => {
      this.$forceUpdate();
    });
    eventBus.$on("dragStart", () => {
      this.isDragging = true;
    });
    eventBus.$on("dragStop", () => {
      this.isDragging = false;
    });
  },
};
</script>
