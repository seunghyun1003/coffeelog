<template>
    <div id="nav">
        <b-button v-b-toggle.sidebar-backdrop>
            <font-awesome-icon icon="bars"/>
        </b-button>

        <b-sidebar
            id="sidebar-backdrop"
            title="회원님"
            backdrop
            shadow
        >
            <div v-if="user">
                <router-link to="/mypage">마이페이지></router-link>
            </div>
            <ul class="nav-link-wrap">
                <li><router-link to="/home"><font-awesome-icon icon="home"/>home</router-link></li>
                <li><router-link to="/topcafe"><font-awesome-icon icon="fire"/>인기 게시글</router-link></li>
                <li><router-link to="/localtopcafe"><font-awesome-icon icon="map"/>지역별 게시글</router-link></li>
            </ul>
            <div>
                <div v-if="user">
                    <div @click="logout">로그아웃</div>
                </div>
                <div v-else>
                    <router-link to="/login">로그인</router-link>
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
</style>
