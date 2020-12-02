<template>
  <section class="template-preview-container">
    <div class="template-preview-header">
      Select a template or create a site from scratch
      <!-- <button class="create-button">Create New Site</button> -->
    </div>
    <div class="template-previews-list">
      <span class="template-preview" @click="goToEditor">
        <div class="template-name">
          <img class="dots" src="@/assets/dots.png" />
          <span class="spec-name"> Create new website </span>
        </div>
        <div class="template-img">
          <img class="dots" src="@/assets/blank.png" />
        </div>
      </span>
      <div
        class="template-preview"
        v-for="(template, idx) in templates"
        :key="idx"
        @click="chooseTemplate(template)"
        @mouseenter.capture="isShowBtns = true"
        @mouseleave="isShowBtns = false"
      >
        <div class="template-name">
          <img class="dots" src="@/assets/dots.png" />
          <span class="spec-name">
            {{ template.name }}
          </span>
        </div>
        <div class="template-img">
          <img :src="template.previewImg" alt="" srcset="" />
        </div>
        <div class="template-preview-btns">
          <router-link class="choose pointer" :to="'editor/' + template._id"
            ><i class="el-icon-right"></i> Choose
          </router-link>
          <router-link class="preview pointer" :to="'/' + template._id"
            ><i class="el-icon-view"></i>
            Preview
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    templates: Array,
  },
  data() {
    return {
      isShowBtns: false,
    };
  },
  name: 'template-preview',
  methods: {
    chooseTemplate(template) {
      this.$store.dispatch({ type: 'changeTempalte', template });
    },
    goToEditor() {
      this.$router.push('/editor');
    },
  },
};
</script>
<style scoped>
</style>
