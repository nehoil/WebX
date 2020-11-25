<template>
  <section contenteditable class="web-list" :style="cmpStyle">
    <span>{{ info.content }}</span>
    <ul>
      <li v-for="(children, idx) in info.cmps" :key="idx" :element="children">
        <span>{{ children.content }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    info: Object,
    cmpStyle: Object,
  },
  name: "web-list",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
</style>
