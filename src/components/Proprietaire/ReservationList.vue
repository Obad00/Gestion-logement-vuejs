<template>



<header style="height: 90px;">
        <nav>
    <a href="#">
        <img src="@/assets/image/logo.png" alt="#" style="margin-top: 20px; margin-left: 95px; position: relative; z-index: 1;">
    </a>
    
    <img class="hamburger" src="burger-icon.png" alt="Menu" onclick="toggleMenu()" style="cursor: pointer; display: none; margin-left: auto;">
    
    <ul class="nav-menu">
        <li><a href="logementProprietaire">Accueil</a></li>
        <li><a href="/reservations">Historique des demandes</a></li>
        <li @click.prevent="logout">
  <a href="#">Déconnexion</a>
</li>
    </ul>


    <span class="user-nom" style="margin-left: 200px; font-size: 16px; font-weight: bold;">
        Prenom Nom
    </span>
</nav>

</header>


    <div class="reservation-container">
      <h2>Liste des Réservations</h2>
  
      <!-- Tableau des réservations -->
      <table v-if="reservations.length">
        <thead>
          <tr>
            <th>Logement</th>
            <th>Adresse</th>
            <th>Réservé par</th>
            <th>E-mail</th> <!-- Nouvelle colonne pour l'e-mail -->
            <th>Téléphone</th> <!-- Nouvelle colonne pour le numéro de téléphone -->
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in reservations" :key="reservation.id">
            <td>{{ reservation.logement.titre }}</td>
            <td>{{ reservation.logement.adresse }}</td>
            <td>{{ reservation.user.nom }} {{ reservation.user.prenom }}</td>
            <td>{{ reservation.user.email }}</td> <!-- Affichage de l'e-mail -->
            <td>{{ reservation.user.telephone }}</td> <!-- Affichage du numéro de téléphone -->
            <td>{{ formatStatut(reservation.statut) }}</td>
            <td>
              <button @click="openModal(reservation)" aria-label="Accepter ou Refuser">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                  <path d="M15.5 0h-15A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 15.5 0zM1 1h14v14H1V1zm7 3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5A.5.5 0 0 1 8 4zm0 6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 10z"/>
                </svg>
              </button>
              <button @click="deleteReservation(reservation.id)" aria-label="Supprimer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h2a1 1 0 0 1 1 1v1H0V2a1 1 0 0 1 1-1h2V.5a.5.5 0 0 1 .5-.5zM1 4v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4H1zm4.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z"/>
                </svg>
              </button>
              <button @click="viewDetails(reservation)" aria-label="Détails">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                  <path d="M8 3c-3 0-5.5 2-7 4a8 8 0 0 0 0 6c1.5 2 4 4 7 4s5.5-2 7-4a8 8 0 0 0 0-6c-1.5-2-4-4-7-4zm0 10c-2 0-3.5-1-5-3 1.5-2 3-3 5-3s3.5 1 5 3c-1.5 2-3 3-5 3zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                </svg>
              </button>
            </td>

          </tr>
        </tbody>
      </table>
  
      <p v-else>Aucune réservation trouvée.</p>
  
      <!-- Popup pour accepter/refuser la réservation -->
      <div v-if="selectedReservation" class="modal">
        <div class="modal-content">
          <h3>Gérer la réservation</h3>
          <p>Souhaitez-vous accepter ou refuser cette réservation ?</p>
          <button @click="acceptReservation(selectedReservation.id)">Accepter</button>
          <button @click="declineReservation(selectedReservation.id)">Refuser</button>
          <button @click="closeModal">Annuler</button>
        </div>
      </div>
    </div>


    <footer>
        <div style="display: flex;">
            <a href=""><img src="@/assets/image/logo.png" alt=""></a>
            <ul>
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
        <p>© 2024 Hauss. Tous droits réservés.</p>
    </footer>
  </template>
  
  
  <script>
  import reservationService from '@/services/reservationService';
  
  export default {
    data() {
      return {
        reservations: [],
        selectedReservation: null, // Pour gérer la réservation à accepter/refuser
        token: '' // Gestion du token d'authentification
      };
    },
    created() {
      this.loadReservations();
    },
    methods: {
      // Charger toutes les réservations de l'utilisateur
      loadReservations() {
        reservationService.getUserReservations()
          .then(response => {
            this.reservations = response.data;
          })
          .catch(error => {
            console.error('Erreur lors du chargement des réservations :', error);
          });
      },

      formatStatut(statut) {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'En attente';
      case 'ACCEPTEE':
        return 'Acceptée';
      case 'DECLINEE':
        return 'Refusée';
      default:
        return 'Inconnu';
    }
  },
  
      // Supprimer une réservation
      deleteReservation(id) {
        reservationService.deleteReservation(id)
          .then(() => {
            this.reservations = this.reservations.filter(r => r.id !== id);
          })
          .catch(error => {
            console.error('Erreur lors de la suppression de la réservation :', error);
          });
      },
  
      // Voir les détails d'une réservation
      viewDetails(reservation) {
        // Logique pour afficher plus de détails (rediriger vers une page ou afficher un modal)
        console.log('Détails de la réservation :', reservation);
      },
  
      // Ouvrir le modal pour accepter/refuser
      openModal(reservation) {
        this.selectedReservation = reservation;
      },
  
      // Fermer le modal
      closeModal() {
        this.selectedReservation = null;
      },
  
      
     // Accepter une réservation
            // Accepter une réservation
acceptReservation(id) {
    reservationService.updateReservationStatus(id, 'ACCEPTEE') // 'ACCEPTEE' est une chaîne
    .then(() => {
        this.loadReservations();
        this.closeModal();
    })
    .catch(error => {
        console.error('Erreur lors de l\'acceptation de la réservation :', error);
    });
},

// Refuser une réservation
declineReservation(id) {
    reservationService.updateReservationStatus(id, 'DECLINEE') // 'DECLINEE' est une chaîne
    .then(() => {
        this.loadReservations();
        this.closeModal();
    })
    .catch(error => {
        console.error('Erreur lors du refus de la réservation :', error);
    });
}


    }
  };
  </script>
  
  <style scoped>
  .reservation-container {
    max-width: 800px;
    margin: auto;
  }

  .user-nom {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #e5e7eb;
    margin-top: 37px;
}
  
  h2 {
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 16px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 16px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    margin-right: 8px;
    padding: 8px 16px;
    background-color: #356F37;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #4cae4c;
  }
  
  /* Modal styling */
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
  }

.btn1 {
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;


}

.btn2 {
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #356F37;
    background-color: #ffffff;
}

  </style>
  