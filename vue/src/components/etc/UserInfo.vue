<template>
    <div id="userinfo">
        <div class="user-img">

        </div>
        <div>
            <div v-if="user">
                {{ user.name }}님
            </div>
            <div v-else>
                - 님
            </div>
        </div>
        <div>
            <router-link to="/mypage/update">수정하기 ></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: false,
        }
    },
}
</script>

<style scoped>
#userinfo{
    height: 10em;
    border-bottom: 1px solid black;
}
</style>
