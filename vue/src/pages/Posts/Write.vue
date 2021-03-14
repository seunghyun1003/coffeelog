<template>
    <div>
        <ImagePreview></ImagePreview>
        <ContentForm></ContentForm>
        <SubmitBtn></SubmitBtn>
    </div>
</template>

<script>

import ImageForm from '@/components/etc/ImagePreview.vue'
import ContentForm from '@/components/Forms/ContentForm.vue'
import SubmitBtn from '@/components/etc/SubmitBtn.vue'
export default {
    name: 'Write',
    data() {
        return {
        }
    },
    components: {
        ImageForm,
        ContentForm,
        SubmitBtn,
    }
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
