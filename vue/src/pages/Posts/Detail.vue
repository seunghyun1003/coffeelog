<template>
    <div>
        <div class="title">
            <h2>상세 페이지</h2>
        </div>
        <ImageSlider></ImageSlider>
        <ContentView></ContentView>
    </div>
</template>

<script>
import ImageSlider from '@/components/etc/ImageSlider.vue'
import ContentView from '@/components/etc/ContentView.vue'
export default {
  name: 'detail',
  components: {
    ImageSlider,
    ContentView,
  }
}
</script>

<style scoped>
</style>
