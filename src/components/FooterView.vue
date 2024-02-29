<template>
  <footer class="container-fluid bg-dark py-1">
    <p>Copyright &copy; 2024 All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
        data() {
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
footer{
  background-color: #1A1E25;
  color: yellow;
}
footer p{
  padding: 10px 0;
  text-align: center;
}

</style>