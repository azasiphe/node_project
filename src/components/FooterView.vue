<template>
  <footer class="container-fluid bg-dark py-1">
    <div class="row justify-content-center">
      <div class="col-auto">
        <p class="text-center">Copyright &copy; 2024 All Rights Reserved.</p>
      </div>
    </div>
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