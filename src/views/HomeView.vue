<script>
import { GetApi } from '@/api/GetApi'
import CardAnime from '@/components/listanime/CardAnime.vue'
export default {
  data() {
    return {
      apiData: []
    }
  },
  mounted() {
    // Make an API request when the component is mounted
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        // Make a GET request to your API endpoint
        const response = await GetApi()
        // Update the data property with the received data
        this.apiData = response
        console.log(this.apiData)
      } catch (error) {
        console.error(error)
      }
    }
  },
  components: { CardAnime }
}
</script>

<template>
  <div class="mt-5 mb-5 mx-5 text-center">
    <h1>Popular Anime</h1>
  </div>
  <CardAnime :items="apiData"></CardAnime>
</template>
