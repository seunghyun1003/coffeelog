<template>
  <div id="home">
      <div>
        인기동네
      </div>
      <div>
        많이 본 게시글
      </div>
      <div class="review-list">
            <div class="review-item" :key="index" v-for="(value, index) in data" @click="detailshow(index)">
              <li>{{ value.cafe_name }}</li>
              <li>{{ value.cafe_location }}</li>
              <li>{{ value.content }}</li>
            </div>
        </div>
      <button class="create-btn"><router-link to="/create"><font-awesome-icon icon="edit"/></router-link></button>
  </div>
</template>

<script>
import data from "@/data";

export default {
  name: 'Home',
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
#home {
}
.review-item{
  border: 1px solid gray;
}
.review-item li {
  list-style: none;
}
</style>
