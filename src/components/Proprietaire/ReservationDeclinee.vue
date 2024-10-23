<template>
    <header style="height: 90px;">
      <nav>
        <a href="#">
          <img src="@/assets/image/logo.png" alt="#" style="margin-top: 20px; margin-left: 95px; position: relative; z-index: 1;">
        </a>
  
        <img class="hamburger" src="burger-icon.png" alt="Menu" onclick="toggleMenu()" style="cursor: pointer; display: none; margin-left: auto;">
  
        <ul class="nav-menu">
          <li><a href="AccueilProprietaire">Accueil</a></li>
          <li><a href="/reservations">Historique des demandes</a></li>
          <li @click.prevent="logout">
            <a href="#">Déconnexion</a>
          </li>
        </ul>
  
        <!-- <span class="user-nom" style="margin-left: 200px; font-size: 16px; font-weight: bold;">
          Prenom Nom
        </span> -->
      </nav>
    </header>
  
    <div class="reservation-container">
      <h2>Liste des Réservations Déclinées</h2>
  
      <!-- Tableau des réservations refusées -->
      <table v-if="declinedReservations.length">
        <thead>
          <tr>
            <th>Logement</th>
            <th>Adresse</th>
            <th>Réservé par</th>
            <th>E-mail</th> <!-- Nouvelle colonne pour l'e-mail -->
            <th>Téléphone</th> <!-- Nouvelle colonne pour le numéro de téléphone -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="reservation in declinedReservations" :key="reservation.id">
            <td>{{ reservation.logement.titre }}</td>
            <td>{{ reservation.logement.adresse.regions }}</td>
            <td>{{ reservation.user.nom }} {{ reservation.user.prenom }}</td>
            <td>{{ reservation.user.email }}</td> <!-- Affichage de l'e-mail -->
            <td>{{ reservation.user.telephone }}</td> <!-- Affichage du numéro de téléphone -->
          </tr>
        </tbody>
      </table>
  
      <p v-else>Aucune réservation déclinée trouvée.</p>
  
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
          <li><a href="/">Accueil</a></li>
          <li><a href="/apropos">À propos</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/contact">Services</a></li>
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
      };
    },
    computed: {
      // Filtrer les réservations refusées
      declinedReservations() {
        return this.reservations.filter(reservation => reservation.statut === 'DECLINEE');
      }
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
    }
  };
  </script>
  
  
      
      <style scoped>
      .reservation-container {
        max-width: 1100px;
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
        margin-right: 10px; /* Ajoute un espace entre chaque bouton */
        padding: 4px 8px;
        color: white;
        border: none;
        border-radius: 5px; /* Ajout de bordures arrondies */
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }
    
    button:last-child {
        margin-right: 0; /* Pas de marge après le dernier bouton */
    }
    
    button:hover {
        background-color: #2a5430; /* Couleur au survol */
        transform: scale(1.05); /* Légère augmentation de la taille au survol */
    }
    
    button svg {
        width: 20px;
        height: 20px;
        vertical-align: middle; /* Aligner les icônes au milieu */
    }
    
    /* Différentes couleurs pour chaque icône */
    button.check-icon svg {
        fill: #28a745; /* Couleur verte pour "Accepter" */
    }
    
    button.trash-icon svg {
        fill: #dc3545; /* Couleur rouge pour "Supprimer" */
    }
    
    button.view-icon svg {
        fill: #EB9655; /* Couleur orange pour "Détails" */
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
    
    
      /* Changer la couleur des boutons dans le modal */
    .modal button {
        background-color: #EB9655; /* Couleur verte pour tous les boutons dans le modal */
        color: white;
    }
    
    .modal button:hover {
        background-color: #356F37; /* Couleur verte plus sombre au survol */
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
    
        /*style du footer*/
        footer {
        background: #000000;
        height: 270px;
    }
    
    footer .footer-top {
        display: flex;
    }
    
    footer img {
        margin-top: 90px;
        margin-left: 110px;
    }
    
    footer ul {
        display: flex;
        gap: 2rem;
        margin-left: 625px;
        margin-top: 100px;
    }
    
    footer li {
        list-style: none;
    }
    
    footer a {
        text-decoration: none;
        color: #ffffff;
        font-family: Poppins;
        font-size: 18px;
        font-weight: 700;
        line-height: 27px;
    
    }
    
    footer p {
       color: #ffffff;
        margin-top: 50px;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        width: 357px;
        height: 21px;
        margin-left: 500px;
    }
    
    @media (max-width: 768px) {
        footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #000000;
            height: 430px;
        }
        footer .footer-top {
            height: auto;
            display: flex;
            flex-direction: column;
        }
        footer ul {
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            margin-top: 0px;
        }
        footer p {
            color: #ffffff;
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
            margin-left: 0px;
        }
        footer img {
            margin-top: 40px;
            margin-bottom: 40px;
            margin-left: 0px;
        }
    }
    
    /*style du header*/
    header {
        background: linear-gradient(112.9deg, #356F37 0.98%, rgba(0, 0, 0, 0.84) 165.36%);
        width: 100%;
        height: 90px;
    }
    
    nav {
        display: flex;
        width: 100%;
        height: 100%;
    }
    
    nav ul {
        display: flex;
        gap: 2rem;
        margin-left: 500px;
        margin-top: 20px;
    }
    
    nav li {
        display: grid;
        list-style: none;
        place-content: right;
        position: relative;
        cursor: pointer;
        margin-top: 20px;
    }
    
    nav a {
        text-decoration: none;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        transition: 0.5s;
    }
    
    nav a:hover {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    
    }
    
    
      </style>
      