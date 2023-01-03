<template>
  <div class="box">
    <h1>Posts</h1>
    <my-button @click="showModal">Create Post</my-button>
    <my-modal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </my-modal>
    <PostList :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

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
      modalVisible: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showModal() {
      this.modalVisible = true;
    },
  },
};
</script>

<style scoped>
.box {
  margin-top: 40px;
  margin: 0 auto;
  width: 800px;
}
</style>
