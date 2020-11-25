
<script>
// shows a list from array of options, after user is choosing - fires emit to a smart cmp,
// that sends the chosen option to the store and gets new options according to the user request
// for example: ['header', 'footer', 'button'] => emit => store => options of header => renders headers for prev
// or adds directly small elements into workspace (such as txt)
</script>

<template>
  <div class="controller-add">
    <p>I'm add</p>
  </div>
</template>

<script>
export default {
  name: "controller-add",
  components: {},
  data() {
    return {};
  },
};
</script>