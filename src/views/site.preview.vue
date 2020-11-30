<template>
  <div class="site-preview">
    <div class="preview-bar" v-if="isPreview">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo.png" alt="" srcset=""
        /></router-link>
      </div>
      <div class="preview-header-content">
        Create your own amazing website
        <a class="preview-bar-btn" @click="editSite"> Try Me Out </a>
      </div>
    </div>
    <work-space :cmps="siteToEdit.cmps" />
  </div>
</template>

<script>
import workSpace from '@/cmps/workspace.cmp';
import { eventBus } from '@/services/eventbus.service.js';

export default {
  name: 'site-preview',
  components: {
    workSpace
  },
  data() {
    return {
      itemToEdit: 'webImg',
      isPreview: true,
    };
  },
  methods: {
    editSite() {
      this.$router.push('/editor');
    },
  },
  computed: {},
  created() {
    this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    eventBus.$on('setCmpsToShow', (cmpType) => {
      this.$store.commit({ type: 'setCmpsToShow', cmpType });
    });
    this.$store.commit({ type: 'setEditMode', isEditOn: false });
    this.$store.commit({ type: 'setShowMenu', isShowMenu: false });
    eventBus.$emit('change-edit-mode');
  },
  destroyed() {
    // this.$store.commit({ type: 'setEditMode', isEditOn: true });
    // this.$store.commit({ type: 'setShowMenu', isShowMenu: true });
  },
};
</script>
