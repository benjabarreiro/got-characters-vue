<template>
  <header>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/stark">Stark</router-link> |
      <router-link to="/lannister">Lannister</router-link> |
      <router-link to="/targaryen">Targaryen</router-link> |
      <router-link to="/baratheon">Baratheon</router-link>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

h1 {
    font-size: 50px;
    padding: 0;
    margin: 0;
}
a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
    color: #42b983;
}
</style>