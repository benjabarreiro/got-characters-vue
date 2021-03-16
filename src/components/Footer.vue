<template>
  <footer>
      <p>Page made by Benjamín Barreiro</p>
      <a class="first" href="https://www.instagram.com/benja.barreiro_/">Instagram: @benja.barreiro_</a>
      <a href="https://www.linkedin.com/in/benjamin-barreiro/">LinkedIn Profile</a>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 10px;
        left: 28%;
    }
    p {
        margin-right: 20px;
    }
    a.first {
        margin-right: 20px;
    }
</style>