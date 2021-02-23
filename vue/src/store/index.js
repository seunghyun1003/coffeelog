import Vue from 'vue'
import Vuex from 'vuex'

import router from "@/router"

import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userInfo: null,
        allUsers: [
            {id:1, name: "user1", email:"user1@user1.com", password:"user1"},
            {id:2, name: "user2", email:"user2@user2.com", password:"user2"},
        ],
        isLoginSuccess: false,
        isLoginError: false,
    },
    mutations:{
        //로그인이 성공했을 때,
        loginSuccess(state, payload){
            state.isLoginSuccess = true
            state.isLoginError = false
            state.userInfo = payload
        },
        //로그인이 실패했을 때,
        loginError(state){
            state.isLoginSuccess = false
            state.isLoginError = true
        },
        //로그아웃
        logout(state){
            state.isLoginSuccess = false
            state.isLoginError = false
            state.userInfo = null
        }
    },
    actions: {
        //로그인 시도
        login({state, commit}, loginObj){
            let selectedUser = null
            state.allUsers.forEach(user => {
            if (user.email === loginObj.email) selectedUser = user
            })
            if (selectedUser === null  || selectedUser.password !== loginObj.password) commit("loginError") 
            else{
            commit("loginSuccess",selectedUser)
            router.push({path: '/mypage'})
            }
            /*
            axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
            */
        },
        logout({commit}){
            commit("logout")
            router.push({path: ''})
        }
    }
})