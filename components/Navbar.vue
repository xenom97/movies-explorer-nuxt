<template>
  <div class="fixed bg-gray-800 w-full z-50 shadow-md top-0 left-0 py-2">
    <div class="container mx-auto h-full">
      <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          class="input focus:outline-none focus:text-white text-white"
          type="text"
          placeholder="Search movies ..."
          aria-label="Search movies"
        />
        <button class="btn" type="button">Search</button>
        <button class="btn" type="button">Filter</button>
        <button class="btn" type="button" @click="logoutHandler">Logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'nuxt-composition-api'
import { authStore } from '~/store'

export default defineComponent({
  setup() {
    const isAuth = authStore.isAuth
    return { isAuth }
  },
  methods: {
    logoutHandler() {
      authStore.logoutHandler()
      this.$router.push('/login')
    },
  },
})
</script>

<style>
.input {
  @apply appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight;
}

.btn {
  @apply flex-shrink-0 bg-teal-500 border-teal-500 text-sm border-4 text-white py-1 px-2 mx-1 rounded;
}

.btn:hover {
  @apply bg-teal-700 border-teal-700;
}
</style>