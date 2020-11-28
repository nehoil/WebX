<template>
  <div class="el-edit-menu">
    <ul>
      <li @click="removeCmp(cmp.id)"><i class="el-icon-delete"></i></li>
      <li v-if="parent==='container'"><i class="el-icon-document-copy"></i></li>
      <li v-if="parent==='container'" @click="setEditItem"><i class="el-icon-edit"></i></li>
      <li v-if="parent==='container'"><i class="el-icon-arrow-left"></i></li>
      <li v-if="parent==='container'"><i class="el-icon-arrow-right"></i></li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  props: {
    cmp: Object,
    parent: String
  },
  name: 'edit-menu',
  data() {
    return {};
  },
  methods: {
    removeCmp(cmpId) {
      console.log('cmpId',cmpId);
      console.log('this.cmp',this.cmp);
      
      const _rootId = this.cmp._rootId
      eventBus.$emit('removeCmp', {cmpId, _rootId});
      // this.$store.commit('removeCmp', {id: cmpId});
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
  created() {

  },
};
</script>
<style scoped>
</style>
