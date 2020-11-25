<template>
  <section class="web-form" :stlye="element.style">
     <form>
       <input :type="text" v-model="mail.txt" placeholder="You Email">
       <input :type="text" v-model="mail.txt" placeholder="You name">
       <input :type="text" v-model="mail.txt" placeholder="Your subject">
       <input :type="text" v-model="mail.txt" placeholder="Your message">
      <component v-for="(children, idx) in element.childrens" :is="children.type" :key="idx" :element="children"></component>
     </form>
  </section>
</template>

<script>
import webButton from '@/cmps/elements.cmps/web.button.cmp';

export default {
  props: {
    element: Object
  },
  name: 'web-form',
  components: {
    webButton
  },
  data() {
    return {
      mail: {
        txt: null,
        email: null,
        subject: null
      }
    }
  },
};
</script>
<style scoped>

</style>
