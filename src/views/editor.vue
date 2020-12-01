<template>
  <div class="editor flex">
    <div class="loading-editor" v-if="loading">Loading...</div>
    <controller
      v-if="siteToEdit"
      :itemToEdit="itemToEdit"
      :siteLength="siteToEdit.cmps.length"
      @focus.native="test"
      @saveTemplate="saveTemplate"
      @publishTemplate="publishTemplate"
      @showTemplateUrl="showTemplateUrl"
    />
    <work-space
      v-if="siteToEdit"
      :cmps="siteToEdit.cmps"
      @updateCmpId="updateCmpId"
    />
  </div>
</template>

<script>
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
      itemToEdit: 'webImg',
      loading: false,
    };
  },
  methods: {
    test() {
      console.log('here');
    },
    updateCmpId() {
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    },
    removeCmp(root, cmpId, deep = 0) {
      var currRootCmps = root.info ? root.info.cmps : root;
      currRootCmps.forEach((cmp, idx) => {
        if (cmp.id === cmpId) {
          currRootCmps.splice(idx, 1);
          this.$store.commit({ type: 'updateSite', site: this.siteToEdit });
          return;
        }
        if (cmp.info.cmps) this.removeCmp(cmp, cmpId, ++deep);
      });
    },
    searchCmp(cmps, cmpId, _rootId) {
      var rootFather;
      if (_rootId) {
        rootFather = cmps.find((webContainer) => webContainer.id === _rootId);
      } else {
        rootFather = cmps;
      }
      this.removeCmp(rootFather, cmpId);
    },
    saveTemplate() {
      const templateToSave = JSON.parse(JSON.stringify(this.siteToEdit));
      this.$store.dispatch({
        type: 'saveTemplate',
        templateToSave,
      })      
    },
    publishTemplate() {
      const templateToSave = JSON.parse(JSON.stringify(this.siteToEdit));
      this.$store.dispatch({
        type: 'publishTemplate',
        templateToSave,
      }).then((template)=>{
        console.log('url to heroku sub domain\\'+template._id)})
    },
    async loadSite(id) {
      this.loading = true;
      var site;
      if (id.includes('sys')) {
        // site = templateService.getTemplateById(id);
      }
      site = await this.$store.dispatch({ type: 'loadSite', id });
      try {
        // console.log('load site from editor', site);
        this.siteToEdit = JSON.parse(JSON.stringify(site));
        this.loading = false;
      } catch {
        console.log('cannot find site');
      }
    },
    showTemplateUrl(template){
      this.templateUrl = `\\heroku.subdomain.com\\${template.id}`
    }
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.loadSite(id);
    } else {
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    }
    eventBus.$on('addCmp', () => {
      this.siteToEdit = JSON.parse(JSON.stringify(this.$store.getters.web));
    });
    eventBus.$on('removeCmp', (cmpIds) => {
      const { cmpId, _rootId } = cmpIds;
      const cmps = this.siteToEdit.cmps;
      this.searchCmp(cmps, cmpId, _rootId);
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
