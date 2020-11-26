<template>
  <section contenteditable class="web-video" :style="cmp.style" @click="setEditItem">
    <iframe
      :src="cmp.info.content"
      class="responsive-iframe"
      frameBorder="0"
    ></iframe>
  </section>
</template>

<script>
import { eventBus } from "@/services/eventbus.service.js";

export default {
  props: {
    cmp: Object,
  },
  name: 'web-video',
  components: {},
  methods: {
    setEditItem(cmp) {
      eventBus.$emit('openEditor', cmp);
      eventBus.$emit('setItem', cmp);
    },
  },
};
</script>
