<template>
  <section class="web-video" :stlye="element.style">
      <iframe :src="element.content" class="responsive-iframe" frameBorder="0"></iframe>
      </section>
</template>

<script>

export default {
  props: {
    element: Object
  },
  name: 'web-video',
  components: {},
};
</script>
