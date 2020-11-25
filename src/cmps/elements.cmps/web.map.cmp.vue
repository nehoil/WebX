<template>
  <section contenteditable class="web-map" :stlye="cmpStyle">
     <GmapMap
  :center="{lat:info.lat, lng:info.lng}"
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
    info: Object,
    cmpStyle: Object,
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
