<template>
  <div class="edit-txt">
    <div>
    <p>Font Size</p>
     <el-slider :min="14" :max="100" v-model="fontSize" @input="setFontSize"></el-slider>
     </div>
    <button>font</button>
    <button>align</button>
    <button @click="toggleBold">B</button>
    <button @click="toggleItalic">I</button>
    <button @click="toggleUnderline">U</button>
    <p>Text Shadow</p>
         <el-select v-model="textShadow" @change="setTextShadow" placeholder="Select">
    <el-option value="None">None</el-option>
    <el-option value="Light">Light</el-option>
    <el-option value="Medium">Medium</el-option>
    <el-option value="Strong">Strong</el-option>
  </el-select>
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
      letterSpacing: null,
      textShadow: null,
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
       setTextShadow(strength) {
 switch (strength) {
        case 'None':
           this.cmp.style.textShadow = 'unset'
            break;
        case 'Light':
           this.cmp.style.textShadow = '1px 1px 2px #d1c9ca'
            break;
        case 'Medium':
           this.cmp.style.textShadow = '3px 2px 3px #b7b0b1'
            break;
        case 'Strong':
            this.cmp.style.textShadow = '5px 5px 3px #b7b0b1'
            break;
 }
      eventBus.$emit('update-site');
      return this.cmp.style.textShadow
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
      console.log(this.cmp.style);
          },
        toggleUnderline(){
    if (!this.cmp.style.textDecoration  || this.cmp.style.textDecoration === "unset" ) this.cmp.style.textDecoration = "underline"
else this.cmp.style.textDecoration = 'unset'
         eventBus.$emit('update-site');
           console.log(this.cmp.style);
    }

  }
};

</script>
