<template>
  <div class="edit-btn">
    <p><i class="el-icon-edit"></i>Insert URL</p>
    <el-input
      @input="changeLinkTo"
      placeholder="Your link here"
      v-model="cmp.linkTo"
    ></el-input>
    <select-font :cmp="cmp"></select-font>
    <font-properties :cmp="cmp"></font-properties>
    <el-checkbox v-model="border" @change="toggleBorder"
      >Set Border</el-checkbox
    >
    <div>
      <p>Radius</p>
      <el-slider
        :min="1"
        :max="50"
        v-model="borderRadius"
        @input="setBorderRadius"
      ></el-slider>
    </div>
    <select-color :cmp="cmp"></select-color>
  </div>
</template>

<script>
import selectFont from "./select-font.cmp";
import selectColor from "./select-color.cmp";
import fontProperties from "./font-properties.cmp";
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "edit-btn",
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
      lineHeight: null,
      borderRadius: null,
      border: null,
    };
  },
  created() {
    var borderRadiusNum;
    if (!this.cmp.style.borderRadius) {
      this.cmp.style.borderRadius = "unset";
    } else if (
      this.cmp.style.borderRadius &&
      this.cmp.style.borderRadius !== "unset"
    ) {
      borderRadiusNum = this.getNumFromString("borderRadius");
      this.borderRadius = +borderRadiusNum;
    }
  },
  methods: {
    getNumFromString(styleProperty) {
      if (this.cmp.style[styleProperty].match(/\d+/g).flat().length === 2) {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join(".");
      } else {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join();
      }
    },
    changeLinkTo(link) {
      this.cmp.linkTo = link;
      eventBus.$emit("update-site");
    },
    toggleBorder() {
      if (this.cmp.style.border === "unset")
        this.cmp.style.border = "1px solid gray";
      else this.cmp.style.border = "unset";
      eventBus.$emit("update-site");
    },
    setBorderRadius(size) {
      this.cmp.style.borderRadius = size / 16 + "rem";
      eventBus.$emit("update-site");
    },
  },
};
</script>