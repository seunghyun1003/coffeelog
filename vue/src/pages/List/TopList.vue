<template>
  <div id="toplist">
      <div>
        인기동네
      </div>
      <div class="review-list">
          <div class="review-item" :key="index" v-for="(value, index) in data" @click="detailshow(index)">
            <li>{{ value.cafe_name }}</li>
            <li>{{ value.cafe_location }}</li>
            <li>{{ value.content }}</li>
          </div>
      </div>
  </div>
</template>

<script>
import data from "@/data";

export default {
  name: 'TopList',
  data() {
      return {
        data : data
      }
  },
  methods: {
    detailshow(index){
      this.$router.push({
        name: "Detail",
        params:{
          contentId: index
        }
      })
    }
  },
}
</script>

<style>
.review-item{
  border: 1px solid gray;
}
.review-item li {
  list-style: none;
}
</style>
