<template>
  <section v-if="cmp.info.cmps" class="web-container">
    <component
      v-for="(cmp, idx) in cmp.info.cmps"
      :is="cmp.type"
      :key="idx"
      :info="cmp.info"
      :cmpStyle="cmp.style"
      :cmp="cmp"
    ></component>
    <button @click="removeCmp(cmp.id)">X</button>
  </section>
</template>

<script>
import { eventBus } from "../services/eventbus.service.js";
import webMap from "@/cmps/elements.cmps/web.map.cmp";
import webTxt from "@/cmps/elements.cmps/web.txt.cmp";
import webVideo from "@/cmps/elements.cmps/web.video.cmp";
import webImg from "@/cmps/elements.cmps/web.img.cmp";
import webForm from "@/cmps/elements.cmps/web.form.cmp";
import webButton from "@/cmps/elements.cmps/web.button.cmp";
import webList from "@/cmps/elements.cmps/web.list.cmp";
// import webCard from "@/cmps/elements.cmps/web.card.cmp";
export default {
  name: "web-container",
  props: {
    cmp: Object,
  },
  components: {
    webTxt,
    webMap,
    webImg,
    webForm,
    webButton,
    webList,
    webVideo,
  },
  methods: {
    removeCmp(cmpId) {
      eventBus.$emit("removeCmp", cmpId)
    },
  },
};
</script>
