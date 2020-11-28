<template>
  <div class="select-color">
    <!-- <div>
      <p>Color</p>

    </div> -->
    <div v-if="colors">
      <div class="colors-pagination flex center">
        <i
          @click="changePage(-1)"
          class="el-icon-arrow-left page-link pointer"
        ></i>
        <ul
          v-for="colors in displayedColors"
          :key="colors.idx"
          class="pointer palette"
        >
          <i
            class="el-icon-refresh-right bgc pointer color-element"
            @click="setColor('unset')"
          ></i>
          <i
            class="el-icon-picture-outline bgc pointer color-element"
            @click="textOrBgc = 'backgroundColor'"
          ></i>
          <!-- :class="isTextOrBgc(  )" -->

          <i
            v-show="cmp.type !== 'web-container'"
            class="pointer color-element color-text"
            @click="textOrBgc = 'color'"
            >A</i
          >
          <li
            v-for="color in colors"
            @click="setColor(color)"
            :key="color.idx"
            :style="{ backgroundColor: color }"
          ></li>
          <span class="change-color-method"
            >Not a palette fan?
            <el-color-picker
              @active-change="setColor"
              v-model="cmp.style.color"
            ></el-color-picker
          ></span>
        </ul>
        <i
          @click="changePage(1)"
          class="el-icon-arrow-right page-link pointer"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { colorService } from "../../services/color.service";
import { eventBus } from "../../services/eventbus.service.js";
export default {
  name: "select-color",
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      colors: null,
      page: 1,
      perPage: 1,
      pages: [],
      textOrBgc: "backgroundColor",
    };
  },
  created() {
    const colorPalette = colorService.getColors();
    this.colors = colorPalette;
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.colors.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    },
    paginate(colors) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return colors.slice(from, to);
    },
    setColor(color, styleProperty = this.textOrBgc) {
      if (!this.cmp.style[styleProperty])
        this.cmp.style[styleProperty] = "unset";
      this.cmp.style[styleProperty] = color;
      eventBus.$emit("update-site");
    },
    changePage(diff) {
      if (this.page >= this.colors.length && diff === 1) this.page = 0;
      if (this.page === 1 && diff === -1) this.page = this.colors.length + 1;
      this.page += diff;
    },
  },
  computed: {
    displayedColors() {
      return this.paginate(this.colors);
    },
  },
  watch: {
    colors() {
      this.setPages();
    },
  },
};
</script>
