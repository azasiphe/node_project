import { createStore } from 'vuex';
import axios from 'axios';

const baseUrl = 'https://node-project-3.onrender.com';

export default createStore({
  state: {
    products: [],
    users:[]
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    allusers(state) {
      return state.users;
    }
    
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_USERS(state, users) { 
      state.users = users; 
    }
  },
  actions: {
    async fetchProducts({commit}) {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        const products = await response.data 
        if(products){
          commit('SET_PRODUCTS', products);
        }
      } catch (error) {
        console.error(error);
      }
    }
  ,
  async fetchusers({commit}) {
    try {
      const response = await axios.get(`${baseUrl}/users`);
      const users = await response.data; 
      if(users){
        commit('SET_USERS', users);
      }
    } catch (error) {
      console.error(error);
    }
  },
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
 async postusers({ commit }, newItem) {
  try {
    await axios.post(baseUrl + '/users', newItem);
    
    commit('fetchusers');
  } catch (error) {
    console.error(error);
    window.location.reload()
  }
},
  async deleteProduct({commit}, prodID){
    await axios.delete(baseUrl+`/products/${prodID}`)
    window.location.reload()
   },
   async deleteusers({commit}, userID){
    await axios.delete(baseUrl+`/users/${userID}`)
    window.location.reload()
   },
   async editproduct({commit}, update){
    console.log(update);
    await axios.patch(baseUrl+'/products/' + update.prodID, update)

   },
   async editusers({commit}, update){
    console.log(update);
    await axios.patch(baseUrl+'/users/' + updateuserID, update)

   },
},
modules: {
}
})
    
  ;