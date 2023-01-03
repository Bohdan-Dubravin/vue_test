<template lang="">
  <form @submit.prevent class="form">
    <my-input v-model="post.title" type="text" placeholder="title" />
    <my-input v-model="post.body" type="text" placeholder="body" />
    <my-button @click="addPost">Add post</my-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: { title: '', body: '' },
    }
  },
  methods: {
    addPost() {
      this.post.id = new Date()
      this.$emit('create', this.post)
      this.post = { title: '', body: '' }
    },
  },
}
</script>
<style scoped>
.form {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 500px;
}
</style>
