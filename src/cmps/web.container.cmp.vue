<template>
  <section
    v-if="cmp.info.cmps"
    @click.self="setEditItem"
    @mouseover="showEditMenu = true"
    @mouseleave="showEditMenu = false"
    class="web-container"
    :style="this.cmp.style"
  >
    <component
      v-for="(currCmp, idx) in cmp.info.cmps"
      :is="currCmp.type"
      :key="idx"
      :info="currCmp.info"
      :cmpStyle="currCmp.style"
      :cmp="currCmp"
      :_rootId="cmp.id"
    >
    </component>
    <edit-menu v-if="showEditMenu" :cmp="cmp" />
  </section>
</template>

<script>
import editMenu from "@/cmps/web.edit.menu.cmp";
import { eventBus } from "../services/eventbus.service.js";
import webMap from "@/cmps/elements.cmps/web.map.cmp";
import webTxt from "@/cmps/elements.cmps/web.txt.cmp";
import webVideo from "@/cmps/elements.cmps/web.video.cmp";
import webImg from "@/cmps/elements.cmps/web.img.cmp";
import webForm from "@/cmps/elements.cmps/web.form.cmp";
import webButton from "@/cmps/elements.cmps/web.button.cmp";
import webList from "@/cmps/elements.cmps/web.list.cmp";
import webDiv from "@/cmps/elements.cmps/web.div.cmp";
export default {
  name: "web-container",
  props: {
    cmp: Object,
  },
  data() {
    return {
      showEditMenu: false,
    };
  },
  components: {
    webTxt,
    webMap,
    webImg,
    webForm,
    webButton,
    webList,
    webVideo,
    editMenu,
    webDiv,
  },
  methods: {
    setEditItem() {
      console.log(this.cmp);
      eventBus.$emit("openEditor", this.cmp);
      this.$nextTick(() => {
        eventBus.$emit("setItem", this.cmp);
      });
    },
  },
<<<<<<< HEAD
  created() {},
=======
  created() {
  },
>>>>>>> 3a38d391022a67058ccab68b603d3f7ea1d4e500
};
</script>
