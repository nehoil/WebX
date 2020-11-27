<template>
  <div class="edit-container" v-if="cmp">
    <div>
      Set Length
      <el-slider
        :min="1"
        :max="1400"
        v-model="minHeight"
        @input="setMinHeight"
      ></el-slider>
    </div>
    <button>img bgc</button>
    <div>
      <select-color :cmp="cmp"></select-color>
    </div>
    <div>
      <p>Add Spacing</p>
      <el-slider
        :min="1"
        :max="100"
        v-model="padding"
        @input="setPadding"
      ></el-slider>
    </div>
  </div>
</template>

<script>
import selectColor from "./select-color.cmp";
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "edit-container",
  props: {
    cmp: [Object, Array],
  },
  components: {
    selectColor,
  },
  data() {
    return {
      padding: null,
      minHeight: null,
    };
  },
  created() {
    if (!this.cmp.style) this.cmp.style = {};
    if (!this.cmp.style.minHeight) {
      this.cmp.style.minHeight = "unset";
    } else if (
      this.cmp.style.minHeight &&
      this.cmp.style.minHeight !== "unset"
    ) {
      var minHeightNum = this.getNumFromString("minHeight");
      this.minHeight = +minHeightNum * 16;
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
    setMinHeight(size) {
      this.minHeight = size;
      this.cmp.style.minHeight = size / 16 + "rem";
      eventBus.$emit("update-site");
      this.minHeight = null;
    },
    setBgcColor(bgcColor) {
      this.cmp.style.backgroundColor = bgcColor;
      eventBus.$emit("update-site");
    },
    setPadding(size) {
      if (!this.cmp.style.padding) this.cmp.style.padding = "unset";
      this.padding = size;
      this.cmp.style.padding = size / 16 + "rem";
      eventBus.$emit("update-site");
      this.padding = null;
    },
  },
};
</script>