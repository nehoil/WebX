<template>
  <section class="controller flex space col">
    <div>
      <nav class="flex space">
        <a @click="addOrEdit = 'add'" :class="getIsAdd('add')">Add</a>
        <a @click="addOrEdit = 'edit'" :class="getIsAdd('edit')">Edit</a>
      </nav>
      <component :is="addOrEdit" :itemToEdit="itemToEdit"></component>
    </div>
    <footer class="flex space">
      <a>undo</a> | <a>save</a> | <a>publish</a>
    </footer>
  </section>
</template>
<script>
import add from "@/cmps/controller.opts.cmps/add.cmp";
import edit from "@/cmps/controller.opts.cmps/edit.cmp";
import { eventBus } from "@/services/eventbus.service.js";

export default {
  name: "controller",
  components: {
    add,
    edit,
  },
  props: {
    itemToEdit: String,
  },
  data() {
    return {
      addOrEdit: null,
      cmpToEdit: null,
    };
  },
  methods: {
    getIsAdd(type) {
      return {
        "active-tab": this.addOrEdit === type,
      };
    },
  },
  created() {
    eventBus.$on("openEditor", () => {
      this.addOrEdit = "edit";
    });
  },
};
</script>
<style scoped>
</style>