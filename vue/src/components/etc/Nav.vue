<template>
    <div id="nav">
        <b-button v-b-toggle.sidebar-backdrop>
            <font-awesome-icon icon="bars"/>
        </b-button>

        <b-sidebar
            id="sidebar-backdrop"
            title="coffeelog"
            backdrop
            shadow
        >
            <div class="nav-userinfo">
                <div v-if="user">
                    <div>유저님</div>
                    <div><router-link to="/mypage">마이페이지></router-link></div>
                </div>
                <div v-else>
                    <span>-님</span>
                </div>
            </div>
            <ul class="nav-link">
                <li><router-link to="/home"><font-awesome-icon icon="home"/>home</router-link></li>
                <li><router-link to="/topcafe"><font-awesome-icon icon="fire"/>인기 게시글</router-link></li>
                <li><router-link to="/localtopcafe"><font-awesome-icon icon="map"/>지역별 게시글</router-link></li>
            </ul>
            <div class="nav-btns">
                <div v-if="user">
                    <b-btn>
                        <div @click="logout">로그아웃</div>
                    </b-btn>
                </div>
                <div v-else>
                    <b-btn>
                        <router-link to="/login">로그인</router-link>
                    </b-btn>
                </div>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            user: true,
        }
    },
    methods: {
        logout() {
            console.log("로그아웃 버튼 클릭")
        }
    },
}
</script>

<style scoped>
#nav{
    text-align: start;
}
a{
    color: black;
}
.nav-userinfo{
    border-bottom: 1px solid black;
}
.nav-link > li{
    border-bottom: 1px solid black;
}
.nav-btns{
    position: fixed;
    bottom:0;
    width:100%;
}
.nav-btns button{
    width:92%;
    margin: 0 4%;
}
.nav-btns a{
    color: white;
}
</style>
