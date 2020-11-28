<template>
  <div class="editor flex">
    <controller :itemToEdit="itemToEdit" />
    <work-space :cmps="siteToEdit.cmps" @updateCmpId="updateCmpId"/>
  </div>
</template>

<script>
import json from '@/data/wap.json';
import workSpace from '@/cmps/workspace.cmp';
import controller from '@/cmps/controller.cmp';
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
  methods: {
    updateCmpId(){
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    },
    removeCmp(root, cmpId, deep = 0) {      
      var currRootCmps = root.info ? root.info.cmps : root
        currRootCmps.forEach((cmp, idx) => {
          if (cmp.id === cmpId) {
            console.log('deleted!');
            currRootCmps.splice(idx, 1);
            this.$store.commit({ type: 'updateSite', site: this.siteToEdit });
            return;
          }
          if (cmp.info.cmps) this.removeCmp(cmp, cmpId, ++deep);
        });
      },
    searchCmp(cmps, cmpId, _rootId) {      
      var rootFather;
      if (_rootId){
        rootFather = cmps.find((webContainer) => webContainer.id === _rootId);
      } else {
        rootFather = cmps
      }
      this.removeCmp(rootFather, cmpId);
  },
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
  created() {
    this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    eventBus.$on('addCmp', () => {
      // this.$store.commit({ type: 'addCmp', id });
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    });
    eventBus.$on('removeCmp', (cmpIds) => {
      const { cmpId, _rootId } = cmpIds;
      const cmps = this.siteToEdit.cmps;
      this.searchCmp(cmps, cmpId, _rootId);
      // this.$store.commit({ type: "removeCmp", id });
      // this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    });
    eventBus.$on('setCmpsToShow', (cmpType) => {
      this.$store.commit({ type: 'setCmpsToShow', cmpType });
    });
    eventBus.$on('update-site', () => {
      this.$store.commit({ type: 'updateSite', site: this.siteToEdit });
    });
  },
};
</script>
