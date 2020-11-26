<template>
  <section
    contenteditable
    class="web-button"
    :style="cmp.style"
    v-if="cmp"
    @click="setEditItem"
  >
    <a :href="cmp.info.linkTo"></a>
    <section class="button">{{ cmp.info.content }}</section>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default { 
  props: {
    cmp: Object,
  },
  name: 'web-button',
  data() {
    return {
      isEdit: true,
    };
  },
  methods: {
    onEdit(ev) {
      this.cmp.info.content = ev.target.innerText;
      eventBus.$emit('update-site');
    },
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
  },
};
</script>
<style scoped>
</style>
