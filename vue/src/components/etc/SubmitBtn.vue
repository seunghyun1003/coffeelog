<template>
    <div id="btns">
        <b-container>
            <b-row>
                <b-col>
                    <b-btn @click="cancel()">취소</b-btn>
                </b-col>
                <b-col>
                    <b-btn 
                    @click="index !== undefined ? reviewupdate() : reviewcreate()"
                    variant="primary"
                    >
                        {{ index !== undefined ? "수정 완료" : "작성 완료" }}
                    </b-btn>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
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
#btns{
    position: fixed;
    bottom: 0;
    width: 100%;
}
button{
    width: 100%;
}
</style>
