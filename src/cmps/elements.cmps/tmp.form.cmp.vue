<template>
  <section class="tmp-form" :stlye="element.style">
    <pre>{{element.content}}</pre>
     <form>
       <input :type="element.content.type" v-model="mail[element.content.type]" placeholder="element[content.placeHolder]">
       <input :type="element.content.type" v-model="mail[element.content.type]" placeholder="element[content.placeHolder]">
      <input :type="element.content.type" v-model="mail[element.content.type]" placeholder="element[content.placeHolder]">
      <component v-for="(children, idx) in element.childrens" :is="children.type" :key="idx" :element="children"></component>
     </form>
  </section>
</template>

<script>
import tmpButton from '@/cmps/elements.cmps/tmp.button.cmp';

export default {
  props: {
    element: Object
  },
  name: 'tmp-form',
  components: {
    tmpButton
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
