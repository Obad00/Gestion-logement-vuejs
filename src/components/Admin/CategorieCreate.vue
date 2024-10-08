<template>
    <div>
      <h1>Ajouter une catégorie</h1>
      <form @submit.prevent="createCategorie">
        <!-- Nom de la catégorie -->
        <div>
          <label for="nom">Nom de la catégorie:</label>
          <input v-model="categorie.nom" type="text" id="nom" required />
        </div>
  
        <!-- Description de la catégorie -->
        <div>
          <label for="description">Description de la catégorie:</label>
          <textarea v-model="categorie.description" id="description" required></textarea>
        </div>
  
        <!-- Submit button -->
        <button type="submit">Créer</button>
      </form>
    </div>
  </template>
  
  <script>
  import categorieService from '@/services/categorieService';
  
  export default {
    data() {
      return {
        categorie: {
          nom: '',
          description: ''
        }
      };
    },
    methods: {
      createCategorie() {
        const token = localStorage.getItem('token');
        categorieService.createCategorie(this.categorie, token)
          .then(() => {
            this.$router.push('/categories'); // Redirection après création
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  