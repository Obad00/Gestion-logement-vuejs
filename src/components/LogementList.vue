<template>
    <div>
      <h1>Liste des logements</h1>
      <ul>
        <li v-for="logement in logements" :key="logement.id">
          {{ logement.titre }} - {{ logement.description }}
          <button @click="editLogement(logement.id)">Modifier</button>
          <button @click="deleteLogement(logement.id)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import logementService from '@/services/logementService';
  
  export default {
    data() {
      return {
        logements: []
      };
    },
    mounted() {
      this.fetchLogements();
    },
    methods: {
        fetchLogements() {
    const token = localStorage.getItem('token'); // Récupérer le token stocké
    logementService.getAllLogements(token) // Passer le token à votre service
      .then(response => {
        this.logements = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des logements:', error);
      });
  },

  editLogement(id) {
        this.$router.push(`/logements/${id}/edit`);
      },
      deleteLogement(id) {
        const token = localStorage.getItem('token'); // Assurez-vous de gérer le token de l'utilisateur connecté
        logementService.deleteLogement(id, token)
          .then(() => {
            this.fetchLogements(); // Actualiser la liste après suppression
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  