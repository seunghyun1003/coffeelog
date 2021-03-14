<template>
    <div>
        <ImagePreview></ImagePreview>
        <ContentForm></ContentForm>
    </div>
</template>

<script>

import ImagePreview from '@/components/etc/ImagePreview.vue'
import ContentForm from '@/components/Forms/ContentForm.vue'
export default {
    name: 'Write',
    data() {
    },
    components: {
        ImagePreview,
        ContentForm,
    },
    props: {
    }
}
</script>

<style scoped>
</style>
