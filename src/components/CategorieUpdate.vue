<template>
    <div>
      <h1>Modifier la Catégorie</h1>
      <form @submit.prevent="mettreAJourCategorie">
        <div>
          <label for="nom">Nom de la catégorie :</label>
          <input v-model="categorie.nom" type="text" id="nom" required />
        </div>
        
        <button type="submit">Mettre à jour la catégorie</button>
      </form>
    </div>
  </template>
  
  <script>
  import CategorieService from '@/services/categorieService'; // Assurez-vous que le chemin est correct
  
  export default {
    data() {
      return {
        categorie: {
          id: null,
          nom: ''
        }
      };
    },
    async mounted() {
      this.categorie.id = this.$route.params.id; // Récupérer l'ID depuis l'URL
      await this.fetchCategorie();
    },
    methods: {
      async fetchCategorie() {
        try {
          const response = await CategorieService.getCategorieById(this.categorie.id);
          console.log('Réponse API:', response);
          this.categorie = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération de la catégorie:', error.response ? error.response.data : error.message);
        }
      },
      async mettreAJourCategorie() {
        const token = localStorage.getItem('token'); // Assurez-vous que le token est bien récupéré
        try {
          const response = await CategorieService.updateCategorie(this.categorie.id, this.categorie, token);
          console.log('Catégorie mise à jour avec succès:', response.data);
        } catch (error) {
          console.error('Erreur lors de la mise à jour de la catégorie:', error.response ? error.response.data : error.message);
        }
      },
    }
  };
  </script>
  
  <style scoped>
  /* Ajouter vos styles ici */
  </style>
  