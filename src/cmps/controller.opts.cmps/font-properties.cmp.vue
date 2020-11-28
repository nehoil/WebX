<template>
  <div class="font-properties">
    <div class="flex center plr10">
      <button @click="setAlign('left')">align left</button>
      <button @click="setAlign('center')">align center</button>
      <button @click="setAlign('right')">align right</button>
      <button @click="toggleBold">B</button>
      <button @click="toggleItalic">I</button>
      <button @click="toggleUnderline">U</button>
    </div>
    <div class="flex center space plr10">
      <span>Text Shadow</span>
      <el-select
        v-model="textShadow"
        @change="setTextShadow"
        placeholder="Select"
      >
        <el-option value="None">None</el-option>
        <el-option value="Light">Light</el-option>
        <el-option value="Medium">Medium</el-option>
        <el-option value="Strong">Strong</el-option>
      </el-select>
    </div>
    <div class="flex center space plr10">
      <span>Font Size</span>
      <el-slider
        :min="14"
        :max="100"
        v-model="fontSize"
        @input="setFontSize"
      ></el-slider>
    </div>
    <div class="flex center space plr10">
      <span>Letter Spacing</span>
      <el-slider
        :min="1"
        :max="100"
        v-model="letterSpacing"
        @input="setSpacing"
      ></el-slider>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "edit-txt",
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      fontSize: null,
      letterSpacing: null,
      textShadow: null,
      textAlign: null,
      value: "",
    };
  },
  created() {
    if (!this.cmp.style.fontSize) {
      this.cmp.style.fontSize = "unset";
    } else if (this.cmp.style.fontSize !== "unset") {
      var fontSizeNum = this.getNumFromString("fontSize");
      this.fontSize = +fontSizeNum * 16;
    }
    if (!this.cmp.style.letterSpacing) {
      this.cmp.style.letterSpacing = "unset";
    } else if (this.cmp.style.letterSpacing !== "unset") {
      var letterSpacingNum = this.getNumFromString("letterSpacing");
      this.letterSpacing = +letterSpacingNum * 16;
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
    setAlign(align) {
      if (!this.cmp.style.textAlign) this.cmp.style.textAlign = align;
      this.cmp.style.textAlign = align;
      eventBus.$emit("update-site");
    },
    setTextShadow(strength) {
      switch (strength) {
        case "None":
          this.cmp.style.textShadow = "unset";
          break;
        case "Light":
          this.cmp.style.textShadow = "1px 1px 2px #d1c9ca";
          break;
        case "Medium":
          this.cmp.style.textShadow = "3px 2px 3px #b7b0b1";
          break;
        case "Strong":
          this.cmp.style.textShadow = "5px 5px 3px #b7b0b1";
          break;
      }
      eventBus.$emit("update-site");
      this.textShadow = null;
      return this.cmp.style.textShadow;
    },
    setFontSize(size) {
      this.cmp.style.fontSize = size / 16 + "rem";
      eventBus.$emit("update-site");
    },
    setSpacing(size) {
      this.letterSpacing = size;
      this.cmp.style.letterSpacing = size / 16 + "rem";
      eventBus.$emit("update-site");
      this.letterSpacing = null;
    },
    toggleBold() {
      if (this.cmp.style.fontWeight === "unset" || !this.cmp.style.fontWeight)
        this.cmp.style.fontWeight = "bold";
      else this.cmp.style.fontWeight = "unset";
      eventBus.$emit("update-site");
    },
    toggleItalic() {
      if (this.cmp.style.fontStyle === "unset" || !this.cmp.style.fontStyle)
        this.cmp.style.fontStyle = "italic";
      else this.cmp.style.fontStyle = "unset";
      eventBus.$emit("update-site");
    },
    toggleUnderline() {
      if (
        this.cmp.style.textDecoration === "unset" ||
        !this.cmp.style.textDecoration
      )
        this.cmp.style.textDecoration = "underline";
      else this.cmp.style.textDecoration = "unset";
      eventBus.$emit("update-site");
    },
  },
};
</script>
