<template>
  <div class="controller-edit">
    <p>I'm edit</p>
    <component :is="itemToEdit" :cmp="cmp"></component>
  </div>
</template>
<script>
import { eventBus } from "../../services/eventbus.service.js";
import webButton from "./button.cmp";
import webContainer from "./container.cmp";
import webImg from "./img.cmp";
import webMap from "./map.cmp";
import webTxt from "./txt.cmp";
import webVideo from "./video.cmp";
import webBody from "./web.cmp";

export default {
  name: "controller-edit",
  components: {
    webButton,
    webContainer,
    webImg,
    webMap,
    webTxt,
    webVideo,
    webBody,
  },
  data() {
    return {
      itemToEdit: null,
      cmp: null,
    };
  },
  created() {
       eventBus.$on("setItem", this.setEditItem)
  },
  methods: {
    setEditItem(cmp) {
      this.cmp = cmp
      this.itemToEdit = cmp.type;
    },
  },
};
</script>