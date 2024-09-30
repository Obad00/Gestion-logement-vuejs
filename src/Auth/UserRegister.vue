<template>
    <div>
      <h2>Inscription</h2>
      <form @submit.prevent="registerUser">
        <input type="text" v-model="user.nom" placeholder="Nom" required />
        <input type="text" v-model="user.prenom" placeholder="Prénom" required />
        <input type="text" v-model="user.adresse" placeholder="Adresse" required />
        <input type="email" v-model="user.email" placeholder="Email" required />
        <input type="password" v-model="user.password" placeholder="Mot de passe" required />
        <input type="text" v-model="user.telephone" placeholder="Téléphone" required />
        <select v-model="user.role">
          <option value="LOCATAIRE">Locataire</option>
          <option value="PROPRIETAIRE">Propriétaire</option>
          <option value="ADMIN">Administrateur</option>
        </select>
        <button type="submit">S'inscrire</button>
      </form>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {
          nom: '',
          prenom: '',
          adresse: '',
          email: '',
          password: '',
          telephone: '',
          role: 'ROLE_USER',
        },
        message: '',
      };
    },
    methods: {
      async registerUser() {
        try {
          const response = await axios.post('http://localhost:8081/auth/register', this.user);
          this.message = response.data; // Réponse de l'API
        } catch (error) {
          this.message = error.response.data; // Gérer les erreurs
        }
      },
    },
  };
  </script>
  