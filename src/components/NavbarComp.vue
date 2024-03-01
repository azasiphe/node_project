<template>
  <nav class="navbar navbar-expand-lg text-white p-3">
  <div class="container-fluid">
    <ul class="navbar-nav gap-4">
      <li class="nav-item">
      |  <router-link to="/" class="navlink">Home</router-link> |
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
    
    <ul class="navbar-nav">

    <li class="nav-item">
          <button @click="showPriceList">Price List</button>
        </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
    </ul>
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
