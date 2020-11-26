<template>
  <div class="edit-txt">
    <div>
    <p>Font Size</p>
     <el-slider :min="14" :max="100" v-model="fontSize" @input="setFontSize"></el-slider>
     </div>
    <button>font</button>
    <button>align</button>
    <button @click="toggleBold">Bold</button>
    <button @click="toggleItalic">Italic</button>
    <button @click="toggleUnderline">Underline</button>
    <button>textShadow</button>
  <div>
  <p>Color</p>
    <el-color-picker @active-change="setColor" v-model="cmp.style.color"></el-color-picker>
    </div>
      <div>
  <p>Background Color</p>
    <el-color-picker @active-change="setBgcColor" v-model="cmp.style.backgroundColor"></el-color-picker>
    </div>
    <div>
    <p>Letter Spacing</p>
     <el-slider :min="1" :max="100" v-model="letterSpacing" @input="setSpacing"></el-slider>
     </div>
     <div>
         <p>Line Height</p>
     <el-slider :min="1" :max="100" v-model="lineHeight" @input="setLineHeight"></el-slider>
     </div>
  </div>
</template>

<script>
import {eventBus} from '../../services/eventbus.service.js'
export default {
  name: "edit-txt",
  props:{
    cmp: [Object, Array] 
  },
  components: {},
  data() {
    return {
      fontSize: null,
      lineHeight: null,
      letterSpacing: null
    };
  },
  created() {
  },
  methods:{
    setColor(color) {
      this.cmp.style.color = color
      eventBus.$emit('update-site');
    },
    setBgcColor(bgcColor) {
      console.log(bgcColor);
      this.cmp.style.backgroundColor = bgcColor
            eventBus.$emit('update-site');
    },
    setFontSize(size) {
       this.fontSize = size
      this.cmp.style.fontSize = (size/16)+"rem"
            eventBus.$emit('update-site');
      this.fontSize = null
    },
        setSpacing(size) {
       this.letterSpacing = size
      this.cmp.style.letterSpacing = (size/16)+"rem"
            eventBus.$emit('update-site');
      this.letterSpacing = null
    },
        setLineHeight(size) {
       this.lineHeight = size
      this.cmp.style.lineHeight = (size/16)+"rem"
            eventBus.$emit('update-site');
      this.lineHeight = null
    },
    toggleBold(){
      if (this.cmp.style.fontWeight === "unset" || !this.cmp.style.fontWeight) this.cmp.style.fontWeight = "bold"
else this.cmp.style.fontWeight = 'unset'
      eventBus.$emit('update-site');
    },
        toggleItalic(){
     if (!this.cmp.style.fontStyle || this.cmp.style.fontStyle === "unset" ) this.cmp.style.fontStyle = "italic"
else this.cmp.style.fontStyle = 'unset'
      eventBus.$emit('update-site');
          },
        toggleUnderline(){
    if (!this.cmp.style.textDecoration  || this.cmp.style.textDecoration === "unset" ) this.cmp.style.textDecoration = "underline"
else this.cmp.style.textDecoration = 'unset'
         eventBus.$emit('update-site');
    }

  }
};

</script>
