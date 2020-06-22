<template>
  <div class="container mx-auto mt-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      <card v-for="movie in movies" :key="movie.id" :id="movie.id">
        <div v-if="movie.poster_path">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            :alt="movie.title"
            class="inline sm:block"
          />
        </div>
        <div v-else class="bg-gray-300 w-full h-full">
          <p>Unavailable Image</p>
        </div>
        <template #footer>
          <p class="text-white py-4">{{ movie.title }}</p>
        </template>
      </card>
    </div>
    <button
      @click="loadMoreMovie"
      class="w-full bg-gray-800 grid-cols-1 my-5 py-5 bg-teal-500 hover:bg-teal-700 cursor-pointer"
    >
      <p class="text-white text-center uppercase">Load More Movies</p>
    </button>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
