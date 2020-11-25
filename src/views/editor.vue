<template>
  <div class="editor">
    <work-space />
    <controller :itemToEdit="itemToEdit" />
  </div>
</template>

<script>
import json from "@/data/wap.json";
import workSpace from "@/cmps/workspace.cmp";
import controller from "@/cmps/controller.cmp";
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
};
</script>
