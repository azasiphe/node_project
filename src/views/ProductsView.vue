<template>
    <div class="products">
      <div class="product-cards">
        <div v-for="product in products" :key="product.prodID" class="product-card">
          <img :src="product.prodUrl" alt="Product Image" class="product-image">
          <div class="product-details">
            <h3 class="product-name">{{ product.prodName }}</h3>
            <p class="product-amount">{{ product.amount }}</p>
          
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
  
      const products = computed(() => store.getters.allProducts);
  
      onMounted(() => {
        store.dispatch('fetchProducts');
      });
  
      return {
        products
      };
    }
  };
  </script>
  <style scoped>
  .product-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Display four products in each row */
    grid-template-rows: auto auto; /* Two rows */
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #dddddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    width: 100%;
    height: 200px;
    object-fit: contain; /* Ensures entire image is visible without distortion */
  }
  
  .product-details {
    padding: 10px;
  }
  
  .product-name {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .product-amount,
  .product-quantity {
    margin: 5px 0;
    font-size: 14px;
  }
  </style>
  