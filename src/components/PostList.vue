<template lang="">
  <div v-if="posts.length > 0">
    <h3>Post List</h3>
    <TransitionGroup name="list">
      <PostComponent
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </TransitionGroup>
  </div>
  <h2 v-else>List is empty</h2>
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
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
