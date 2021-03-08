<template>
    <div>
        <div>
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
.preview-img{
    width: 200px;
}
</style>
