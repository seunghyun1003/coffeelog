<template>
    <div id="create">
        <div class="title">
            <h2>등록</h2>
        </div>
        <b-container>
            <b-row>
                <b-col>
                <b-btn @click="cancel()">취소</b-btn>
                </b-col>
                <b-spacer></b-spacer>
                <b-col>
                <b-btn @click="index !== undefined ? reviewupdate() : reviewcreate()">{{ index !== undefined ? "수정 완료" : "작성 완료" }}</b-btn>
                </b-col>
            </b-row>
        </b-container>
        <div class="review-content">
            <textarea 
                v-model="content"
                label="content" 
                placeholder="리뷰 작성"
            >
            </textarea>
            <v-img class="preview-img"></v-img>
        </div>
        <b-container>
            <b-row>
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
                        <b-icon>mdi-camera</b-icon>
                    </b-btn>
                </b-col>
                <b-col>
                    <b-text-field  
                        v-model="cafe_name"
                        label="cafe_name" 
                        placeholder="카페명"
                    >
                    </b-text-field>
                </b-col>
                <b-col>
                    <b-text-field 
                        v-model="cafe_location"
                        label="cafe_location" 
                        placeholder="장소 직접 입력"
                    >
                    </b-text-field>
                </b-col>
                <b-col>
                    <b-rating
                        v-model="rating"
                        background-color="orange lighten-3"
                        color="orange"
                        medium
                    ></b-rating>
                </b-col>
            </b-row>
        </b-container>
    
    </div>
</template>

<script>
import data from '@/data';

export default {
    name: 'Create',
    data(){
        const index = this.$route.params.contentId
        return{
            title:index !== undefined ? "리뷰 수정" : "리뷰 작성",
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
        reviewupdate() {
            data[this.index].cafe_name = this.cafe_name
            data[this.index].cafe_location = this.cafe_location
            data[this.index].content = this.content
            data[this.index].rating = this.rating
            this.$router.push({
                path: '/'
            })
        },
        cancel() {
            var conf = confirm("리뷰작성을 취소하시겠습니까?");
            if(conf){
                this.$router.push({
                    path: '/'
                })
            }
        }
    },
}
</script>

<style scoped>
.review-content{
    width: 100%;
    height: 100%;
    border: 1px solid gray;
}
textarea{
    width: 100%;
    padding: 20px;
    height: 300px;
}
.preview-img{
    width: 200px;
}
</style>
