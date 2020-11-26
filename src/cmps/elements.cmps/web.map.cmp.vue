<template>
  <section
    contenteditable
    class="web-map"
    :style="cmp.style"
    @click="setEditItem"
  >
    <GmapMap
      :center="{ lat: cmp.info.lat, lng: cmp.info.lng }"
      :zoom=cmp.info.zoom
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </section>
</template>

<script>
import { eventBus } from '@/services/eventbus.service.js';
export default {
  props: {
    cmp: Object,
  },
  data() {
    return {
      markers: [],
    };
  },
  name: 'web-map',
  components: {},
  methods: {
    setEditItem() {
      eventBus.$emit('openEditor', this.cmp);
      this.$nextTick(() => {
        eventBus.$emit('setItem', this.cmp);
      });
    },
  },
};
</script>
<style scoped>
</style>
