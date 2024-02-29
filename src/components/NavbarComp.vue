<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/AboutView.vue">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/ProductsView.vue">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/AdminView.vue">Admin</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contactView.vue">Contact</a>
      </li>
    </ul>
    
    <!-- Logo in the middle -->
    <a class="navbar-brand mx-auto" href="#">Navbar</a>
    
    <!-- Register link at the end -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
    </ul>
    
    <!-- Toggler button for mobile -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Other navbar links can be added here -->
    </div>
  </div>
</nav>
</template>