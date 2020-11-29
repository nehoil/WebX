<template>
  <div class="font-properties">
    <el-collapse accordion>
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span>Text Styling</span>
        </template>
        <div>
          <button @click="setAlign('left')" class="button-reset">
            <div class="icon-set" v-html="alignLeft"></div>
          </button>
          <button @click="setAlign('center')" class="button-reset">
            <div class="icon-set" v-html="alignCenter"></div>
          </button>
          <button class="button-reset" @click="setAlign('right')">
            <div class="icon-set" v-html="alignRight"></div>
          </button>
        </div>
        <button @click="toggleBold" class="button-reset">B</button>
        <button @click="toggleItalic" class="button-reset">I</button>
        <button @click="toggleUnderline" class="button-reset">U</button>
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
            :min="0"
            :max="100"
            v-model="letterSpacing"
            @input="setSpacing"
          ></el-slider>
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
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { iconService } from '../../services/icon-service.js';
import { eventBus } from '../../services/eventbus.service.js';
export default {
  name: 'edit-txt',
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      fontSize: null,
      letterSpacing: null,
      textShadow: null,
      textAlign: null,
      spacingInput: 0,
      fontSizeInput: 0,
      alignRight: iconService.alignRight(),
      alignLeft: iconService.alignLeft(),
      alignCenter: iconService.alignCenter(),
      value: '',
    };
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal, oldVal) {
        if (newVal.id !== oldVal.id) {
          this.textShadow = this.cmp.style.textShadow;
          if (this.cmp.style.letterSpacing !== 'unset' && this.cmp.style.letterSpacing) this.letterSpacing = +this.getNumFromString('letterSpacing');
          this.textAlign = this.cmp.style.textAlign;
        }
      },
    },
  },
  created() {
    if (!this.cmp.style.fontSize) {
      this.cmp.style.fontSize = 'unset';
    } else if (this.cmp.style.fontSize !== 'unset') {
      var fontSizeNum = this.getNumFromString('fontSize');
      this.fontSize = +fontSizeNum * 16;
    }
    if (!this.cmp.style.letterSpacing) {
      this.cmp.style.letterSpacing = 'unset';
    } else if (this.cmp.style.letterSpacing !== 'unset') {
      var letterSpacingNum = this.getNumFromString('letterSpacing');
      this.letterSpacing = +letterSpacingNum * 16;
    }
  },
  methods: {
    getNumFromString(styleProperty) {
      if (this.cmp.style[styleProperty].match(/\d+/g).flat().length === 2) {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join('.');
      } else {
        return this.cmp.style[styleProperty].match(/\d+/g).flat().join();
      }
    },

    setAlign(align) {
      if (!this.cmp.style.textAlign) this.cmp.style.textAlign = align;
      this.cmp.style.textAlign = align;
      eventBus.$emit('update-site');
    },
    setTextShadow(strength) {
      switch (strength) {
        case 'None':
          this.cmp.style.textShadow = 'unset';
          break;
        case 'Light':
          this.cmp.style.textShadow = '1px 1px 2px #d1c9ca';
          break;
        case 'Medium':
          this.cmp.style.textShadow = '3px 2px 3px #b7b0b1';
          break;
        case 'Strong':
          this.cmp.style.textShadow = '5px 5px 3px #b7b0b1';
          break;
      }
      eventBus.$emit('update-site');
      eventBus.$emit('changeTxt');
      console.log('this.cmp.style.textShadow', this.cmp.style.textShadow);
      return this.cmp.style.textShadow;
    },
    setFontSize(size) {
      this.fontSizeInput++;
      if (this.fontSizeInput <= 1) return;
      this.cmp.style.fontSize = size / 16 + 'rem';
      eventBus.$emit('update-site');
    },
    setSpacing(size) {
      this.spacingInput++;
      if (this.spacingInput <= 1) return;
      this.letterSpacing = size;
      this.cmp.style.letterSpacing = size / 16 + 'rem';
      eventBus.$emit('update-site');
      eventBus.$emit('changeTxt');
      // this.letterSpacing = null;
    },
    toggleBold() {
      if (this.cmp.style.fontWeight === 'unset' || !this.cmp.style.fontWeight)
        this.cmp.style.fontWeight = 'bold';
      else this.cmp.style.fontWeight = 'unset';
      eventBus.$emit('update-site');
    },
    toggleItalic() {
      if (this.cmp.style.fontStyle === 'unset' || !this.cmp.style.fontStyle)
        this.cmp.style.fontStyle = 'italic';
      else this.cmp.style.fontStyle = 'unset';
      eventBus.$emit('update-site');
      eventBus.$emit('changeTxt');
    },
    toggleUnderline() {
      if (
        this.cmp.style.textDecoration === 'unset' ||
        !this.cmp.style.textDecoration
      )
        this.cmp.style.textDecoration = 'underline';
      else this.cmp.style.textDecoration = 'unset';
      eventBus.$emit('update-site');
      eventBus.$emit('changeTxt');
    },
  },
};
</script>
