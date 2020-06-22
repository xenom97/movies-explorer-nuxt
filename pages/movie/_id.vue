<template>
  <div class="container mx-auto">
    <button
      @click="backToHome"
      class="w-full bg-gray-800 grid-cols-1 mb-5 py-5 bg-teal-500 hover:bg-teal-700 cursor-pointer"
    >
      <p class="text-white text-center uppercase">Back to movie list</p>
    </button>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <img
        :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        :alt="movie.title"
        class="mx-auto max-w-md mt-2 shadow-md w-full"
      />
      <div class="w-full">
        <div class="bg-gray-800 mt-2 shadow-md p-3">
          <h1 class="text-white text-2xl">{{movie.title}}</h1>
          <p class="text-gray-600">Release date : {{movie.release_date}}</p>
          <div class="flex">
            <span
              v-for="genre in movie.genres"
              :key="genre.id"
              class="text-white mr-1 bg-teal-900 p-1"
            >{{genre.name}}</span>
          </div>
        </div>
        <div class="bg-gray-800 mt-2 shadow-md p-3">
          <p class="text-white text-xl">Overview :</p>
          <p class="text-white">{{movie.overview}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useFetch,
  useContext,
  ref,
} from 'nuxt-composition-api'
import axios from 'axios'

export default defineComponent({
  setup() {
    const movie = ref({})

    const { id } = useContext().params.value

    useFetch(async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API}&language=en-US`)
      movie.value = response.data
    })    

    return { movie }
  },
  methods: {
    backToHome() {
      this.$router.push('/')
    }
  }
})
</script>
