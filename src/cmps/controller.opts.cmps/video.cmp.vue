
<script>
// allows control in:
// * changing youtube link(we can add youtube api)
</script>
<template>
  <div class="edit-video">
         <p><i class="el-icon-edit"></i>Insert URL</p>
    <el-input @input="changeLinkTo" placeholder="Your link here" v-model="cmp.linkTo"></el-input>
    
  </div>
</template>

<script>
export default {
  name: "edit-video",
  components: {},
  data() {
    return {};
  },
  methods: {
    changeLinkTo(){
      console.log('change click');
    }
  },
};
</script>