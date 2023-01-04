<template>
  <select v-model="selectedOption" @change="changeOptions">
    <option disabled value="">Select from list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'my-select',
  props: {
    modelValue: { type: String },
    options: { type: Array, default: () => [] },
  },
  data() {
    return { selectedOption: '' }
  },
  methods: {
    changeOptions() {
      this.$emit('update:modelValue', this.selectedOption)
    },
  },
}
</script>
<style scoped></style>
