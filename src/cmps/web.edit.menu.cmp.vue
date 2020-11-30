<template>
  <div :class="editMenuClass">
    <ul>
      <li :class="removeBtnClass" @mouseenter="emitShow" @click="removeCmp(cmp.id)">
        <i v-if="parent === 'container'" class="el-icon-delete"></i>
        <i v-else class="el-icon-close"></i>
      </li>
      <li v-if="parent === 'container'">
        <i class="el-icon-document-copy"></i>
      </li>
      <li v-if="parent === 'container'" @click="setEditItem">
        <i class="el-icon-edit"></i>
      </li>
      <li v-if="parent === 'container'"><i class="el-icon-arrow-left"></i></li>
      <li v-if="parent === 'container'"><i class="el-icon-arrow-right"></i></li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';

export default {
  props: {
    cmp: Object,
    parent: String,
  },
  name: 'edit-menu',
  data() {
    return {};
  },
  computed: {
    removeBtnClass() {
      if (this.parent === 'small') return 'small-remove-btn'
      return ''
    },
    editMenuClass() {
      if (this.parent === 'container') return 'el-edit-menu'
      return 'el-edit-menu-small'
    },
  },
  methods: {
    emitShow() {
      this.$emit('showMenu');
    },
    emitHide() {
      this.$emit('hideMenu');
    },
    removeCmp(cmpId) {
      const _rootId = this.cmp._rootId;
      eventBus.$emit('removeCmp', { cmpId, _rootId });
    },
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
  },
  created() {},
};
</script>
<style scoped>
</style>
