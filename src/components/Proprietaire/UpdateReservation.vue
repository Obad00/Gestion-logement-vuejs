<template>
    <div>
      <h1>Modifier la Réservation</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="logement">Logement</label>
          <input v-model="reservation.logementId" type="text" id="logement" />
        </div>
        <!-- Ajoute d'autres champs selon les besoins -->
        
        <div>
          <label for="date">Date de réservation</label>
          <input v-model="reservation.date" type="date" id="date" />
        </div>
        
        <button type="submit">Enregistrer les modifications</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'], // ID de la réservation passé en tant que prop via l'URL
    data() {
      return {
        reservation: {
          logementId: '',
          date: '',
          // Ajouter d'autres champs ici
        },
      };
    },
    mounted() {
      // Récupérer les détails actuels de la réservation
      this.fetchReservationDetails();
    },
    methods: {
      fetchReservationDetails() {
        axios.get(`/api/reservations/${this.id}`)
          .then(response => {
            this.reservation = response.data;
          })
          .catch(error => {
            console.error("Erreur lors de la récupération de la réservation:", error);
          });
      },
      submitForm() {
        // Envoyer les données modifiées au serveur
        axios.put(`/api/reservations/${this.id}`, this.reservation)
        .then(() => {
    alert("Réservation mise à jour avec succès !");
    this.$router.push('/reservations');
})

          .catch(error => {
            console.error("Erreur lors de la mise à jour de la réservation:", error);
          });
      },
    },
  };
  </script>
  