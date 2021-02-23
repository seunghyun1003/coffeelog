<template>
  <div id="home">
      <div>
        인기동네
      </div>
      <div>
        많이 본 게시글
      </div>
      <button class="create-btn"><router-link to="/create"><font-awesome-icon icon="edit"/></router-link></button>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
#home {
}
</style>
