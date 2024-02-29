<template>
  <div class="product-page vh-100">
    <h1 class="display-1 text-warning mt-2">PRODUCT PAGE</h1>
      <div class="products mx-5 mb-3">
        <button class="filter-button space-between border-0 bg-dark text-" @click="toggleSort" id="filter">Sort </button>
        <input v-model="searchInput" placeholder="Search Product" class="search-input bg-dark">
        <button @click="search" class="search-button border-0 bg-dark">Search</button>
      </div>
      <div class="products container-lg mb-3">
        <div class="product-cards">
          <div v-for="product in sortedProducts" :key="product.prodID" class="product-card bg-dark border-0 text-warning">
            <img :src="product.prodUrl" alt="Product Image" class="product-image mt-2">
            <div class="product-details">
              <h3 class="product-name">{{ product.prodName }}</h3>
              <p class="product-amount">{{ product.amount }}</p>
              <button @click="viewmore(product)">View more</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const products = computed(() => store.getters.allProducts);
    const searchInput = ref('');
    const sortOrder = ref(1); 

    onMounted(() => {
      store.dispatch('fetchProducts');
    });

    const toggleSort = () => {
      sortOrder.value *= -1;
    };

    const search = () => {
      return products.value.filter(product =>
        product.prodName.toLowerCase().includes(searchInput.value.toLowerCase())
      );
    };

    const viewmore = (product) => {
      router.push({ name: 'view', params: { id: product.prodID } });
    };

    const sortedProducts = computed(() => {
      return search().sort((a, b) => {
     
        const nameA = a.prodName.toLowerCase();
        const nameB = b.prodName.toLowerCase();
        if (nameA < nameB) return -1 * sortOrder.value;
        if (nameA > nameB) return 1 * sortOrder.value;
        return 0;
      });
    });

    return {
      searchInput,
      toggleSort,
      search,
      viewmore,
      sortedProducts
    };
  }

};
</script>
<style scoped>
.product-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: auto auto; 
  gap: 20px;
}

.product-card {
  border-radius: 8px;
  overflow: hidden;
}


.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain; 
}


  .product-details {
    padding: 10px;
  }
  
  .product-name {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  
  .product-amount, .product-quantity {
    margin: 5px 0;
    font-size: 14px;
  }
  .product-page{
    background-image: url('https://i.ibb.co/YtRSYhS/istockphoto-538478165-612x612.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.search-input{
  opacity: .6;
}
.search-button{
  padding: 10px;
  border-radius: 0 10px 10px 0;
}
  </style>
  