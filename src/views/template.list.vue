<template>
  <div class="template-list">
    <!-- <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div> -->
    <template-preview :templates="templates" @createNewWeb="createNewWeb"/>
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
  methods: {
    createNewWeb(){
      console.log('new');
      
    }
  },
  computed: {},
  created() {},
};
</script>
