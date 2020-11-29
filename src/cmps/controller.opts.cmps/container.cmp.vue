<template>
  <div class="edit-container" v-if="cmp">
    <select-color :cmp="cmp"></select-color>

    <div class="flex center space plr10">
      Set Length
      <el-slider
        :min="1"
        :max="1400"
        v-model="minHeight"
        @input="setMinHeight"
      ></el-slider>
    </div>
    <div class="flex center space plr10"></div>
    <div class="flex center space plr10">
      <p>Add Spacing</p>
      <el-slider
        :min="1"
        :max="100"
        v-model="padding"
        @input="setPadding"
      ></el-slider>
    </div>
    <label class="pointer">
      <div class="upload-image">
        <!-- <img :src="cmp.info.src" /> -->
        <i class="el-icon-upload2"></i>Upload Image Background
        <input type="file" @change="uploadImg" />
      </div>
      <div v-if="getIsImage">
        <el-checkbox v-model="image" @change="removeImage"
          >Remove Background Image</el-checkbox
        >
      </div>
    </label>
  </div>
</template>

<script>
import selectColor from "./select-color.cmp";
import { uploadImg } from "../../services/img.upload.service.js";
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
      image: null,
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
    async uploadImg(ev) {
      if (!this.cmp.style.backgroundImage) {
        this.cmp.style.backgroundImage = "";
      }
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.style.backgroundImage = `url(${img.url})`;
      eventBus.$emit("update-site");
    },
    removeImage() {
      this.cmp.style.backgroundImage = "unset";
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
  computed: {
    getIsImage() {
      if (
        this.cmp.style.backgroundImage === "unset" ||
        !this.cmp.style.backgroundImage
      )
        return false;
      else return true;
    },
  },
};
</script>