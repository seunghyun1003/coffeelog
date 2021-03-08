<template>
<b-container id="signup-container">
    <b-card flat>
        <b-toolbar flat>
            <b-toolbar-title style="text-align: center;">Register</b-toolbar-title>
        </b-toolbar>
        <div class="signup-form">
            <b-form-textarea flat class="signup-textfiled"
                v-model="username"
                label="Username"
                solo
            ></b-form-textarea>
            <b-form-textarea flat class="signup-textfiled"
            v-model="email"
            label="Email"
            solo
            ></b-form-textarea>
            <b-btn
            @click="signup()"
            rounded
            color="normal"
            >
            이메일 인증 요청
            </b-btn>
            <b-form-textarea flat class="signup-textfiled"
                v-model="password"
                label="PassWord"
                type="password"
                solo
            ></b-form-textarea>
            <b-form-textarea flat class="signup-textfiled"
                v-model="ckpassword"
                label="PassWord 확인"
                type="password 확인"
                solo
            ></b-form-textarea>
            <b-btn
            @click="signup()"
            rounded
            color="primary"
            dark
            >
            가입완료
            </b-btn>
            <div><router-link to="/login">이미 회원이시라면? Login</router-link></div>
        </div>
    </b-card>
</b-container>
</template>

<script>
export default {
    name: 'register',
    data: () => ({
        username: '',
        email: '',
        password: '',
        ckpassword: '',
        allUsers:[
            {id:1, name:'admin',email:"admin@admin.com",password:"1234"}
        ]
    }),
    methods: {
        signup(){
            console.log("회원가입 " +this.username, this.email, this.password, this.ckpassword)
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#signup-container{
    max-width: 450px;
    width:100%;
}
.signup-textfiled{
    border: 1px solid black;
    border-radius: 0.25em;
    margin: 1em;
}
.card{
  position: static;
}
</style>

