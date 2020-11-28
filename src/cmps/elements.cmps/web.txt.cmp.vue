<template>
  <span
    class="cmp-span"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = true"
  >
  <p
    class="web-txt"
    contenteditable="isEdit"
    :style="cmp.style"
    @blur="onEdit"
    @click.stop="setEditItem"
  >
    {{ cmp.info.content }}
  </p>
    <edit-menu v-if="showEditMenu" :cmp="cmp"/>
  </span>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import editMenu from '@/cmps/web.edit.menu.cmp';

export default {
  data() {
    return {
      isEdit: true,
      showEditMenu: true
    };
  },
  props: {
    cmp: Object,
    _rootId: String,
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
  name: 'web-txt',
  components: {
    editMenu,
  },
  created() {
    this.cmp._rootId = this._rootId;
  },
};
</script>
<style scoped>
</style>
