<template>
  <div class="editor flex">
    <div class="loading-editor" v-if="loading">Loading...</div>
    <div class="web-url-modal" v-if="webUrl">Your website Url is :{{webUrl}} 
    <button>Copy to clipboard</button>
    <button>Close</button>
    </div>
    <controller
      v-if="siteToEdit"
      :itemToEdit="itemToEdit"
      :siteLength="siteToEdit.cmps.length"
      @focus.native="test"
      @saveTemplate="saveTemplate"
      @publishTemplate="publishTemplate"
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
import { templateService } from '@/services/template.service.js';

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
      webUrl:null
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
    async saveTemplate() {
      const templateToSave = JSON.parse(JSON.stringify(this.siteToEdit));
      const { _id, username, userPicture } = this.$store.getters.user
      const createdBy = {
        _id,
        username,
        userPicture
      };
      templateToSave.createdBy = createdBy;
      const savedTemplte = await this.$store.dispatch({
        type: 'saveTemplate',
        templateToSave,
      });
      try {
        this.siteToEdit = JSON.parse(JSON.stringify(savedTemplte));
      } catch (err) {
        console.log('cannot save template. err on editor', err);
      }
    },
    async publishTemplate() {
      this.loading=true
     const templateToSave = JSON.parse(JSON.stringify(this.siteToEdit));
      const { _id, username, userPicture } = this.$store.getters.user
      const createdBy = {
        _id,
        username,
        userPicture
      };
      templateToSave.createdBy = createdBy;
      const savedTemplte = await this.$store.dispatch({
        type: 'saveTemplate',
        templateToSave,
      });
      try {
        this.siteToEdit = JSON.parse(JSON.stringify(savedTemplte));
        this.webUrl = `localhost:8080/${savedTemplte._id}`
         this.loading=false
      } catch (err) {
        console.log('cannot Publish template. err on editor', err);
      }
    
    },
    async loadSite(id) {
      this.loading = true;
      var site;
      if (id.includes('sys')) {
        site = templateService.getTemplateById(id);
        const siteCopy = JSON.parse(JSON.stringify(site));
        delete siteCopy._id;
        this.siteToEdit = siteCopy;
        this.loading = false;
        return;
      }
      site = await this.$store.dispatch({ type: 'loadSite', id });
      try {
        this.siteToEdit = JSON.parse(JSON.stringify(site));
        this.loading = false;
      } catch {
        console.log('cannot find site');
      }
    },
    
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
