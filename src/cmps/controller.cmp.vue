<template>
  <section id="controller" class="controller flex space col">
    <div>
      <nav class="flex pointer space">
        <a @click="addOrEdit = 'add'" :class="getIsAdd('add')">Add</a>
        <a @click="addOrEdit = 'edit'" :class="getIsAdd('edit')">Edit</a>
      </nav>
      <component :is="addOrEdit" :itemToEdit="itemToEdit"></component>
    </div>
    <footer class="flex space">
      <a @click="save">save</a> |
      <a @click="publishTemplate">publish</a>
    </footer>
  </section>
</template>
<script>
import add from '@/cmps/controller.opts.cmps/add.cmp';
import edit from '@/cmps/controller.opts.cmps/edit.cmp';
import { eventBus } from '@/services/eventbus.service.js';

export default {
  name: 'controller',
  components: {
    add,
    edit,
  },
  props: {
    itemToEdit: String,
    siteLength: Number,
  },
  data() {
    return {
      addOrEdit: 'add',
      cmpToEdit: null,
      template: {
        templateName: null,
        templatePreviewImg: null,
      },
    };
  },
  methods: {
    getIsAdd(type) {
      return {
        'active-tab': this.addOrEdit === type,
      };
    },
    saveTemplate() {
      this.$emit('saveTemplate', this.template);
    },
    publishTemplate() {
      this.$emit('publishTemplate');
    },
    async getScreenShot() {
      eventBus.$emit('toggleLoading');
      var htmlToImage = require('html-to-image');
      var dataUrl = await htmlToImage.toJpeg(
        document.getElementById('workspace'),
        {
          quality: 0.1,
          height: 900,
          pixelRatio: 0.85,
        }
      );
      try {
        eventBus.$emit('toggleLoading');
        console.log(dataUrl);
        return dataUrl;
      } catch {
        console.log('error');
      }
    },
    async save() {
      const screenshot = await this.getScreenShot();
      if (!this.$store.getters.user) {
        eventBus.$emit(
          'show-login',
          'Please login in order to save the website'
        );
      } else {
        this.$prompt("What is your website's name?", {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
        })
          .then(({ value }) => {
            this.template.templatePreviewImg = screenshot;
            this.$message({
              type: 'success',
              message: 'Your website is saved',
            });
            this.template.templateName = value;
            this.saveTemplate();
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: 'Website was not saved.',
            });
          });
      }
    },
  },
  created() {
    eventBus.$on('openEditor', () => {
      this.addOrEdit = 'edit';
    });
  },
  watch: {
    siteLength: {
      deep: true,
      handler() {
        if (this.siteLength === 0) this.addOrEdit = 'add';
      },
    },
  },
};
</script>
<style scoped>
</style>