
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
    <button>bgcColor</button>
    <div>
      <p>padding</p>
      <el-slider
        :min="1"
        :max="100"
        v-model="padding"
        @input="setPadding"
      ></el-slider>
      <p>margin</p>
      <el-slider
        :min="1"
        :max="100"
        v-model="margin"
        @input="setMargin"
      ></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit-container",
  props: {
    cmp: [Object, Array],
  },
  components: {},
  data() {
    return {};
  },
  created() {
    console.log(this.cmp);
  },
  methods: {
    setMargin(size) {
      this.margin = size;
      this.cmp.style.margin = size / 16 + "rem";
      this.margin = null;
    },
    setPadding(size) {
      this.padding = size;
      this.cmp.style.padding = size / 16 + "rem";
      this.padding = null;
    },
  },
};
</script>