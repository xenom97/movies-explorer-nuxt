import { defineComponent, useFetch, ref } from 'nuxt-composition-api'
import Card from '~/components/Card.vue'
import axios from 'axios'

export default defineComponent({
  middleware: 'not-authenticated',
  layout: 'main-layout',
  components: {
    Card,
  },
  setup() {
    const movies = ref([])
    const currentPage = ref(1)

    // percobaan fetch data
    useFetch(async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API}&language=en-US&page=${currentPage.value}`
      )
      movies.value = response.data.results
    })

    // percobaan load more
    const loadMoreMovie = async () => {
      currentPage.value += 1
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API}&language=en-US&page=${currentPage.value}`
        )
        movies.value = movies.value.concat(response.data.results)
      } catch (error) {
        console.log('Error: ', error)
      }
    }

    return { movies, currentPage, loadMoreMovie }
  },
})
