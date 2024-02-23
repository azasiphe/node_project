import { createStore } from 'vuex';
import axios from 'axios';
axios.defaults.withCredentials= true;
const baseUrl = 'http://localhost:3500';

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
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(baseUrl + '/products');
        commit('SET_PRODUCTS', response.data);
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