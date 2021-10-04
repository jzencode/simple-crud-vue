<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
      onClick() {
          this.$emit('btn-click')
      }
  }
};
</script>

<style scoped>
.btn {
  background-color: rgb(17, 109, 29);
}
</style>
