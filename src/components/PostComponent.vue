<template>
  <div class="post">
    <div>
      <h5>Title: {{ post.title }}</h5>
      <p>{{ post.body }}</p>
    </div>
    <div class="btn_group">
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: { post: { type: Object, required: true } },
};
</script>

<style scoped>
.post {
  border: 2px solid teal;
  padding: 10px;
  width: 500px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
