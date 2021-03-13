<template>
  <div>
    <UserInfoForm></UserInfoForm>
    <SubmitBtn></SubmitBtn>
  </div>
</template>

<script>
import UserInfo from '@/components/etc/UserInfo.vue'
import UserInfoForm from '@/components/Forms/UserInfoForm.vue'
import SubmitBtn from '@/components/etc/SubmitBtn.vue'
export default {
  name: 'MypageUpdate',
  data() {
      return {
      }
  },
  components: {
    UserInfo,
    UserInfoForm,
    SubmitBtn,
  }
}
</script>

<style>
</style>
