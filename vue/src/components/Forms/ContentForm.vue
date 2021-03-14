<template>
    <div>
        <b-container>
            <b-row>
                <b-col>
                    <b-btn type="button">
                        <font-awesome-icon icon="thumbtack"/> 카페 장소
                    </b-btn>
                    <v-text-field
                        v-model="cafe_name"
                        label="카페명"
                        clearable
                    ></v-text-field>
                    <v-text-field
                        v-model="cafe_location"
                        label="카페 장소"
                        clearable
                    ></v-text-field>
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
            </div>
        </b-container>
        <div class="btns">
            <b-btn @click="cancel()">취소</b-btn>
            <b-btn 
            @click="index !== undefined ? reviewupdate() : reviewcreate()"
            variant="primary"
            >
                {{ index !== undefined ? "수정 완료" : "작성 완료" }}
            </b-btn>
        </div>
    </div>
</template>

<script>
import data from '@/data';
import ImagePreview from '@/components/etc/ImagePreview.vue'

export default {
    name: 'Create',
    components: {
        ImagePreview,
    },
    data(){
        const index = this.$route.params.contentId
        return{
            data:data,
            index: index,
            title : index !== undefined ? data[index].title : "",
            cafe_name : index !== undefined ? data[index].cafe_name : "",
            cafe_location : index !== undefined ? data[index].view.cafe_location : "",
            content : index !== undefined ? data[index].content : "",
        }
    },
    methods: {
        reviewcreate() {
            this.data.push({
                title : this.title,
                cafe_name : this.cafe_name,
                cafe_location : this.cafe_location,
                content : this.content,
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
            var conf = confirm("작성을 취소하시겠습니까?");
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
.btns{
    display: flex;
    position: fixed;
    bottom:0;
    width: 100%;
}
.btns > button{
    margin: 2%;
    width: 96%;
}

</style>
