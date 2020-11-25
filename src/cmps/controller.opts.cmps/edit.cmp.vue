<template>
  <div class="controller-edit">
    <p>I'm edit</p>
    <component :is="itemToEdit"></component>
  </div>
</template>
<script>
// import webButton from "./button.cmp";
// import webContainer from "./container.cmp";
import webImg from "./img.cmp";
// import webMap from "./map.cmp";
// import webTxt from "./txt.cmp";
// import webVideo from "./video.cmp";
// import webBody from "./web.cmp";

export default {
  name: "controller-edit",
  props: {
    itemToEdit: String,
  },
  components: {
    // webButton,
    // webContainer,
    webImg,
    // webMap,
    // webTxt,
    // webVideo,
    // webBody,
  },
  data() {
    return {
      cmpToEdit: null,
    };
  },
};
</script>