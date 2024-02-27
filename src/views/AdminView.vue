<template>

 
    <div class="products">
      <h1 class="display-1">ADMIN PAGE</h1>
      
      <div class="add-product">
        <input v-model="prodID" type="text" placeholder="ID">
        <input v-model="prodName" type="text" placeholder="Name">
        <input v-model="quantity" type="number" placeholder="Quantity">
        <input v-model="amount" type="number" placeholder="Amount">
    
        <input v-model="prodUrl" type="text" placeholder="Product Image URL">
        <button class="add" @click="postProduct">Add</button>
      </div>
      <table class="table-admin">
        <thead>
          <tr class="tb">
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Product Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody class="tb">
          <tr v-for="product in products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.amount }}</td>
         
            <td>
              <img :src="product.prodUrl" alt="Product Image" style="max-width: 100px; max-height: 100px;">
            </td>
            <td><button  class="edit" @click="editProduct(product.prodID)">edit</button> </td>
            <td><button class="delete" @click="deleteProduct(product.prodID)">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
 <script>
 import { onMounted, computed, ref } from 'vue';
 import { useStore } from 'vuex';
 
 export default {
   setup() {
     const store = useStore();
 
     const products = computed(() => store.getters.allProducts);
 
     onMounted(() => {
       store.dispatch('fetchProducts');
     });
 
     const prodID = ref(null);
     const prodName = ref(null);
     const quantity = ref(null);
     const amount = ref(null);
     const prodUrl = ref(null);
     const editMode = ref(false);
     let editProductId = null;
 
     const deleteProduct = (prodID) => {
       store.dispatch('deleteProduct', prodID);
     };
 
     const editProduct = (product) => {
       editMode.value = true;
       editProductId = product.prodID;
       prodID.value = product.prodID;
       prodName.value = product.prodName;
       quantity.value = product.quantity;
       amount.value = product.amount;
       prodUrl.value = product.prodUrl;
     };
 
     const saveEdit = () => {
       const editedProduct = {
         prodID: prodID.value,
         prodName: prodName.value,
         quantity: quantity.value,
         amount: amount.value,
         prodUrl: prodUrl.value
       };
       store.dispatch('updateProduct', editedProduct);
       editMode.value = false;
       clearFields();
     };
 
     const clearFields = () => {
       prodID.value = null;
       prodName.value = null;
       quantity.value = null;
       amount.value = null;
       prodUrl.value = null;
     };
 
     const cancelEdit = () => {
       editMode.value = false;
       clearFields();
     };
 
     const postProduct = () => {
       const newProduct = {
         prodName: prodName.value,
         quantity: quantity.value,
         amount: amount.value,
         prodUrl: prodUrl.value
       };
       store.dispatch('postProduct', newProduct);
       clearFields();
     };
 
     return {
       products,
       prodID,
       prodName,
       quantity,
       amount,
       prodUrl,
       editMode,
       editProduct,
       saveEdit,
       cancelEdit,
       deleteProduct,
       postProduct
     };
   }
 };
 </script>



 
 
  <style scoped>


.products{
    background-image: url();
    background-size: cover;
    width: 100%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid black;
    text-align: left;
    padding: 5px;
  }
  
 
  .add-product {
  display: flex;
  padding:20px;
  gap:10px;
  margin: 0 0 0 8%;
  border: 5px;
 border-radius: 20px solid black;
  
}
.edit{
  padding: 13px;
  border: 4px;
  border-radius: 11px;
  background-color: white;
  color: black;
}
.delete{
  padding: 10px;
  border: 3px;
  border-radius: 10px;
  background-color: black;
  color: yellow;
  
}
.delete:hover{
  background-color: purple;
}
.edit:hover{
  background-color: purple;
}
.input-field {
  margin-right: 10px;
}

.add {
  padding: 8px 16px;
  background-color: purple;
  color: white;
  border-radius: 5px  ;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}






  </style>