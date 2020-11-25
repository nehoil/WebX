<template>
  <section class="tmp-map" :stlye="element.style">
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

export default {
  props: {
    element: Object
  },
  data() {
    return {
        markers: [],
    }
  },
  name: 'tmp-map',
  components: {},
};
</script>
<style scoped>

</style>
