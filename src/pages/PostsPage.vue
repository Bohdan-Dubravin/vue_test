<template>
  <div class="box">
    <h1>Posts</h1>
    <my-input placeholder="Search..." v-model="searchQuery"></my-input>
    <div class="buttons__group">
      <my-button @click="showModal">Create Post</my-button>
      <my-select :options="sortOptions" v-model="selectedSort"></my-select>
    </div>

    <my-modal v-model:show="modalVisible">
      <PostForm @create="createPost" />
    </my-modal>
    <PostList
      v-if="!isLoading"
      :posts="searchedPostsAndSorted"
      @remove="removePost"
    />
    <h2 v-else>Loading posts...</h2>
    <div ref="observer" v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div v-if="!isLoading" class="page__wrapper">
      <div
        class="page"
        v-for="pageNum in totalPages"
        :class="{ current__page: pageNum === page }"
        :key="pageNum"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div> -->
  </div>
</template>

<script>
import PostForm from '../components/PostForm.vue'
import PostList from '../components/PostList.vue'
import axios from 'axios'
import MyButton from '../components/UI/MyButton.vue'

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'Sort by title' },
        { value: 'body', name: 'Sort by body' },
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  },

  methods: {
    createPost(post) {
      this.posts.unshift(post)
      this.modalVisible = false
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id)
    },

    showModal() {
      this.modalVisible = true
    },

    // changePage(pageNum) {
    //   this.page = pageNum
    // },

    async fetchPosts() {
      try {
        this.isLoading = true
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: { _page: this.page, _limit: this.limit },
          }
        )
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        )
        this.posts = response.data
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1

        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: { _page: this.page, _limit: this.limit },
          }
        )
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        )
        this.posts.push(...response.data)
      } catch (error) {
        console.log(error)
      }
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    searchedPostsAndSorted() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
  },

  watch: {
    // page() {
    //   this.fetchPosts()
    // },
  },
}
</script>

<style scoped>
.box {
  margin-top: 40px;
  margin: 0 auto;
  width: 800px;
}

.buttons__group {
  width: 400px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid gray;
  padding: 10px;
  cursor: pointer;
}

.current__page {
  border: 2px solid teal;
  color: teal;
  font-weight: 500;
}

.observer {
  background: #000;
  height: 30px;
}
</style>
