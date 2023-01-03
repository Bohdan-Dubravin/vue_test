<template>
  <div class="box">
    <PostForm @create="createPost" /> <PostList :posts="posts" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: '123', body: 'body 1' },
        { id: 2, title: 'title 2', body: 'body 2' },
      ],
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  },
}
</script>

<style scoped>
.box {
  margin-top: 40px;
  margin: 0 auto;
  width: 800px;
}
</style>
