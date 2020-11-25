
<script>
// allows control in:
// * font
// * fontSize
// * align
// * style: bold, italic, underline
// * lineHeight
// * letterSpacing
// * textShadow
// * color
// * bgcColor
// * padding
// * margin
</script>

<template>
  <div class="edit-txt">
    <button>fontSize</button>
     <!-- <el-slider :min="1" :max="100"></el-slider> -->
    <button>font</button>
    <button>align</button>
    <button>style</button>
    <button>textShadow</button>
    <button @click="setColor">color</button>
    <button>bgcColor</button>
    <button>line height</button>
    <button>letter spacing</button>
    <button>padding</button>
    <button>margin</button>
  </div>
</template>

<script>
export default {
  name: "edit-txt",
  props:{
    cmp: [Object, Array] 
  },
  components: {},
  data() {
    return {};
  },
  created() {
    console.log(this.cmp);
  },
  methods:{
    setColor() {
      this.cmp.style.color = "red"
    }
  }
};
</script>