<template>
  <div id="app">
    <div class="nav-wrap">
      <Nav></Nav>
      <span class="logo">coffeelog</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a, button{
  text-decoration: none;
  list-style: none;
}

.nav-wrap{
  display: flex;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 55px;
  line-height: 55px;
}

.logo{
  font-size: x-large;
  font-weight: 800;
  margin: 0 auto;
}
</style>
