<template>
    <div>
      <h1>Liste des Catégories</h1>
      <ul>
        <li v-for="categorie in categories" :key="categorie.id">
          {{ categorie.nom }} - {{ categorie.description }}
          <button @click="editCategorie(categorie.id)">Modifier</button>
          <button @click="deleteCategorie(categorie.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import categorieService from '@/services/categorieService';
  
  export default {
    data() {
      return {
        categories: []
      };
    },
    created() {
      this.fetchCategories();
    },
    methods: {
      fetchCategories() {
        categorieService.getAllCategories()
          .then(response => {
            this.categories = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      editCategorie(id) {
        this.$router.push(`/categories/edit/${id}`);
      },
      deleteCategorie(id) {
        const token = localStorage.getItem('token');
        categorieService.deleteCategorie(id, token)
          .then(() => {
            this.fetchCategories(); // Rafraîchir la liste après suppression
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  