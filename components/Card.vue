<template>
  <n-link :to="`/movie/${id}`">
    <div class="card hover:bg-gray-700 hover:-translate-y-2">
      <slot></slot>
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </n-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['id'],
})
</script>

<style>
.card {
  @apply shadow-lg bg-gray-800 w-full cursor-pointer text-center transition duration-500 ease-in-out transform;
}
</style>
