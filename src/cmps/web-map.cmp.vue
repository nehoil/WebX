<template>
  <section class="el-txt" :stlye="element.style">
     <GmapMap
  :center="{lat:element.info.lat, lng:element.info.lng}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 300px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
</GmapMap>

  </section>
</template>

<script>
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,

export default {
  props: {
    element: Object
  },
  data() {
    return {
        markers: [],
    }
  },
  name: 'web-map',
  components: {},
};
</script>
<style scoped>

</style>
