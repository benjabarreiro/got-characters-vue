<template>
  <div class="home">
    <h1>{{title}}</h1>
    <p>{{info}}</p>
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/98812300-fb27-4e3f-bc32-7e954df388a7/da8knil-976dadb6-c4d2-4380-b4c1-1fafd790f711.png" alt="Got-Houses">
  </div>
</template>

<script>


export default {
  name: 'Home',
  props: {
    title: String,
    info: String
  }
}
</script>

<style scoped>
  img {
    width: 560px;
  }
</style>