<template>
  <section class="template-preview-container">
    <div class="template-preview-header">
      Our Templates. Select a template or create a site from scratch.
      <button class="create-button">Create New Site</button>
    </div>
    <div class="template-previews-list">
      <div
        class="template-preview"
        v-for="(template, idx) in templates"
        :key="idx"
        @click="chooseTemplate(template)"
        @mouseenter.capture="isShowBtns = true"
        @mouseleave="isShowBtns = false"
      >
        <div class="template-img">
          <img :src="template.previewImg" alt="" srcset="" />
        </div>
        <div class="template-name">{{ template.name }}</div>
        <div class="template-preview-btns" v-if="isShowBtns">
          <router-link :to="'/' + template._id"> Preview </router-link>
          <router-link to="/editor"> Edit </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { eventBus } from "@/services/eventbus.service.js";

export default {
  props: {
    templates: Array,
  },
  data() {
    return {
      isShowBtns: false,
    };
  },
  name: "template-preview",
  components: {},
  methods: {
    chooseTemplate(template) {
      this.$store.dispatch({ type: "changeTempalte", template });
      // this.$router.push('/editor');
    },
  },
};
</script>
<style scoped>
</style>
