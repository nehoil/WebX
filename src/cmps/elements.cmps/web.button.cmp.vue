<template>
      <a contenteditable
    class="web-button"
    :style="cmp.style"
    v-if="cmp"
    @click="setEditItem" :href="cmp.info.linkTo">{{cmp.info.content}}</a>
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
