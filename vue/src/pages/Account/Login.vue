<template>
    <div id="login">
        <LoginForm></LoginForm>
    </div>
</template>

<script>
import LoginForm from '@/components/Forms/LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginForm,
  }
}
</script>

<style scoped>
#login{
}
</style>
