<template>
  <div>
    <UserInfo></UserInfo>
    <MyPostList></MyPostList>
  </div>
</template>

<script>
import UserInfo from '@/components/etc/UserInfo.vue'
import MyPostList from '@/components/etc/MyPostList.vue'
export default {
  name: 'Mypage',
  data() {
      return {
      }
  },
  components: {
    UserInfo,
    MyPostList,
  }
}
</script>

<style>
</style>
