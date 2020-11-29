<template>
  <span
    class="cmp-span"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = false"
  >
    <p
      class="web-txt"
      :class="cmp.class"
      contenteditable="isEdit"
      :style="cmp.style"
      @blur="onEdit"
      @click.stop="setEditItem"
    >
      {{ cmp.info.content }}
    </p>
    <edit-menu v-if="showEditMenu" :cmp="cmp" />
  </span>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
import editMenu from '@/cmps/web.edit.menu.cmp';

export default {
  data() {
    return {
      isEdit: true,
      showEditMenu: false,
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
    if (!this.cmp.style.textShadow) {
      this.cmp.style.textShadow = 'unset';
      console.log('this cmp after change', this.cmp.style);
    }
  },
};
</script>
<style scoped>
</style>
