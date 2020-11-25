<template>
  <section contenteditable class="web-video" :style="cmpStyle">
    <iframe
      :src="info.content"
      class="responsive-iframe"
      frameBorder="0"
    ></iframe>
  </section>
</template>

<script>
export default {
  props: {
    info: Object,
    cmpStyle: Object,
  },
  name: "web-video",
  components: {},
};
</script>
