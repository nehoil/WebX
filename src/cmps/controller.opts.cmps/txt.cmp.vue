<template>
  <div class="edit-txt" v-if="cmp">
    <select-color :cmp="cmp"></select-color>
    <select-font :cmp="cmp"></select-font>
    <font-properties :cmp="cmp"></font-properties>
    <!-- <div class="flex center space plr10">
      <span>Line Height</span>
      <el-slider
        :min="1"
        :max="100"
        v-model="lineHeight"
        @input="setLineHeight"
      ></el-slider>
    </div> -->
  </div>
</template>

<script>
import selectFont from "./select-font.cmp";
import selectColor from "./select-color.cmp";
import fontProperties from "./font-properties.cmp";
// import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "edit-txt",
  props: {
    cmp: [Object, Array],
  },
  components: {
    selectFont,
    selectColor,
    fontProperties,
  },
  data() {
    return {
      // fontSize: null,
      // lineHeight: null,
      // letterSpacing: null,
      textShadow: null,
      value: "",
    };
  },
  created() {
    // if (!this.cmp.style.lineHeight) {
    //   this.cmp.style.lineHeight = "normal";
    // } else {
    //   var lineHeightNum = this.getNumFromString("lineHeight");
    //   this.lineHeight = +lineHeightNum * 16;
    // }
  },
  methods: {
    // getNumFromString(styleProperty) {
    //   if (this.cmp.style[styleProperty].match(/\d+/g).flat().length === 2) {
    //     return this.cmp.style[styleProperty].match(/\d+/g).flat().join(".");
    //   } else {
    //     return this.cmp.style[styleProperty].match(/\d+/g).flat().join();
    //   }
    // },
    // setLineHeight(size) {
    //   this.lineHeight = size;
    //   this.cmp.style.lineHeight = size / 16 + "rem";
    //   eventBus.$emit("update-site");
    //   this.lineHeight = null;
    // },
  },
};
</script>
