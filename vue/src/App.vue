<template>
  <div id="app">
    <div class="nav-wrap">
      <Nav></Nav>
      <span class="logo">{{pagetitle}}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/etc/Nav.vue'
export default {
  name: 'App',
  data() {
    return {
      pagetitle:"coffeelog",
    }
  },
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
}

a, a:hover, button, li{
  text-decoration: none;
  list-style: none;
}

.nav-wrap{
  display: flex;
  width: 100%;
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid black;
}
.logo{
  font-size: x-large;
  font-weight: 800;
  margin: 0 auto;
}
</style>
