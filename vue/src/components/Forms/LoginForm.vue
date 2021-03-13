<template>
    <div>
        <b-card flat>
            <b-toolbar flat>
                <b-toolbar-title style="text-align: center;">Login</b-toolbar-title>
            </b-toolbar>
            <b-alert 
                :value="isLoginError"
                type="error"
            >에러 메시지</b-alert>
            <div class="login-form">
                <b-form-textarea flat class="login-textfiled"
                    v-model="email"
                    label="Email"
                    placeholder="email 입력하세요."
                    solo
                ></b-form-textarea>
                <b-form-textarea flat class="login-textfiled"
                    v-model="password"
                    label="PassWord"
                    type="password"
                    placeholder="password를 입력하세요."
                    solo
                ></b-form-textarea>
                <b-btn
                @click="login({
                    email,
                    password
                })"
                rounded
                color="primary"
                dark
                depressed
                >
                로그인
                </b-btn>
            </div>
            <div><router-link to="/register">아직 회원이 아니시라면?</router-link></div>
        </b-card>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    name: 'Login',
    data() {
        return {
            email : '',
            password : '',
        }
    },
    computed: {
        ...mapState(["isLogin","isLoginError"])
    },
    methods: {
        ...mapActions(['login'])
    }
};
</script>

<style scoped>
#login-container{
    max-width: 450px;
    width:100%;
}
.login-textfiled{
    border: 1px solid black;
    border-radius: 0.25em;
    margin: 1em;
}
.card{
  position: static;
}
</style>
