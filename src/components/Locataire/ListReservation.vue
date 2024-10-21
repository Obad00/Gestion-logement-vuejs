<template>



    <header style="height: 90px;">
            <nav>
                <a href="#"><img src="@/assets/image/logo.png" alt="#"
                        style="margin-top: 20px; margin-left: 95px;position: relative;z-index: 1;"></a>
                <ul>
                    <li><a href="/">Acceuil</a></li>
                    <li><a href="/apropos">A propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/contact">Services</a></li>
                </ul>
                <div class="btn">
                    <li @click.prevent="logout">
                      <a href="#">Déconnexion</a>
                    </li>
                </div>
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
              </tr>
            </thead>
            <tbody>
              <tr v-for="reservation in reservations" :key="reservation.id">
                <td>{{ reservation.logement.titre }}</td>
                <td>{{ reservation.logement.adresse.regions }}</td>
                <td>{{ reservation.user.nom }} {{ reservation.user.prenom }}</td>
                <td>{{ reservation.user.email }}</td> <!-- Affichage de l'e-mail -->
                <td>{{ reservation.user.telephone }}</td> <!-- Affichage du numéro de téléphone -->
                <td>{{ formatStatut(reservation.statut) }}</td>
              </tr>
            </tbody>
          </table>
      
          <p v-else>Aucune réservation trouvée.</p>
      
          <!-- Popup pour accepter/refuser la réservation -->
          
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

.btn {
    margin-left: 160px;
    margin-top: 30px;
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

      .reservation-container {
        max-width: 800px;
        margin: auto;
      }
      
      h2 {
        font-size: 24px;
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
        background-color: #5cb85c;
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
    
      </style>
      