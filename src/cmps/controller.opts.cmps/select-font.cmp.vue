
<template>
  <div class="select-font">
    <p>Font Family</p>
    <el-select
      v-model="value"
      @change="setFontFamily"
      placeholder="Select Font"
    >
      <el-option
        v-for="font in fonts"
        :key="font.value"
        :label="font.label"
        :value="font.value"
        :style="{ fontFamily: font.value }"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "select-font",
  props: {
    cmp: [Object, Array],
  },
  components: {},
  data() {
    return {
      fonts: [
        {
          value: "abril",
          label: "Abril",
        },
        {
          value: "almondNougat",
          label: "Almond Nougat",
        },
        {
          value: "assistantBold",
          label: "Assistant (Bold)",
        },
        {
          value: "assistantLight",
          label: "Assistant (Light)",
        },
        {
          value: "caviarDreams",
          label: "Caviar Dreams",
        },
        {
          value: "champagneLimousines",
          label: "Champagne Limousines",
        },
        {
          value: "crimsonText",
          label: "Crimson Text",
        },
        {
          value: "fredericka",
          label: "Fredericka The Great",
        },
        {
          value: "raleway",
          label: "Raleway",
        },
        {
          value: "robotomonoLight",
          label: "RobotoMono Light",
        },
        {
          value: "robotomono",
          label: "RobotoMono",
        },
        {
          value: "rubik",
          label: "Rubik",
        },
        {
          value: "sacramento",
          label: "Sacramento",
        },
        {
          value: "sundayMorning",
          label: "Sunday Morning",
        },
      ],
      value: "",
    };
  },
  created() {},
  methods: {
    setFontFamily(font) {
      this.cmp.style.fontFamily = font;
      eventBus.$emit("update-site");
    },
  },
};
</script>
