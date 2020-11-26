<template>
  <div class="edit-video">
    {{ cmp.info.content }}
    <p><i class="el-icon-edit"></i>Insert URL</p>
    <el-input
      v-model="input"
      @input="changeLinkTo"
      placeholder="Your link here"
    ></el-input>
  </div>
</template>

<script>
import { eventBus } from "@/services/eventbus.service.js";

export default {
  name: 'edit-video',
  components: {},
  props: {
    cmp: [Object, Array],
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
    changeLinkTo() {
      var embbedVal = this.input.replace('watch?v=', 'embed/');
      var idx = embbedVal.indexOf('&');
      this.cmp.info.content =
        idx === -1
          ? embbedVal.substring(0, embbedVal.length)
          : embbedVal.substring(0, idx);
          this.onEdit()
    },
    onEdit() {
      eventBus.$emit('update-site');
    },
  },
};
</script>