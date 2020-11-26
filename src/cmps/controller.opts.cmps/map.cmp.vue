<template>
  <div class="edit-map">
    <button>search location</button>
        <el-input
      v-model="input"
      @input="searchLocation"
      placeholder="Your address here"
    ></el-input>

    <button>zoom</button>
    <button>name</button>
  </div>
</template>

<script>
import { mapService } from '@/services/map.service.js'


export default {
  name: "edit-map",
  components: {},
  data() {
    return {
      input: ''
    };
  },
  methods: {
    async searchLocation(){
      const res = await mapService.getAddress('tel aviv')
      try {
        console.log('res from geocode api', res);
      } catch {
        console.log('error');
      }
    },
    

  },
};
</script>