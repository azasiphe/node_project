<template>

  <h1 class="display-1">ADMIN PAGE</h1>
    <div class="products">
      <div class="add-product">
        <input v-model="prodID" type="text" placeholder="ID">
        <input v-model="prodName" type="text" placeholder="Name">
        <input v-model="quantity" type="number" placeholder="Quantity">
        <input v-model="amount" type="number" placeholder="Amount">
    
        <input v-model="prodUrl" type="text" placeholder="Product Image URL">
        <button @click="postProduct">Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Product Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
         
            <td>
              <img :src="product.prodUrl" alt="Product Image" style="max-width: 100px; max-height: 100px;">
            </td>
            <td><button @click="editProduct(product.prodID)">edit</button> </td>
            <td><button @click="deleteProduct(product.prodID)">delete</button></td>
          </tr>
        </tbody>
      </table>
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
  
      const prodID = null;
      const prodName = null;
      const quantity = null;
      const amount = null;
    
      const prodUrl = null;
  
      const deleteProduct = (prodID) => {
        store.dispatch('deleteProduct', prodID);
      };
  
      const editProduct = (prodID) => {
        const edit = {
          prodID: prodID,
          prodName: prodName,
          quantity: quantity,
          amount: amount,
         
          prodUrl: prodUrl
        };
        store.dispatch('editProduct', edit);
      };
  
      const postProduct = () => {
        const newProduct = {
          prodName: prodName,
          quantity: quantity,
          amount: amount,
         
          prodUrl: prodUrl
        };
        store.dispatch('postProduct', newProduct);
      };
  
      return {
        products,
        prodID,
        prodName,
        quantity,
        amount,
     
        prodUrl,
        deleteProduct,
        editProduct,
        postProduct
      };
    }
  };
  </script>



 
 
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 5px;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  .add-product {
  display: flex;
  padding:18px;
}

.input-field {
  margin-right: 10px;
}

.add-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}
  </style>