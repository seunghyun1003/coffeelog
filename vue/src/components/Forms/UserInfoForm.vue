<template>
    <div id="userinfoform">
        <div class="userimgform">
            유저 사진<br/>
            사진 선택>
        </div>
        <b-form>
            <b-form-group 
                id="input-group-1" 
                label="이름" 
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="username"
                placeholder="Enter name"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-2"
                label="Email"
                label-for="input-2"
            >
                <b-form-input
                id="input-2"
                v-model="useremail"
                type="email"
                placeholder="Enter email"
                ></b-form-input>
                <b-button @click="onDupcheck">중복 검사</b-button>
            </b-form-group>
            
            <div class="submitbtns">
                <b-button @click="onCancel">취소</b-button>
                <b-button @click="onSubmit" variant="primary">수정 완료</b-button>
            </div>
        </b-form>
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
        onDupcheck(event) {
            alert('사용가능한 이메일입니다.')
        },
        onSubmit(event) {
            data[this.index].username = this.username
            data[this.index].useremail = this.useremail
            this.$router.push({
                path: '/mypage'
            })
        },
        onCancel(event) {
            var conf = confirm("수정을 취소하시겠습니까?");
            if(conf){
                this.$router.push({
                    path: '/mypage'
                })
            }
        }
    }
}
</script>

<style scoped>
.userimgform{
    height: 10em;
    border-bottom: 1px solid black;
}
.submitbtns{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
}
.submitbtns > button{
    width: 96%;
    margin: 2%;

}
</style>
