<template>
  <!-- <nav>
    <router-link to="/" class="navlink">Home</router-link> |
    <router-link to="/about" class="navlink">About</router-link> |
    <router-link to="/products" class="navlink">Products</router-link> |
    <router-link to="/admin" class="navlink">Admin</router-link> |
    <router-link to="/contact" class="navlink">Contact</router-link>
    <router-link to="/view" class="navlink"></router-link>
    <router-link to="/user" class="navlink"></router-link>
  </nav> -->

  <NavbarComp/>
  <SpinnerComp/>
  <router-view/>
  <FooterView/>
</template>
<script>
import  FooterView from './components/FooterView.vue';
import NavbarComp from './components/NavbarComp.vue';
export default {
  components: {
    FooterView, 
    NavbarComp,
  }
};
</script>
<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navlink {
  font-size: x-large;
}
</style>
