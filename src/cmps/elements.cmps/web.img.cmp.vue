<template>
  <span class="cmp-span">
    <img
      class="web-img"
      :style="cmp.style"
      @click.stop="setEditItem"
      :src="cmp.info.src"
      alt=""
      @mouseover="showEditMenu = true"
      @mouseleave="showEditMenu = false"
    />
    <edit-menu
      v-if="showEditMenu"
      :cmp="cmp"
      @hideMenu="showEditMenu = false"
      @showMenu="showEditMenu = true"
      parent="small"
    />
  </span>
</template>

<script>
import { eventBus } from "@/services/eventbus.service.js";
import editMenu from "@/cmps/web.edit.menu.cmp";

export default {
  props: {
    cmp: Object,
    _rootId: String,
  },
  data() {
    return {
      showEditMenu: false,
    };
  },
  name: "web-img",
  components: {
    editMenu,
  },
  methods: {
    onEdit(ev) {
      this.cmp.info.src = ev.target.innerText;
      eventBus.$emit("update-site");
    },
    setEditItem() {
      eventBus.$emit("openEditor", this.cmp);
      this.$nextTick(() => {
        eventBus.$emit("setItem", this.cmp);
      });
    },
    showMenu() {
      this.$emit("showMenu");
    },
  },
  created() {
    this.cmp._rootId = this._rootId;
  },
};
</script>
<style scoped>
</style>
