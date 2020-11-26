<template>
  <div class="edit-img">
     <p><i class="el-icon-edit"></i>Change By URL</p>
    <el-input @input="changeLinkTo" @keyup.enter="changeLinkTo" placeholder="Your link here" v-model="cmp.linkTo"></el-input>
    <el-checkbox v-model="isBorder" @change="toggleBorder">Set Border</el-checkbox>
         <div>
     <p>Radius</p>
     <el-slider :min="1" :max="50" v-model="borderRadius" @input="setBorderRadius"></el-slider>
     </div>
     <div>
          <p>Change Size</p>
     <el-slider v-model="width" @input="setWidth"></el-slider>
     </div>
  </div>
</template>

<script>

import {eventBus} from '../../services/eventbus.service.js'
export default {
  name: "edit-img",
      props:{
    cmp: [Object, Array] 
  },
  components: {},
  data() {
    return { 
      borderRadius: null,
      isBorder: null,
      width: 50,
    }
  },
   methods:{
   changeLinkTo(link){
     this.cmp.linkTo = link;
       eventBus.$emit('update-site');
   },
   toggleBorder() {
     if (this.cmp.style.border === 'unset') this.cmp.style.border = '1px solid gray'
     else this.cmp.style.border = 'unset'
       eventBus.$emit('update-site');
   },
   setBorderRadius(percent) {
     this.cmp.style.borderRadius = percent+'%'
   eventBus.$emit('update-site');
   },
      setWidth(percent) {
     this.cmp.style.width = percent+'%'
   eventBus.$emit('update-site');
   this.width = percent
   },
}
}
</script>