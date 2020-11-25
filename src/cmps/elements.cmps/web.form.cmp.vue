<template>
  <section class="web-form" :style="cmp.style">
     <form v-if="mail">
       <input type="email" v-model="mail.email" placeholder="Your Email">
       <input type="text" v-model="mail.fullName" placeholder="Your full name">
       <input type="text" v-model="mail.subject" placeholder="Your subject">
       <textarea type="text" v-model="mail.txt" placeholder="Your message"/>
      <component v-for="(children, idx) in cmp.info.cmps" :is="children.type" :key="idx" :element="children"></component>
     </form>
  </section>
</template>

<script>
import webButton from "@/cmps/elements.cmps/web.button.cmp";

export default {
  props: {
    cmp: Object,
  },
  name: "web-form",
  components: {
    webButton,
  },
  data() {
    return {
      mail: {
        txt: null,
        fullName: null,
        email: null,
        subject: null,
      },
    };
  },
};
</script>
<style scoped>
</style>
