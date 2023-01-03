<template lang="">
  <div v-if="posts.length > 0">
    <h3>Post List</h3>
    <PostComponent
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else>List is empty</h2>
</template>
<script>
import PostComponent from '../components/PostComponent.vue';

export default {
  components: {
    PostComponent,
  },
  props: { posts: { type: Array, required: true } },
};
</script>
<style scoped></style>
