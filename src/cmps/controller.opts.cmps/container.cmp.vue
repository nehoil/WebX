
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
    <button>borderRadius</button>
    <button>border</button>
    <button>width</button>
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
      <p>padding</p>
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
    };
  },
  created() {},
  methods: {
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