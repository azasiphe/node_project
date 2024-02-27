<template>
  <h1 class="display-1">PRODUCT PAGE</h1>
  <div class="products-search mb-4 justify-content-start">

      <button class="filter-button space-between" @click="toggleSort" id="filter">Sort </button>
      <input v-model="searchInput" placeholder="" class="search-input">
      <button @click="search" class="search-button">Search</button>
    </div>
    <div class="products">

    <button class="bilter-button space-between" id="filter">Filter</button>
    <input>
    <button @click="search" id="search" for="searchInput" onclick="sortAlphabetically()">Search</button>
  </div>
    <div class="products container-lg">

      <div class="product-cards">
        <div v-for="product in sortedProducts" :key="product.prodID" class="product-card">
          <img :src="product.prodUrl" alt="Product Image" class="product-image">
          <div class="product-details">
            <h3 class="product-name">{{ product.prodName }}</h3>
            <p class="product-amount">{{ product.amount }}</p>

            <button @click="viewmore(product)">View more</button>

          <button @click="viewmore">view more</button>

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

.product-amount,
.product-quantity {
  margin: 5px 0;
  font-size: 14px;
}


  
  .product-card {
    border: 1px solid #dddddd;
    border-radius: 18px;
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
  