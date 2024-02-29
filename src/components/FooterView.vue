<template>
  <footer>
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
  color: aqua;
}
footer p{
  padding: 20px 0;
  text-align: center;
}

</style>