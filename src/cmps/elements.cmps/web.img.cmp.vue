<template>
  <span class="cmp-span">
    <img
      class="web-img"
      :style="cmp.style"
      @click.stop="setEditItem"
      :src="cmp.info.src"
      alt=""
      @mouseover="showEditMenu = true"
      @mouseleave="showEditMenu = true"
    />
    <edit-menu v-if="showEditMenu" :cmp="cmp" />
  </span>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import editMenu from '@/cmps/web.edit.menu.cmp';

export default {
  props: {
    cmp: Object,
    _rootId: String,
  },
  data() {
    return {
      showEditMenu: true,
    };
  },
  name: 'web-img',
  components: {
    editMenu,
  },
  methods: {
    onEdit(ev) {
      this.cmp.info.src = ev.target.innerText;
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
    this.cmp._rootId = this._rootId;
  },
};
</script>
<style scoped>
</style>
