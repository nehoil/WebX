<template>
  <div class="edit-btn">
    <div class="plr10">
      <el-input
        @input="changeLinkTo"
        placeholder="Attach Link And Press Enter"
        v-model="cmp.linkTo"
        suffix-icon="el-icon-edit"
      ></el-input>
    </div>
    <el-checkbox v-model="border" @change="toggleBorder"
      >Change Border</el-checkbox
    >
    <select-color :cmp="cmp"></select-color>
    <select-font :cmp="cmp"></select-font>
    <font-properties :cmp="cmp"></font-properties>

    <div class="flex center space plr10">
      <p>Radius</p>
      <el-slider
        :max="100"
        v-model="borderRadius"
        @input="setBorderRadius"
      ></el-slider>
    </div>
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
    if (!this.cmp.style.borderRadius) {
      this.cmp.style.borderRadius = "0px";
      this.borderRadius = 0;
    } else if (
      this.cmp.style.borderRadius &&
      this.cmp.style.borderRadius !== "unset"
    ) {
      this.borderRadius = +this.getNumFromString("borderRadius");
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
      console.log(this.borderRadius, "function");
      console.log(this.cmp.style.borderRadius, "function");
      this.cmp.style.borderRadius = size + "px";
      eventBus.$emit("update-site");
    },
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.id !== oldVal.id) {
          console.log(this.borderRadius, "watch");
          console.log(this.cmp.style.borderRadius, "watch");
          if (!this.cmp.style.borderRadius) {
            this.borderRadius = null;
            this.cmp.style.borderRadius = "0px";
          } else if (
            this.cmp.style.borderRadius &&
            this.cmp.style.borderRadius !== "unset"
          ) {
            this.borderRadius = +this.getNumFromString("borderRadius");
          }
        }
      },
    },
  },
};
</script>