<template>
  <button class="btn"><slot></slot></button>
</template>
<script>
export default { name: 'my-button' }
</script>
<style scoped>
.btn {
  background: teal;
  outline: none;
  color: white;
  padding: 5px 10px;
  width: fit-content;
  border: none;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background: rgb(43, 146, 146);
}
</style>
