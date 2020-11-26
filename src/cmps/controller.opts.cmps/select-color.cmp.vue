<template>
  <div class="select-color">
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
  </div>
</template>

<script>
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "select-color",
  props: {
    cmp: [Object, Array],
  },
  components: {},
  methods: {
    setColor(color) {
      this.cmp.style.color = color;
      eventBus.$emit("update-site");
    },
    setBgcColor(bgcColor) {
      this.cmp.style.backgroundColor = bgcColor;
      eventBus.$emit("update-site");
    },
  },
};
</script>
