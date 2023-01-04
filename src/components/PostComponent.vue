<template>
  <div class="post">
    <div>
      <h5>Title: {{ post.title }}</h5>
      <p>{{ post.body }}</p>
    </div>
    <div class="btn_group">
      <my-button style="margin-bottom: 10px; width: 100px" @click="showModal"
        >Delete</my-button
      >
      <my-button @click="$router.push(`/posts/${post.id}`)"
        >Full post</my-button
      >
      <my-modal v-model:show="show">
        <h3>Do you want to delete post?</h3>
        <my-button @click="$emit('remove', post)">Delete</my-button>
        <my-button @click="showModal">Cancel</my-button>
      </my-modal>
    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'

export default {
  data() {
    return { show: false }
  },
  props: { post: { type: Object, required: true } },
  methods: {
    showModal() {
      this.show = !this.show
    },
  },
  components: { MyButton },
}
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

.btn_group {
}
</style>
