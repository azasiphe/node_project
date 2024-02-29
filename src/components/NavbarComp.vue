<template>
  <nav class="navbar navbar-expand-lg text-white p-3">
  <div class="container-fluid">
    <ul class="navbar-nav gap-4">
      <li class="nav-item">
        <router-link to="/" class="navlink">Home</router-link> |
      </li>
      <li class="nav-item">
        <router-link to="/about" class="navlink">About</router-link> |
      </li>
      <li class="nav-item">
        <router-link to="/products" class="navlink">Products</router-link> |
      </li>
      <li class="nav-item">
        <router-link to="/admin" class="navlink">Admin</router-link> |
      </li>
      <li class="nav-item">
        <router-link to="/contact" class="navlink">Contact</router-link>
      </li>
    </ul>
    
    <a class="navbar-brand" href="#">Navbar</a>
    
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
    </ul>
</div>
</nav>
</template>

<script>
export default {
  components:{

  }
}
</script>

<style scoped>
nav{
  background-color: #1A1E25;
}
.navlink{
  color: white;
}
/* footer p{
  padding: 40px 0;
  text-align: center;
} */

</style>