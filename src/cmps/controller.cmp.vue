<template>
  <section class="controller">
    <nav>
      <button @click="addOrEdit = 'add'">Add</button>|<button
        @click="addOrEdit = 'edit'"
      >
        Edit
      </button>
    </nav>
    <component :is="addOrEdit" :itemToEdit="itemToEdit"></component>
    <footer>undo | save | publish</footer>
  </section>
</template>
<script>
import add from "@/cmps/controller.opts.cmps/add.cmp";
import edit from "@/cmps/controller.opts.cmps/edit.cmp";
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
  created() {
  },
};
</script>
<style scoped>

</style>