<template>
    <div class="users-table">
      <h1 class="display-1">
        <router-link :to="{ name: currentPage === 'admin' ? 'user' : 'admin' }">
          {{ currentPage === 'admin' ? 'USERS PAGE' : 'ADMIN PAGE' }}
        </router-link>
      </h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Email</th>
            <th>User Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.Age }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.Role }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.userProfile }}</td>
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
  
      const users = computed(() => store.getters.allusers);
  
      onMounted(() => {
        store.dispatch('fetchusers');
      });
  
      return {
        users,
        currentPage() {
          return this.$route.name;
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .users-table {
    text-align: center;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>