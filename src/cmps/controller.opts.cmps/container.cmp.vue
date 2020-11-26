
<script>
// allows control in:
// * border radius
// * border
// * bgcColor
// * boxShadow
// * width, height
// * margin, padding
// * adding content (img)
</script>
<template>
  <div class="edit-container" v-if="cmp">
    <div>
      <el-checkbox v-model="border" @change="toggleBorder"
        >Set Border</el-checkbox
      >
    </div>
    <button>height</button>
    <button>img bgc</button>
    <div>
      <p>Background Color</p>
      <el-color-picker
        @active-change="setBgcColor"
        v-model="cmp.style.backgroundColor"
      ></el-color-picker>
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
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "edit-container",
  props: {
    cmp: [Object, Array],
  },
  components: {},
  data() {
    return {
      padding: null,
      border: null,
    };
  },
  created() {},
  methods: {
    toggleBorder() {
      if (this.cmp.style.border === "unset")
        this.cmp.style.border = "1px solid gray";
      else this.cmp.style.border = "unset";
      eventBus.$emit("update-site");
    },
    setBgcColor(bgcColor) {
      this.cmp.style.backgroundColor = bgcColor;
      eventBus.$emit("update-site");
    },
    setPadding(size) {
      console.log(this.cmp);
      this.padding = size;
      this.cmp.style.padding = size / 16 + "rem";
      eventBus.$emit("update-site");
      this.padding = null;
    },
  },
};
</script>