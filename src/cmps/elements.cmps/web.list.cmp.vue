<template>
  <section contenteditable class="web-list" :stlye="cmp.style">
    {{cmp.info}}
            <span>{{cmp.info.content}}</span>
    <ul>
      <li v-for="(children, idx) in cmp.info.cmps" :key="idx" :element="children">
        <span>{{children.content}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    cmp: Object,
  },
  name: 'web-list',
  components: {},
  data() {
    return {
    }
  },
};
</script>
<style scoped>

</style>
