<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white p-3 sticky-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <a class="navbar-brand" href="#">Navbar</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <button @click="showPriceList" class="btn btn-outline-light">Price List</button>
          </li>
          <li class="nav-item">
            <a class="btn btn-primary" href="#">Register</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    showPriceList() {
      window.open('https://i.ibb.co/B6kNgqw/Black-And-Yellow-Minimalist-Photography-Pricelist.png', '_blank');
    }
 
  }
}
</script>

<style scoped>
nav {
  background-color: #1A1E25;
}

.navlink {
  color: white;
}

.list {
  background-color: purple;
}

.list:hover {
  background-color: yellow;
}

.nav-link {
  color: yellow;
}

.price-list-container {
  margin-top: 20px;
  text-align: center;
 
}

.price-list-image {
  margin-top: 10px;
}
</style>
