<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <b-btn type="button">
                        <font-awesome-icon icon="thumbtack"/> 카페 장소
                    </b-btn>
                </b-col>
                <b-col>
                    <input 
                        ref="imageInput" 
                        type="file" 
                        multiple
                        truncate-length="15"
                        prepend-icon="mdi-camera"
                        accept="image/png, image/jpeg, image/bmp"
                        hidden 
                    >
                    <b-btn type="button">
                        <font-awesome-icon icon="image"/> 사진 추가
                    </b-btn>
                </b-col>
            </b-row>
        </b-container>
        <div class="review-content">
            <v-text-field
                v-model="title"
                label="제목"
                clearable
            ></v-text-field>
            <textarea 
                v-model="content"
                placeholder="리뷰 작성"
            >
            </textarea>
            <v-img class="preview-img"></v-img>
        </div>
    </div>
</template>

<script>
import data from '@/data';

export default {
    name: 'Create',
    data(){
        const index = this.$route.params.contentId
        return{
            pagetitle:index !== undefined ? "수정" : "등록",
            data:data,
            index: index,
            cafe_name : index !== undefined ? data[index].cafe_name : "",
            cafe_location : index !== undefined ? data[index].view.cafe_location : "",
            content : index !== undefined ? data[index].content : "",
            rating : index !== undefined ? data[index].rating : "",
        }
    },
    methods: {
        reviewcreate() {
            this.data.push({
                cafe_name : this.cafe_name,
                cafe_location : this.cafe_location,
                content : this.content,
                rating : this.rating,
            })
            this.$router.push({
                path: '/'
            })
        },
    },
}
</script>

<style scoped>
.review-content{
    width: 100%;
    height: 100%;
    padding: 0.8em 1.2em;
    border: 1px solid gray;
}
.v-input{
    width: 100%;
}
textarea{
    width: 100%;
    height: 15em;
}
.preview-img{
    width: 200px;
}
</style>
