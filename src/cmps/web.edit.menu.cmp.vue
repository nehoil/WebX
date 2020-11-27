<template>
  <div class="el-edit-menu">
    <ul>
      <li @click="removeCmp(cmp.id)"><i class="el-icon-delete"></i></li>
      <li><i class="el-icon-document-copy"></i></li>
      <li @click="setEditItem"><i class="el-icon-edit"></i></li>
      <li><i class="el-icon-arrow-left"></i></li>
      <li><i class="el-icon-arrow-right"></i></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  props: {
    cmp: Object,
  },
  name: 'edit-menu',
  data() {
    return {};
  },
  methods: {
    removeCmp(cmpId) {
      const id = cmpId
      // this.$store.commit('removeCmp', {id: cmpId});
      eventBus.$emit('removeCmp', id, this.cmp._rootId);
    },
    onEdit() {
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
