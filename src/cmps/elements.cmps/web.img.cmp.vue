<template>
  <section class="web-img" :style="cmp.style" @click="setEditItem">
    <img :src="cmp.info.content" alt="" />
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  props: {
    cmp: Object,
  },
  name: 'web-img',
  components: {},
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
