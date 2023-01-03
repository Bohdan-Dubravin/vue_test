<template lang="">
  <div>
    <h3>Post List</h3>

    <PostComponent v-for="post in posts" :post="post" />
  </div>
</template>
<script>
import PostComponent from '../components/PostComponent.vue'

export default {
  components: {
    PostComponent,
  },
  props: { posts: { type: Array, required: true } },
}
</script>
<style scoped></style>
