<template>
  <div class="template-list">
    <!-- <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div> -->
    <template-preview :templates="templates" />
  </div>
</template>

<script>
// import { eventBus } from '@/services/eventbus.service.js';
import templatePreview from '@/cmps/template.list.cmps/template.preview.cmp';
export default {
  name: 'template-list',
  components: {
    templatePreview,
  },
  data() {
    return {
      templates: this.$store.getters.templates,
    };
  },
  methods: {},
  computed: {},
  created() {},
};
</script>
