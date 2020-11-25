<template>
  <div class="editor">
    <controller :itemToEdit="itemToEdit" />
    <work-space />
  </div>
</template>

<script>
import json from "@/data/wap.json";
import workSpace from "@/cmps/workspace.cmp";
import controller from "@/cmps/controller.cmp";
// import webStore from "@/store/web.store.js";
import { eventBus } from "@/services/eventbus.service.js";

export default {
  name: "editor",
  components: {
    workSpace,
    controller,
  },
  data() {
    return {
      waps: json,
      itemToEdit: "webImg",
    };
  },
  created() {
    eventBus.$on("addCmp", (type) => {
      console.log("add", type);
      this.$store.commit({ type: "addCmp", cmpType: type })
    });
  },
};
</script>
