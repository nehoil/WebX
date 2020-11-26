<template>
  <div class="editor flex">

    <!-- {{siteToEdit.cmps}} -->
    <controller :itemToEdit="itemToEdit" />
    <work-space :cmps="siteToEdit.cmps" />
  </div>
</template>

<script>
import json from "@/data/wap.json";
import workSpace from "@/cmps/workspace.cmp";
import controller from "@/cmps/controller.cmp";
import { eventBus } from "@/services/eventbus.service.js";

export default {
  name: "editor",
  components: {
    workSpace,
    controller,
  },
  data() {
    return {
      siteToEdit: null,
      waps: json,
      itemToEdit: "webImg",
    };
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
  created() {
    this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    eventBus.$on("addCmp", (id) => {
      this.$store.commit({ type: "addCmp", id });
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
      this.$forceUpdate();
    });
    eventBus.$on("removeCmp", (id) => {
      this.$store.commit({ type: "removeCmp", id });
    });
    eventBus.$on("setCmpsToShow", (cmpType) => {
      this.$store.commit({ type: "setCmpsToShow", cmpType });
    });
    eventBus.$on("update-site", () => {
      this.$store.commit({ type: "updateSite", site: this.siteToEdit });
    });
  },
};
</script>
