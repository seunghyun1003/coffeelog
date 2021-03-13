<template>
    <div>
        <li>{{ data.title }}</li>
        <ImageSlider></ImageSlider>
        <div>
            <li>{{ data.cafe_name }}</li>
            <li>{{ data.cafe_location }}</li>
            <li>{{ data.content }}</li>
        </div>
    </div>
</template>

<script>
import data from "@/data";
import ImageSlider from '@/components/etc/ImageSlider.vue'

export default {
    name: 'Detail',
    data(){
        const index = this.$route.params.contentId
        return{
            data: data[index],
            index: index,
        }
    },
    components: {
        ImageSlider,
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
