<template>
  <div class="editor">
    <work-space />
    <!-- <controller/> -->
  </div>
</template>

<script>
import json from '@/data/wap.json';
import workSpace from '@/cmps/workspace.cmp';
// import controller from '@/cmps/controller.cmp';
export default {
  name: 'editor',
  components: {
    workSpace,
  },
  data() {
    return {
      waps: json,
    };
  },
};
</script>
