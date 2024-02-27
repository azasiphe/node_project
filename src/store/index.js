import { createStore } from 'vuex';
import axios from 'axios';

const baseUrl = 'https://node-project-3.onrender.com';

export default createStore({
  state: {
    products: []
  },
  getters: {
    allProducts(state) {
      return state.products;
    }
    
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    setProducts(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    async fetchProducts({commit}) {
      try {
        const response = await axios.get(`${baseUrl}/products`) ;
        const products = await response.data 
        if(products){
          commit('SET_PRODUCTS', products);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
  ,
  async postProduct({ commit }, newItem) {
    try {
      await axios.post(baseUrl + '/products', newItem);
      
      commit('fetchProducts');
    } catch (error) {
      console.error(error);
      window.location.reload()
    }
  }
  
 ,
  async deleteProduct({commit}, prodID){
    await axios.delete(baseUrl+`/products/${prodID}`)
    window.location.reload()
   },
   async editProduct({commit}, update){
    console.log(update);
    await axios.patch(baseUrl+'/products/' + update.prodID, update)

   },
},
modules: {
}
})
    
  ;