<template>
  <span
    class="web-txt"
    contenteditable="isEdit"
    :style="cmp.style"
    @blur="onEdit"
    @click="setEditItem"
  >
    {{ cmp.info.content }}
  </span>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
export default {
  data() {
    return {
      isEdit: true,
    };
  },
  props: {
    cmp: Object,
  },
  methods: {
    onEdit(ev) {
      this.cmp.info.content = ev.target.innerText;
      eventBus.$emit('update-site');
      // eventBus.$emit('openEditor');
    },
    openEdit() {
      // eventBus.$emit('edit-cmp', this.info);
      // eventBus.$emit('open-edit', this.cmp.type);
    },
    setEditItem(cmp) {
      eventBus.$emit('openEditor', cmp);
      eventBus.$emit('setItem', cmp);
    },
  },
  name: 'web-txt',
  components: {},
};
</script>
<style scoped>
</style>
