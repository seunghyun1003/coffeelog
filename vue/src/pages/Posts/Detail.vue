<template>
    <div>
        <ImageSlider></ImageSlider>
        <ContentView></ContentView>
    </div>
</template>

<script>
import ImageSlider from '@/components/etc/ImageSlider.vue'
import ContentView from '@/components/etc/ContentView.vue'
export default {
  name: 'Detail',
  components: {
    ContentView,
    ImageSlider,
  },
  props: ['pageTitle'],
  data() {
    return {
      pageTItle: '디테일 페이지'
    }
  },
}
</script>

<style scoped>
</style>
