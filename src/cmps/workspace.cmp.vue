<template>
  <div class="workspace">
    <component
      v-for="(cmp, idx) in cmps"
      :is="cmp.type"
      :cmp="cmp"
      :key="idx"
    >
  </component>
  </div>
</template>

<script>
import webContainer from "@/cmps/web.container.cmp";
export default {
  props: {
    cmps: Array
  },
  name: "work-space",
  components: {
    webContainer,
  },
  data() {
    return {
    };
  },
  methods: {
    emitItemToEdit() {
      console.log("im emiting");
    },
  }
};
</script>
