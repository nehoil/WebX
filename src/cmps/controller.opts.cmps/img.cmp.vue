<template>
  <div class="edit-img">
    <label class="pointer">
      <div class="upload-image">
        <!-- <img :src="cmp.info.src" /> -->
        <i class="el-icon-upload2"></i>Change By Upload
        <input type="file" @change="uploadImg" />
      </div>
    </label>
    <p class="change-url" @click="isToShowLink = !isToShowLink">
      <i class="el-icon-edit"></i>Change By URL
    </p>
    <el-input
      class="link-input"
      v-if="isToShowLink"
      @input="changeLinkTo"
      @keyup.enter="changeLinkTo"
      placeholder="Your link here"
      v-model="cmp.info.src"
    ></el-input>
    <el-checkbox v-model="isBorder" @change="toggleBorder" class="change-image"
      >Change Border</el-checkbox
    >
    <div class="flex center space plr10">
      <p>Radius</p>
      <el-slider
        :min="1"
        :max="50"
        v-model="borderRadius"
        @input="setBorderRadius"
      ></el-slider>
    </div>
    <div class="flex center space plr10">
      <p>Change Size</p>
      <el-slider
        :min="1"
        :max="100"
        v-model="width"
        @input="setWidth"
      ></el-slider>
    </div>
  </div>
</template>

<script>
import { uploadImg } from "../../services/img.upload.service.js";
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "edit-img",
  props: {
    cmp: [Object, Array],
  },
  components: {},
  data() {
    return {
      borderRadius: null,
      isBorder: null,
      width: null,
      isToShowLink: false,
    };
  },
  created() {
    var widthNum;
    var borderRadiusNum;
    if (!this.cmp.style.width || this.cmp.style.width === "unset") {
      this.cmp.style.width === "100%";
      this.width = 100;
    } else if (this.cmp.style.width && this.cmp.style.width !== "unset") {
      widthNum = this.getNumFromString("width");
      this.width = +widthNum;
    }
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
    async uploadImg(ev) {
      let res = uploadImg(ev);
      let img = await res;
      this.cmp.info.src = img.url;
      eventBus.$emit("update-site");
    },
    changeLinkTo(link) {
      this.cmp.info.src = link;
      eventBus.$emit("update-site");
    },
    toggleBorder() {
      if (this.cmp.style.border === "unset")
        this.cmp.style.border = "1px solid gray";
      else this.cmp.style.border = "unset";
      eventBus.$emit("update-site");
    },
    setBorderRadius(percent) {
      this.borderRadius = percent;
      this.cmp.style.borderRadius = percent + "%";
      eventBus.$emit("update-site");
      this.borderRadius = null;
    },
    setWidth(percent) {
      this.cmp.style.width = percent + "%";
      eventBus.$emit("update-site");
      this.width = percent;
    },
  },
};
</script>