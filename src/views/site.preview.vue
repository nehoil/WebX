<template>
<div class="site-preview">
    <!-- <div class="preview-bar" v-if="isPreview"> -->
<!-- 
    </div> -->
    <work-space :cmps="siteToEdit.cmps" />
</div>
</template>

<script>
import workSpace from '@/cmps/workspace.cmp';
import { eventBus } from '@/services/eventbus.service.js';

export default {
  name: 'site-preview',
  components: {
    workSpace,
  },
  data() {
    return {
      itemToEdit: 'webImg',
    };
  },
  methods: {
  },
  computed: {
  },
  created() {
    this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    eventBus.$on('setCmpsToShow', (cmpType) => {
      this.$store.commit({ type: 'setCmpsToShow', cmpType });
    });
    this.$store.commit({ type: 'setEditMode', isEditOn: false });
    this.$store.commit({ type: 'setShowMenu', isShowMenu: false });
    eventBus.$emit('change-edit-mode')
  },
  destroyed() {
    // this.$store.commit({ type: 'setEditMode', isEditOn: true });
    // this.$store.commit({ type: 'setShowMenu', isShowMenu: true });
  },
};
</script>
