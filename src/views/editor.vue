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
