<template>
  <div class="edit-btn">
    <p><i class="el-icon-edit"></i>Insert URL</p>
    <el-input
      @input="changeLinkTo"
      placeholder="Your link here"
      v-model="cmp.linkTo"
    ></el-input>
    <select-font :cmp="cmp"></select-font>
    <el-checkbox v-model="isBorder" @change="toggleBorder"
      >Set Border</el-checkbox
    >
    <div>
      <p>Font Size</p>
      <el-slider
        :min="14"
        :max="100"
        v-model="fontSize"
        @input="setFontSize"
      ></el-slider>
    </div>
    <button>font</button>
    <button>align</button>
    <button @click="toggleBold">B</button>
    <button @click="toggleItalic">I</button>
    <button @click="toggleUnderline">U</button>
    <div>
      <p>Radius</p>
      <el-slider
        :min="1"
        :max="50"
        v-model="borderRadius"
        @input="setBorderRadius"
      ></el-slider>
    </div>
    <p>Text Shadow</p>
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
    <div>
      <p>Color</p>
      <el-color-picker
        @active-change="setColor"
        v-model="cmp.style.color"
      ></el-color-picker>
    </div>
    <div>
      <p>Background Color</p>
      <el-color-picker
        @active-change="setBgcColor"
        v-model="cmp.style.backgroundColor"
      ></el-color-picker>
    </div>
    <div>
      <p>Letter Spacing</p>
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
import selectFont from "./select-font.cmp";
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "edit-btn",
  props: {
    cmp: [Object, Array],
  },
  components: {
    selectFont,
  },
  data() {
    return {
      fontSize: null,
      lineHeight: null,
      letterSpacing: null,
      textShadow: null,
      borderRadius: null,
      isBorder: null,
    };
  },
  created() {
    if (this.cmp.style.fontSize) {
      var fontSizeNum = this.getNumFromString("fontSize");
      this.fontSize = +fontSizeNum * 16;
    }
    if (this.cmp.style.lineHeight) {
      var lineHeightNum = this.getNumFromString("lineHeight");
      this.lineHeight = +lineHeightNum * 16;
    }
    if (this.cmp.style.letterSpacing) {
      var letterSpacingNum = this.getNumFromString("letterSpacing");
      this.letterSpacing = +letterSpacingNum * 16;
    }
    if (this.cmp.style.borderRadius) {
      var borderRadiusNum = this.getNumFromString("borderRadius");
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
      return this.cmp.style.textShadow;
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
    setColor(color) {
      this.cmp.style.color = color;
      eventBus.$emit("update-site");
    },
    setBgcColor(bgcColor) {
      this.cmp.style.backgroundColor = bgcColor;
      eventBus.$emit("update-site");
    },
    setFontSize(size) {
      this.fontSize = size;
      this.cmp.style.fontSize = size / 16 + "rem";
      eventBus.$emit("update-site");
      this.fontSize = null;
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
      if (!this.cmp.style.fontStyle || this.cmp.style.fontStyle === "unset")
        this.cmp.style.fontStyle = "italic";
      else this.cmp.style.fontStyle = "unset";
      eventBus.$emit("update-site");
    },
    toggleUnderline() {
      if (
        !this.cmp.style.textDecoration ||
        this.cmp.style.textDecoration === "unset"
      )
        this.cmp.style.textDecoration = "underline";
      else this.cmp.style.textDecoration = "unset";
      eventBus.$emit("update-site");
    },
  },
};
</script>