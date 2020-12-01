<template>
  <div class="template-list">
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
