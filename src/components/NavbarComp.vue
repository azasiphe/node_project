<template>
  <nav class="navbar navbar-expand-lg text-white p-3">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  class="navbar-toggler-icon"></span>
    </button>
    <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
        <li class="nav-item">
        |  <router-link to="/" class="navlink">Home</router-link> |
        |  <router-link to="/" class="navlink" aria-current="page">Home</router-link> |
        </li>
        <li class="nav-item">
        |  <router-link to="/about" class="navlink">About</router-link> |
        </li>
        <li class="nav-item">
        |  <router-link to="/products" class="navlink">Products</router-link> |
        </li>
        <li class="nav-item">
        |  <router-link to="/admin" class="navlink">Admin</router-link> |
        </li>
        <li class="nav-item">
        |  <router-link to="/contact" class="navlink">Contact</router-link> |
        </li>
      </ul>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="navbar-brand">
        <img src="https://ibb.co/8xxFD50" alt="logo">
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
      </ul>
    </div>
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
.nav-link{
  color: yellow;
}
</style>
