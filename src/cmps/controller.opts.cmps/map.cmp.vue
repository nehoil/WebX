<template>
  <div class="edit-map">
        <p><i class="el-icon-add-location
"></i>Add your address</p>

    <el-input
      v-model="input"
      @input="searchLocation"
      placeholder="Your address here"
    ></el-input>
    <div v-if="showSuggested && suggestedLocs" @click="setLoc" class="suggested-locs">
      {{ suggestedLocs.address }}
    </div>
    <!-- <button>zoom</button> -->
    <!-- <button>name</button> -->
  </div>
</template>

<script>
import { mapService } from '@/services/map.service.js';

export default {
  name: 'edit-map',
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      input: null,
      suggestedLocs: null,
      showSuggested: false,
    };
  },
  methods: {
    async searchLocation() {
      this.showSuggested = true;
      const term = this.input;
      const res = await mapService.getAddress(term);
      try {
        this.suggestedLocs = res;
      } catch {
        console.log('error');
      }
    },
    removesugges(){
      this.$nextTick(()=>{
        this.showSuggested = false
      })
    },
    setLoc() {
      this.showSuggested = false;
      const { lat, lng, address } = this.suggestedLocs;
      this.cmp.info.lat = lat;
      this.cmp.info.lng = lng;
      this.input = address;
    },
  },
  computed: {
    // showSuggested(){
    //   return this.input && this.suggestedLocs ? true : false
    // }
  },
};
</script>