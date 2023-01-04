<template lang="">
  <nav class="nav">
    <my-button @click="$router.push('/')">Main</my-button>
    <my-button @click="$router.push('/posts')">Posts</my-button>
  </nav>
</template>
<script>
export default {}
</script>
<style scoped>
.nav {
  height: 50px;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 15px;
}
</style>
