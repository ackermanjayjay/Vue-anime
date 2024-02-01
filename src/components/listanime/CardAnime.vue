<script>
export default {
  props: ['items']
}
</script>
<template>
  <div class="grid grid-cols-3 justify-center gap-4 mx-5">
    <div v-for="item in items" :key="item.id">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img :src="item.images.jpg.image_url" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.title }}</h2>
          <p>{{item.episodes}}</p>
          <p>{{item.type}}</p>
          <span>{{item.status == "Currently Airing" ? "Ongoing" : "Batch" }}</span>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
