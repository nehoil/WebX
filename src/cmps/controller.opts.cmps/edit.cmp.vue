<template>
  <div class="controller-edit">
    <p>I'm edit</p>
    <component :is="itemToEdit" :cmp="cmp"></component>
    <div v-if="itemToEdit">
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
import { eventBus } from '../../services/eventbus.service.js';
import webButton from './button.cmp';
import webContainer from './container.cmp';
import webImg from './img.cmp';
import webMap from './map.cmp';
import webTxt from './txt.cmp';
import webVideo from './video.cmp';
import webBody from './web.cmp';

export default {
  name: 'controller-edit',
  components: {
    webButton,
    webContainer,
    webImg,
    webMap,
    webTxt,
    webVideo,
    webBody,
  },
  data() {
    return {
      itemToEdit: null,
      cmp: null,
      margin: null,
      padding: null,
    };
  },
  created() {
    eventBus.$on('setItem', this.setEditItem);
  },
  methods: {
    setEditItem(cmp) {
<<<<<<< HEAD
      this.cmp = cmp;
=======
      // console.log('setting item to edit on editor, cmp type:', cmp.type);
      this.cmp = cmp
      this.$nextTick(()=>{
>>>>>>> 7a9fe8a9fb4dd36f7f55e43dbb153b9a2a2722ce
      this.itemToEdit = cmp.type;
      })
      console.log('this.itemToEdit', this.itemToEdit);
    },
    setMargin(size) {
      this.margin = size;
      this.cmp.style.margin = size / 16 + 'rem';
      this.margin = null;
    },
    setPadding(size) {
      this.padding = size;
      this.cmp.style.padding = size / 16 + 'rem';
      this.padding = null;
    },
  },
};
</script>