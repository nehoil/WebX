
<script>
// header:
// add || edit
// calls specific opts as dynamic component - nav=>edit
// calls add part - nav=> add

// main:
// renders dynamically

// footer:
// undo button, save button, download/publish button
</script>

<template>
  <section class="controller">
    <nav>
      <button @click="addOrEdit = 'add'">Add</button>|<button
        @click="addOrEdit = 'edit'"
      >
        Edit
      </button>
    </nav>
    <component :is="addOrEdit"></component>
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
  data() {
    return {
      itemToEdit: null,
      addOrEdit: null,
    };
  },
};
</script>
