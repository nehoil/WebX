<template>
  <section class="tmp-list" :stlye="element.style">
            <span>{{element.content}}</span>
    <ul>
      <li v-for="(children, idx) in element.childrens" :key="idx" :element="children">
        <span>{{children.content}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    element: Object
  },
  name: 'tmp-list',
  components: {},
  data() {
    return {
    }
  },
};
</script>
<style scoped>

</style>
