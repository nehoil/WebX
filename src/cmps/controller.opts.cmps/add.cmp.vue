
<script>
// shows a list from array of options, after user is choosing - fires emit to a smart cmp,
// that sends the chosen option to the store and gets new options according to the user request
// for example: ['header', 'footer', 'button'] => emit => store => options of header => renders headers for prev
// or adds directly small elements into workspace (such as txt)
</script>

<template>
  <div class="controller-add">
    <p>I'm add</p>
    <button @click="addCmp('header')">Header</button>
    <button @click="addCmp('txt')">Txt</button>
    <button @click="addCmp('img')">Img</button>
    <button @click="addCmp('section')">Section</button>
    <button @click="addCmp('footer')">Footer</button>
  </div>
</template>

<script>
export default {
  name: "controller-add",
  components: {},
  data() {
    return {};
  },
  methods: {
    addCmp(type){
      switch(type) {
  case 'header':
    // code block
    break;
  case 'txt':
    // code block
    break;
  case 'img':
    // code block
    break;
  case 'section':
    // code block
    break;
  case 'footer':
   // code block
    break;
  default:
    // code block
}
    }
  },
};
</script>