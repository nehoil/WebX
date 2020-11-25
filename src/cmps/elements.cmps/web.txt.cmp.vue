<template>
  <span class="web-txt" :style="cmpStyle" @blur="onEdit">
    {{ info.content }}
  </span>
</template>

<script>
import { eventBus } from "@/services/eventbus.service.js";
export default {
  data() {
    return {
      isEdit: false,
    };
  },
  props: {
    info: Object,
    cmpStyle: Object,
  },
  methods: {
    onEdit(ev) {
      this.info.content = ev.target.innerText;
      eventBus.$emit("update-site");
    },
  },
  name: "web-txt",
  components: {},
};
</script>
<style scoped>
</style>
