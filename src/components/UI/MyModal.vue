<template>
  <div v-if="show" class="modal" @click="hideModal">
    <div @click.stop class="modal__content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideModal() {
      this.$emit('update:show', false);
    },
  },
};
</script>
<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__content {
  margin: auto;
  background-color: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
