<template>
    <div>
        <div class="title">
            <h2>상세 페이지</h2>
        </div>
        <div>
            <li>{{ data.cafe_name }}</li>
            <li>{{ data.cafe_location }}</li>
            <li>{{ data.content }}</li>
        </div>
        <div>
            <button @click="reviewupdate()">수정</button>
            <button @click="reviewdelete()">삭제</button>
        </div>
    </div>
</template>

<script>
import data from "@/data";

export default {
    name: 'Detail',
    data(){
        const index = this.$route.params.contentId
        return{
            data: data[index],
            index: index,
        }
    },
    methods: {
        reviewupdate() {
            this.$router.push({
                name: 'Create',
                params: {
                    contentId: this.index
                }
            })
        },
        reviewdelete() {
            data.splice(this.index, 1)
            this.$router.push({
                path: '/'
            })
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
