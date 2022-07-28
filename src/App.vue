<template>
  <div id="app">
    <div class="lg:fixed lg:top-0 lg:left-0 p-4 lg:h-full py-4 border-r-4 lg:w-72">
      <Header></Header>
    </div>
    <div class="body">
      <Encabezado></Encabezado>
      <router-view/>
    </div>
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Encabezado from './components/Encabezado.vue'

export default {
  name: 'App',
  components: {
    Header,
    Encabezado
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.body{
  padding-left: 0px;
}

@media screen and (min-width: 1024px) {
  .body{
    padding-left: 300px !important;
  } 
}
</style>
