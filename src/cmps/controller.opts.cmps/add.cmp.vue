
<script>
// shows a list from array of options, after user is choosing - fires emit to a smart cmp,
// that sends the chosen option to the store and gets new options according to the user request
// for example: ['header', 'footer', 'li'] => emit => store => options of header => renders headers for prev
// or adds directly small elements into workspace (such as txt)
</script>

<template>
  <section class="controller-add">
    <el-collapse accordion v-model="number">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span>Whole Components</span>
        </template>
        <div class="controller-add">
          <ul
            class="pointer add-list"
            v-for="cmp in cmpsAccordion"
            :key="cmp.value"
          >
            <div @click="setCmpsToShow(cmp.value)">
              <!-- <el-collapse accordion> -->
              <el-collapse-item name="numForCmpsAccordion++">
                <template slot="title">
                  <li>{{ cmp.title }}</li>
                </template>
                <div v-for="cmp in cmps" :key="cmp.id">
                  <ul>
                    <li class="list-group-item add-options-btn">
                      {{ cmp.id }}
                    </li>
                  </ul>
                </div>
              </el-collapse-item>
            </div>
            <!-- </el-collapse> -->
            <!-- <li @click="setCmpsToShow('header')">Headers</li>
            <li @click="setCmpsToShow('text')">Text</li>
            <li @click="setCmpsToShow('section')">Sections</li>
            <li @click="setCmpsToShow('card')">Cards</li>
            <li @click="setCmpsToShow('map')">Map</li>
            <li @click="setCmpsToShow('image')">Image</li>
            <li @click="setCmpsToShow('video')">Video</li>
            <li @click="setCmpsToShow('form')">Forms</li>
            <li @click="setCmpsToShow('footer')">Footers</li> -->
          </ul>
        </div>
      </el-collapse-item>
      <!-- <el-collapse-item name="2" v-if="cmps">
        <template slot="title">
          <div class="flex center plr10 space mb1 pointer"></div>
          <span></span>
        </template> -->
      <section class="cmpsExamples" v-if="cmps">
        <!-- <hr class="add-menu-seperator" /> -->
        <draggable
          class="dragArea list-group"
          :group="{ name: 'workspace-cmps', pull: 'clone', put: false }"
          :list="cmps"
          :sort="false"
          @start="startDrag"
          @end="stopDrag"
        >
          <div v-for="cmp in cmps" :key="cmp.id">
            <ul>
              <li class="list-group-item add-options-btn">
                {{ cmp.id }}
              </li>
            </ul>
          </div>
        </draggable>
      </section>
      <!-- </el-collapse-item> -->
    </el-collapse>
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
      cmpsAccordion: [
        { title: "Headers", value: "header" },
        { title: "Navbars", value: "navbar" },
        { title: "Text", value: "text" },
        { title: "Sections", value: "section" },
        { title: "Cards", value: "card" },
        { title: "Map", value: "map" },
        { title: "Image", value: "image" },
        { title: "Video", value: "video" },
        { title: "Form", value: "form" },
        { title: "Footers", value: "footer" },
      ],
      numForCmpsAccordion: 2,
      number: 1,
      isGrabbing: false,
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
    // grab(ev){
    //   this.isGrabbing = true
    //   console.log(ev,this.isGrabbing);

    // },
    // release(ev) {
    //   this.isGrabbing = false;
    //   console.log("re", ev,this.isGrabbing);
    // },
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
};
</script>