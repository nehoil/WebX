
<script>
// shows a list from array of options, after user is choosing - fires emit to a smart cmp,
// that sends the chosen option to the store and gets new options according to the user request
// for example: ['header', 'footer', 'button'] => emit => store => options of header => renders headers for prev
// or adds directly small elements into workspace (such as txt)
</script>

<template>
<section>
  <div class="controller-add">
    <p>I'm add</p>
    <button @click="setCmpsToShow('text')">Txt</button>
    <button @click="setCmpsToShow('contact')">Map</button>
    <button @click="setCmpsToShow('header')">Header</button>
    <button @click="setCmpsToShow('gallery')">Img</button>
    <button @click="setCmpsToShow('section')">Section</button>
    <button @click="setCmpsToShow('footer')">Footer</button>
    <button @click="setCmpsToShow('video')">Video</button>
  </div>

<section class="cmpsExamples" v-if="cmps">
  <div  v-for="cmp in cmps" :key="cmp.id">
   <p @click="addCmp(cmp.id)">{{cmp.id}}</p>

  </div>
  </section>
  </section>
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
    setCmpsToShow(name) {      
          eventBus.$emit('setCmpsToShow', name)
    },
    addCmp(cmpId){
        eventBus.$emit('addCmp', cmpId)
    }
  },
  computed: {
    cmps(){
     return this.$store.getters.cmps
    }
  },
};
</script>