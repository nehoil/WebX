<template>
  <section class="template-preview-container">
    <div class="template-preview-header">
      Our Templates. Select a template or create a site from scratch.
      <button class="create-button" @click="goToEditor">Create New Site</button>
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
        <!-- <div> -->
        <div class="template-name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 229 82"
            width="229"
            height="82"
          >
            <defs>
              <image
                width="219"
                height="67"
                id="img1"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAABDCAMAAAAiaIBcAAAAAXNSR0IB2cksfwAAAW5QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////g6RELgAAAHp0Uk5TAAkYGjEzMiMSECtUbqes9f/8xaugRh4IAAYbR3Wq/uCSZQ0slPHVqWQPHMD43JYFSeq/C0C12hUON9R3Jo7h9tBcgDkHTKFVzKYUsDtg45Wczid8E3LHss+ei/Au0TRoT+6d/cpmV6/WL1+2+yC6jLkZh8hZw65Ka5Mug/jeAAAD2ElEQVR4nO2baVMUMRCGB1GUBTWAYsvpgqwIyynKLoqKiBxe4IWK4oWIFyp4/ntnBynMTDJJH5Zrlf2ZPJWHeSs7k3SCwFYVuyp374mqam/lPuuf/XtVnamp3X/goIqqrr7hUM3hxiMcIGglNU18HW1qbmmtU1q1tR/LZjqIQAA9BDy/OAsztvN4fZcyVe5E90n8VACMISDaWVh+g3u6e81mYeX7+puxk7GHAG+XxnKPHhgcson9quFTmNlAagiQcjzWyGmHWVhnWka9zVwhwDw6NyttdKE45lZTquvsOb/Z+ITA186PZVcbP++jptSFixmP2YBnCLzkmKzChOs/s1PDPc7Z+IfALcdmXfI2K8m5nhwmBC45LquAUguXpsnLqdNBhcCxDHBZUzg1pa6kLSiADEHqioJmxcZPz+DMwuc/m/KfxofA6kZhabC5q3kcIayua1Y3QgisbhTW77CB61hAVLY3FEoIbKFks6ZvYAFR3SwYp0MLgVmOz5pHj49qwfjiTA2BSY7P6rS+p6VXvsH0yUMOgcGNztqG9ZMAYfVVGdzmaawF08sum3WLBijV7TuJ6TBCkHDjsLZgd2mAUt2bTLgxQpB4cGxW9SKVEFY2rsYKAUiySrDB+3SEehB3Y4UAJFkl2MMlOkK1x9R4IQBJVgiraGUQlIptyvJCAJKsEPboMYOg1ITuxguBvpjwWcs5BkGpJ5oaNwQgyYLg6TMW4rnmxg0BSLIgyL5gIVY0N24IQJIFwUsWQc1obtwQgCRL2I0bApBkCbtxYSDJ+u+WhihntywPsVLObqu85ehVObstr7EQ+nsJNwQgyYLgNe/n/43mxg0BSLIgqHjLQujfAdwQgCQrhM1yfiPfaWrsEIAkC2S/uyVDwGWV3N6vMwgtuhszBCDJimCS+1zl9d0dBEU64UNTzI0XApBkbcF6qYChkSBe5bXPJXseIBkCFmt77+UjDdDXnVBjhSCxZ85hbcMkz98kQ8A/DwiCTxskhOkUhxECwxkVnbUDa9wkED4b1URDwD9/C0T7FCRDQGXpm7i12PFfihY30RDQWLHDLsm+IFJvgSQrDhtFbVHnJtJangghsPaXUFgJ2CjmyaW3qkmGgN0XtEWR65+UDAGaZexU6an1anjLf51yqImGAMmydr3J9StLNtEK9WIub7hec8a+zXmoiYYAwUrvxMykNj6sffcSi0qyaV2q97nzh9C9DrkQeLI82ro7iuPruTZ9ZNvS5uJqJcasVHIhcLO8rxqI3aMSC4GLhbojInT/TS4Eaay/du1M8jId6x7VnynJS5De999+An4EANmQJ7glAAAAAElFTkSuQmCC"
              />
            </defs>
            <use id="Layer 3" href="#img1" x="6" y="9" />
          </svg>
          <span class="spec-name">
            {{ template.name }}
          </span>
        </div>
        <!-- </div> -->
        <div class="template-img">
          <img :src="template.previewImg" alt="" srcset="" />
          <!-- <template-preview-btns
            :isToShow="isShowBtns"
            :template="template"
          ></template-preview-btns> -->
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
// import templatePreviewBtns from './template.preview.btns';
// import TemplatePreviewBtns from './template.preview.btns.vue';
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
  name: 'template-preview',
  components: {
    // templatePreviewBtns,
    // TemplatePreviewBtns,
  },
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
