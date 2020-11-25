
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
import { eventBus } from "@/services/eventbus.service.js";

export default {
  name: "controller-add",
  components: {},
  data() {
    return {
      cmpsToShow: null
    };
  },
  methods: {
    addCmp(type) {
      switch (type) {
        case "header":
          eventBus.$emit('addCmp', type)
          break;
        case "txt":
          eventBus.$emit('addCmp', type)         
           break;
        case "img":
          eventBus.$emit('addCmp', type)         
           break;
        case "section":
          eventBus.$emit('addCmp', type)         
           break;
        case "footer":
          eventBus.$emit('addCmp', type)        
            break;
        default:
        // code block
      }
    },
  },
};
</script>