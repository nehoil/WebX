<template>
  <section contenteditable class="web-video" :stlye="cmp.style">
      <iframe :src="cmp.info.content" class="responsive-iframe" frameBorder="0"></iframe>
      </section>
</template>

<script>

export default {
  props: {
    cmp: Object,
  },
  name: 'web-video',
  components: {},
};
</script>
