
<script>
// shows a list from array of options, after user is choosing - fires emit to a smart cmp,
// that sends the chosen option to the store and gets new options according to the user request
// for example: ['header', 'footer', 'button'] => emit => store => options of header => renders headers for prev
// or adds directly small elements into workspace (such as txt)
</script>

<template>
  <section>
    <div class="controller-add">
      <button @click="setCmpsToShow('navbar')">Nav bar</button>
      <button @click="setCmpsToShow('header')">Header</button>
      <button @click="setCmpsToShow('text')">Text</button>
      <button @click="setCmpsToShow('section')">Section</button>
      <button @click="setCmpsToShow('card')">Card</button>
      <button @click="setCmpsToShow('map')">Map</button>
      <button @click="setCmpsToShow('image')">Image</button>
      <button @click="setCmpsToShow('video')">Video</button>
      <button @click="setCmpsToShow('form')">Form</button>
      <button @click="setCmpsToShow('footer')">Footer</button>
    </div>

    <section class="cmpsExamples" v-if="cmps">
      <hr class="add-menu-seperator">
      <draggable
        class="dragArea list-group"
        :group="{ name: 'workspace-cmps', pull: 'clone', put: false }"
        :list="cmps"
        :sort="false"
        @start="startDrag"
        @end="stopDrag"
      >
        <div v-for="cmp in cmps" :key="cmp.id">
          <button class="list-group-item add-options-btn">{{ cmp.id }}</button>
        </div>
      </draggable>
    </section>
  </section>
</template>

<script>
import { eventBus } from "@/services/eventbus.service.js";
import draggable from "vuedraggable";


export default {
  name: "controller-add",
  components: {
    draggable,
  },
  data() {
    return {
      cmpsToShow: null,
    };
  },
  methods: {
    setCmpsToShow(name) {
      eventBus.$emit("setCmpsToShow", name);
    },
    startDrag(ev) {
      eventBus.$emit("dragStart");
    },
    stopDrag() {
      eventBus.$emit("dragStop");
    },
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
};
</script>