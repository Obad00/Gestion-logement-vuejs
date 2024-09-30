<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="loginUser">
        <input type="email" v-model="credentials.email" placeholder="Email" required />
        <input type="password" v-model="credentials.password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        credentials: {
          email: '',
          password: '',
        },
        message: '',
      };
    },
    methods: {
      async loginUser() {
        try {
          const response = await axios.post('http://localhost:8081/auth/login', this.credentials);
          localStorage.setItem('token', response.data); // Stocker le JWT
          this.message = "Connexion réussie!";
        } catch (error) {
          this.message = error.response.data; // Gérer les erreurs
        }
      },
    },
  };
  </script>
  