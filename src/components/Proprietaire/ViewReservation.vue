<template>
    <div>
      <h1>Détails de la Réservation</h1>
      <p><strong>Logement :</strong> {{ reservation.logement.titre }}</p>
      <p><strong>Adresse :</strong> {{ reservation.logement.adresse }}</p>
      <router-link :to="'/reservations/' + reservation.id + '/edit'">Modifier</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        reservation: {}
      };
    },
    props: ['id'],
    mounted() {
      axios.get(`/api/reservations/${this.id}`)
        .then(response => {
          this.reservation = response.data;
        })
        .catch(error => {
          console.error("Erreur lors de la récupération de la réservation:", error);
        });
    }
  };
  </script>
  

  <style scoped>
  
</style>