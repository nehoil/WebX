<template>
  <section contenteditable class="web-map" :stlye="cmp.style">
     <GmapMap
  :center="{lat:cmp.info.lat, lng:cmp.info.lng}"
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
    cmp: Object,
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
