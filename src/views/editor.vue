<template>
  <div class="editor">
    <controller :itemToEdit="itemToEdit" />
    <work-space :cmps="siteToEdit.cmps" />
  </div>
</template>

<script>
import json from '@/data/wap.json';
import workSpace from '@/cmps/workspace.cmp';
import controller from '@/cmps/controller.cmp';
// import webStore from "@/store/web.store.js";
import { eventBus } from '@/services/eventbus.service.js';

export default {
  name: 'editor',
  components: {
    workSpace,
    controller,
  },
  data() {
    return {
      siteToEdit: null,
      waps: json,
      itemToEdit: 'webImg',
    };
  },
  created() {
    this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    eventBus.$on('addCmp', (id) => {
      this.$store.commit({ type: 'addCmp', id });
    });
    eventBus.$on('setCmpsToShow', (cmpType) => {
      this.$store.commit({ type: 'setCmpsToShow', cmpType });
    });
    eventBus.$on('update-site', () => {
      console.log('updating site');
      this.$store.commit({ type: 'updateSite', site: siteToEdit });
    });
  },
};
</script>
