<template>
    <div id="userinfoform">
        <div class="userimgform">
            유저 사진<br/>
            사진 선택>
        </div>
        <div>
            <div>
                <label for="username">이름</label>
                <textarea
                    v-model="username"
                    clearable
                ></textarea>
            </div>
            <div>
                <label for="useremail">Email</label>
                <textarea 
                    v-model="useremail"
                >
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        const index = this.$route.params.userId
        return{
            user: false,
            data:data,
            index: index,
            username : index !== undefined ? data[index].username : "",
            useremail : index !== undefined ? data[index].useremail : "",
        }
    },
    methods: {
        reviewcreate() {
            this.data.push({
                username : this.username,
                useremail : this.useremail,
            })
            this.$router.push({
                path: '/mypage/update'
            })
        },
    },
}
</script>

<style scoped>
.userimgform{
    height: 10em;
    border-bottom: 1px solid black;
}
</style>
