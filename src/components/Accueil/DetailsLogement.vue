<template>
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>


        <header>
        <nav>
            <a href="#"><img src="@/assets/image/logo.png" alt="Logo"></a>

            <!-- Hamburger icon -->
            <div class="hamburger" @click="toggleMenu">
            <div></div>
            <div></div>
            <div></div>
            </div>

            <!-- Navigation links -->
            <ul :class="{ active: isMenuActive }">
              <li><a href="/">Accueil</a></li>
                <li><a href="/logements">Logements</a></li>
                <li class="connexion-btn"><a href="/login">Connexion</a></li> <!-- Ajout du bouton Connexion ici -->
            </ul>
        </nav>
        </header>


        <main>
            <section style="width: 100%;height: 1100px;">
                <div v-if="logement" class="sect13">
                    <div style="display: flex;">
                        <h1>Détails du logement</h1>
                        <img class="rect13" src="@/assets/image/Rectangle 868 (1).png" alt="" style="z-index: -1;">
                        <img class="rect23" src="@/assets/image/Rectangle 868.png" alt="" style="position: relative; z-index: 1;">
                    </div>
                    <div style="border: 1px solid #25D366; border-radius: 8px; padding: 10px; display: flex; align-items: center; background-color: #e6f9f0; max-width: 400px;">
                        <a :href="'https://wa.me/' + logement.user.telephone" target="_blank" style="text-decoration: none; color: inherit; display: flex; align-items: center; transition: transform 0.3s;">
                            <img src="@/assets/image/WhatsApp-logo-modern-paint-splash-social-media-png-removebg-preview.png" alt="WhatsApp" style="width: 24px; height: 24px; margin-right: 8px; transition: transform 0.3s;">
                            <span style="color: #25D366; font-weight: bold;">Vous pouvez discuter via WhatsApp avec le propriétaire</span>
                        </a>
                    </div>

                    <br>
                    <br><br>
                    <div class="container3">
                        <h1 style="z-index: -1;">{{ logement.titre }}</h1>
                        <div style="display: flex;">
                            <img src="@/assets/image/salon-canape-table-cafe-television_1247529-2775.jpg" alt="" style="position: relative; z-index: 1;">
                            <p>{{ logement.description }}</p>
                        </div>
                        <div class="mini-icon">
            
                            <div>
                                <img src="@/assets/image/mdi_bed.png" alt="" class="icon">
                                <span >{{ logement.nombre_chambre }} chambres</span>
                            </div>
                        <br>
                            <br>
                            <div>
                                <img src="@/assets/image/fa-solid_bath.png" alt="" class="icon">
                                <span>{{ logement.nombre_toilette }} toilettes</span>
                            </div>
                        <br>
                            <br>
                            <div>
                                <img src="@/assets/image/fluent_globe-surface-20-filled.png" alt="" class="icon">
                                <span>{{ logement.surface }} m² de surface</span>
                            </div>
                            <button @click="passerReservation(logement.id)">Passer la réservation</button>
                        
                        </div>

                        
                    </div>   
                    <div  class="rectangle">
                        <img class="rectangle1" src="@/assets/image/Rectangle 868.png" alt="" style="z-index: -1;">
                        <img class="rectangle2" src="@/assets/image/Rectangle 868 (1).png" alt="" style="position: relative; z-index: 1;">
                    </div>
                </div>
            </section>
        
        </main>
    <br><br>
    <br><br>
        <div class="card-container">
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/salle-bain-toilette-evier-fleurs-dessus_1021079-297020.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Un espace propre et bien entretenu, équipé pour offrir un confort optimal. Parfait pour une pause rapide avec tout le nécessaire à portée de main.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/photo-interieur-piece-design-moderne-illustration-3d_873793-32958.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Un lieu de repos confortable avec un lit douillet et une ambiance apaisante. Idéal pour se détendre et se ressourcer après une longue journée.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/cuisine-luxe-confortable-dans-maison-elegante_305343-1063.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Un espace fonctionnel et moderne, équipé d’appareils de cuisine et de rangements pratiques. Parfait pour préparer de délicieux repas et partager des moments conviviaux.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/photo-interieur-piece-design-moderne-illustration-3d_873793-34555.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Un espace chaleureux et accueillant, aménagé pour que tous puissent se retrouver et profiter ensemble. Idéal pour passer des moments de qualité en famille ou entre amis.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://i.pinimg.com/564x/2b/b5/48/2bb548dbf4a4c57381a7b7f736b4930b.jpg');">
            <div class="overlay">
                <p>Un coin cosy avec des fauteuils confortables et une ambiance apaisante, parfait pour lire, se détendre ou faire une petite sieste pendant la pause.</p>
            </div>
        </div>
        </div>

          <!-- Section pour afficher les commentaires -->
            <div class="comments-section">
                <h2>Commentaires</h2>
                <div v-if="commentaires.length === 0" class="no-comments">
                <p>Aucun commentaire pour ce logement pour le moment.</p>
                </div>
                <div class="post-item" v-for="commentaire in commentaires" :key="commentaire.id">
                <p class="user-name"><strong>Utilisateur :</strong> {{ commentaire.nom_complet }}</p>
                <h4 class="logement-title">
                    <a :href="'/commentaires/' + commentaire.id">Nom du logement : {{ commentaire.logement?.titre }}</a>
                </h4>
                <p class="description">{{ commentaire.description }}</p>
                <h4 class="note">
                    <span>Note : 
                    <span v-for="n in 5" :key="n">
                        <!-- Affichage des étoiles -->
                        <i v-if="n <= commentaire.note" class="fa fa-star" style="color: gold;"></i> <!-- Étoile pleine -->
                        <i v-else class="fa fa-star" style="color: lightgray;"></i> <!-- Étoile vide -->
                    </span>
                    </span>
                </h4>
                </div>
            </div>



        <section class="sct23">
            <div class="content23">
                <h1>Contactez-nous</h1>
                <p>Vous ne trouvez pas ce que vous cherchez, nous pouvons vous aider</p>
                <button onclick="window.location.href='/'">Envoyer un message</button>
              </div>
            <div class="pexel">
                <img src="@/assets/image/pexels-expect-best-323705__2_-removebg-preview (1) 1.png" alt="">
                <img src="@/assets/image/pexels-jared-lung-2111892-removebg-preview (1) 1.png" alt="">
            </div>
        </section>

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
        <p>© 2024 Hauss. Tous droits réservés. Design par ADAMA DABO</p>
    </footer>
</template>

<script>
import logementService from '@/services/logementService';
import reservationService from '@/services/reservationService';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      logement: null, // Pour stocker les détails d'un seul logement
      commentaires: [], // Pour stocker les commentaires du logement
      isMenuActive: false, // Pour gérer l'état du menu burger
    };
  },
  mounted() {
    this.fetchLogementById();
    this.fetchCommentaires(); // Appelle la méthode pour récupérer les commentaires
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive; // Inverse l'état du menu
    },
    fetchLogementById() {
      const logementId = this.$route.params.id; // Récupérer l'ID à partir de l'URL
      logementService.getLogementById(logementId)
        .then(response => {
          this.logement = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du logement:', error);
        });
    },
    fetchCommentaires() {
      const logementId = this.$route.params.id; // Récupérer l'ID à partir de l'URL
      logementService.getCommentairesByLogement(logementId) // Assurez-vous que cette méthode existe dans votre service
        .then(response => {
          this.commentaires = response.data; // Assigner les commentaires récupérés
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des commentaires:', error);
        });
    },
    passerReservation(logementId) {
      const reservationData = {
        logement: {
          id: logementId // L'ID du logement
        },
        statut: 'EN_ATTENTE',
        deletedByOwner: false,
        deletedByTenant: false
      };

      function showAlert(title, text, icon, redirectToLogin = false) {
        Swal.fire({
          title: title,
          text: text,
          icon: icon,
          confirmButtonText: 'OK'
        }).then((result) => {
          if (redirectToLogin && result.isConfirmed) {
            window.location.href = '/login'; // Redirection vers la page de connexion
          }
        });
      }

      reservationService.createReservation(reservationData)
        .then(() => {
          showAlert('Succès!', 'Votre réservation a été effectuée avec succès !', 'success');
        })
        .catch(error => {
          console.error('Erreur lors de la réservation:', error);
          let errorMessage = 'Vous devez être connecté pour passer une réservation.';
          
          if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          }

          switch (error.response?.status) {
            case 401:
              showAlert('Erreur!', errorMessage || 'Vous devez être connecté pour passer une réservation.', 'error', true);
              break;
            case 409:
              showAlert('Erreur!', errorMessage, 'error');
              break;
            default:
              showAlert('Erreur!', errorMessage, 'error');
              break;
          }
        });
    }
  }
};
</script>



<style scoped>
 /* Animation de survol */
 a:hover img {
        transform: scale(1.9); /* Agrandir l'icône */
    }

    a:hover span {
        color: #128C7E; /* Changer la couleur du texte en vert foncé */
    }
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5rem;
    border-top: 1px solid #e2e8f0; /* Tailwind's neutral-200 */
    padding-top: 2rem;
}

.card {
    position: relative;
    width: 300px; /* Adjust as necessary */
    height: 200px; /* Adjust as necessary */
    margin: 1rem;
    border-radius: 1.5rem;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
}

.card:hover {
    transform: translate(-10px, -10px);
    filter: brightness(0.9);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.card:hover .overlay {
    opacity: 1;
}

.overlay p {
    color: white;
    margin: 0;
    transition: opacity 0.5s ease-in-out;
}

.card:hover .overlay p {
    opacity: 1;
}

  * {
    margin: 0;
    padding: 0;
    font-family: Poppins;
    /*background: #F3FFF4;*/
}

/* Style du header */
header {
    background: linear-gradient(112.9deg, #356F37 0.98%, rgba(0, 0, 0, 0.84) 165.36%);
    width: 100%;
    height: 90px;
}

/* Navigation styling */
nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
}

/* Navigation list styling */
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

/* Buttons styling */
.btn {
    margin-left: 210px;
    margin-top: 30px;
    display: flex;
    gap: 10px;
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

/* Responsive styles */

/* Tablets and smaller screens */
@media (max-width: 1024px) {
    header {
        height: auto;
        padding: 1px;
    }

    nav {
        flex-direction: column;
        align-items: flex-start;
    }

    /* Navigation list */
    nav ul {
        display: none; /* Hidden by default, shown via hamburger toggle */
        flex-direction: column;
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
        gap: 1rem;
        padding-left: 20px;
    }

    nav ul.active {
        display: flex; /* Shown when active class is added */
    }

    /* Hide buttons */
    .btn {
        display: none;
    }

    /* Hamburger menu */
    .hamburger {
        display: flex;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        margin-left: auto;
        margin-right: 20px;
        margin-top: -35px;
        margin-bottom: 15px;
    }

    .hamburger div {
        width: 25px;
        height: 3px;
        background-color: #ffffff;
    }

    /* Adjust logo size */
    nav img {
        margin-left: 20px; /* Adjust margin to center logo */
        height: 50px; /* Smaller height for tablets */
        width: auto; /* Maintain aspect ratio */
    }
}

/* Mobile screens */
@media (max-width: 600px) {
    nav ul {
        padding-left: 10px;
    }

    nav a {
        font-size: 14px;
    }

    nav ul.active {
        padding-left: 10px;
    }

    /* Adjust logo size further for mobile */
    nav img {
        margin-left: 10px; /* Proper left margin */
        height: 40px; /* Smaller height for mobiles */
        width: auto; /* Maintain aspect ratio */
    }
}


/* Section principale */
main {
    width: 100%;
}

/* Section 1 */
.sect13 h1 {
    font-size: 45px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
    margin-left: 70px;
    margin-top: 0px;
}

.rect13 {
    margin-top: 90px;
    margin-left: 920px;
    width: 100px;
    height: 100px;
}

.rect23 {
    margin-top: 40px;
    width: 100px;
    height: 100px;
    margin-left: -35px;
}

.container3 {
    height: 160px;
    background: #356F37;
    margin-left: 70px;
    margin-top: 63px;
}

.container3 h1 {
    padding-left: 660px;
    width: 488px;
    height: 120px;
    color: #FFFFFF;
    padding-top: 20px;
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
    text-align: left;
}

.container3 img {
    margin-top: -210px;
    margin-left: 40px;
}

.container3 p {
    width: 488px;
    height: 63px;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.13px;
    text-align: left;
    color: #555555;
    margin-top: 40px;
    margin-left: 120px;
}

.container3 h1,
.container3 p {
    position: relative;
    animation: moveText 1s forwards;
}

/* Animation du texte */
@keyframes moveText {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Effet de flottement */
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.container3 h1, .container3 p {
    animation: float 3s ease-in-out infinite;
}

/* Icones */
.mini-icon {
    margin-left: 1350px;
    margin-top: -370px;
}

.mini-icon span {
    font-size: 18px;
    font-weight: 500;
    line-height: 21.13px;
    text-align: left;
    color: #555555;
    margin-left: 20px;
}

.icon {
    width: 25px;
    height: 25px;
    margin-top: 500px;
}

.mini-icon button {
    width: 282px;
    height: 50px;
    border-radius: 10px;
    font-size: 22px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    background: #EB9655;
    border: none;
    margin-top: 40px;
    margin-left: 30px;
}

.mini-icon button:hover {
    background: #d79a4b;
    transform: scale(1.05);
    transition: background 0.3s ease, transform 0.3s ease;
}

.container3 img:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}

.mini-icon span {
    transition: color 0.3s ease;
}

.mini-icon span:hover {
    color: #EB9655;
}

.rectangle1 {
    margin-top: 555px;
    margin-left: 110px;
}

.rectangle2 {
    margin-left: -45px;
    margin-top: -30px;
}

/* Animation de slide */
@keyframes slideIn {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.container3 {
    animation: slideIn 0.8s ease forwards;
}

/* Média Queries pour la réactivité */

/* Pour les petits écrans (tablettes et plus petites) */
@media (max-width: 1024px) {
    .container3 h1 {
        padding-left: 20px;
        width: auto;
        font-size: 30px;
        text-align: left;
    }

    .container3 img {
        margin-top: -140px;
        margin-left: 20px;
        width: 100%;
    }

    .container3 p {
        width: 100%;
        margin-left: 20px;
        font-size: 16px;
    }

    .mini-icon {
        margin-left: 20px;
        margin-top: 30px;
    }

    .mini-icon button {
        width: 100%;
        margin-left: 0;
    }

    .rect13 {
        margin-top: 50px;
        margin-left: 50px;
        width: 80px;
        height: 80px;
    }

    .rect23 {
        margin-top: 20px;
        width: 80px;
        height: 80px;
        margin-left: -20px;
    }
}

/* Pour les écrans plus petits (smartphones) */
@media (max-width: 600px) {
    .sect13 h1 {
        font-size: 28px;
        margin-left: 0;
        margin-bottom: 20px;
    }
    

    .rect13 {
        margin-top: 20px;
        margin-left: 20px;
        width: 60px;
        height: 60px;
    }

    .rect23 {
        margin-top: 10px;
        width: 60px;
        height: 60px;
        margin-left: -10px;
    }

    .container3 {
        height: auto;
        margin-left: 0;
        margin-top: 20px;
    }

    .container3 h1 {
        font-size: 24px;
        padding-left: 0;
        width: auto;
        text-align: center;
    }

    .container3 p {
        font-size: 14px;
        margin-left: 0;
        display: none;
    }

    .mini-icon {
        margin-left: 0;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .mini-icon button {
        width: 90%;
        margin-left: 0;
        font-size: 18px;
    }

    .container3 img {
        margin-top: 0;
        margin-left: 0;
        width: 100%;
    }

    .rectangle1 {
   display: none;
}

.rectangle2 {
   display: none;
}

}


/*section2*/
.sct23{
    margin-left: 230px;
    margin-top: 140px;

}
.content23 {
    width: 1120px;
    height: 420px;
    border-radius: 20px;
    background: #356F37;
    margin-top: 100px;
    margin-left: 110px;

}

.content23 h1 {
    height: 116px;
    font-size: 96px;
    font-weight: 400;
    line-height: 116.16px;
    text-align: center;
    color: #EEEEEE;
    padding-top: 45px;
    z-index: 1;
    position: relative;

}

.content23 p {
    width: 408px;
    height: 117px;
    font-size: 32px;
    font-weight: 400;
    line-height: 38.72px;
    text-align: center;
    color: #EEEEEE;
    margin-left: 362px;
    z-index: 1;
    position: relative;
}

.content23 button {
    text-align: center;
    margin-left: 430px;
    width: 300px;
    height: 80px;
    border-radius: 20px;
    font-size: 26px;
    font-weight: 400;
    line-height: 31.46px;
    border: none;
    margin-top: 20px;
    z-index: 1;
    position: relative;
}

.pexel {
    margin-top: -538px;
    margin-left: 110px;
    margin-bottom: 30px;
    z-index: -1;
}

/* Écrans moyens (768px et moins) */
@media (max-width: 768px) {
  .sct23 {
    margin-left: 50px; /* Réduire la marge gauche */
    margin-top: 80px; /* Ajuster la marge supérieure */
  }

  .content23 {
    width: 90%; /* Ajuster la largeur pour occuper 90% de l'écran */
    height: auto; /* Laissez la hauteur s'adapter au contenu */
    margin: 0 auto; /* Centrer la section */
  }

  .content23 h1 {
    font-size: 48px; /* Réduction de la taille de la police */
    line-height: 1.2; /* Ajuster l'interligne */
    padding-top: 20px;
  }

  .content23 p {
    width: 80%; /* Ajuster la largeur pour mieux s'adapter */
    font-size: 24px; /* Réduction de la taille de la police */
    margin: 0 auto; /* Centrer le texte */
    line-height: 1.4;
  }

  .content23 button {
    margin: 20px auto; /* Centrer le bouton */
    width: 250px; /* Réduire la largeur */
    height: 60px; /* Réduire la hauteur */
    font-size: 20px; /* Réduction de la taille de la police */
  }

  .pexel {
    margin-top: -300px; /* Ajuster pour que l'image ne déborde pas */
    margin-left: 10px; /* Réduire la marge gauche */
    margin-bottom: 20px;
  }
}

/* Écrans petits (480px et moins) */
@media (max-width: 480px) {
  .sct23 {
    margin-left: 10px; /* Réduction supplémentaire des marges */
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .content23 {
    width: 95%; /* Laissez presque toute la largeur disponible */
    margin: 0 auto; /* Centrez la section */
    border-radius: 10px; /* Réduisez l'arrondi des bords */
  }

  .content23 h1 {
    font-size: 36px; /* Réduction supplémentaire de la police */
    line-height: 1.2;
  }

  .content23 p {
    width: 100%; /* Utilisation complète de la largeur disponible */
    font-size: 18px; /* Réduction supplémentaire de la taille de la police */
    margin: 10px auto; /* Ajustement des marges */
  }

  .content23 button {
    width: 200px; /* Réduction supplémentaire de la largeur */
    height: 50px; /* Réduction de la hauteur */
    font-size: 18px; /* Police ajustée */
    border-radius: 10px; /* Réduction de l'arrondi */
    margin-left: 80px;
  }

  .pexel {
    margin-top: -200px; /* Réduction supplémentaire de la marge supérieure */
    margin-left: 5px; /* Ajustement pour éviter le débordement */
  }
}

/* Cache les images sur les écrans moyens (768px et moins) */
@media (max-width: 768px) {
  .pexel {
    display: none;
  }
}

/* Cache les images sur les écrans petits (480px et moins) */
@media (max-width: 480px) {
  .pexel {
    display: none;
  }
}



/* Style pour la section des commentaires */
.comments-section {
  padding: 20px;
  background-color: #ffffff; /* Couleur de fond blanche */
  border-radius: 12px; /* Coins arrondis */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Ombre douce */
  max-width: 800px; /* Limite la largeur de la section */
  margin: 20px auto; /* Centre la section horizontalement */
  font-family: 'Arial', sans-serif; /* Police moderne */
}

.comments-section h2 {
  font-size: 28px; /* Taille du titre */
  font-weight: bold;
  margin-bottom: 20px; /* Espace sous le titre */
  color: #333; /* Couleur du texte */
  text-align: center; /* Centre le titre */
}

.post-item {
  border: 1px solid #e0e0e0; /* Bordure légère autour de chaque commentaire */
  border-radius: 8px; /* Coins arrondis des commentaires */
  padding: 15px; /* Espace autour de chaque commentaire */
  margin-bottom: 15px; /* Espace sous chaque commentaire */
  background-color: #f9f9f9; /* Couleur de fond des commentaires */
  transition: transform 0.2s; /* Animation de transformation au survol */
}

.post-item:hover {
  transform: scale(1.02); /* Effet d'agrandissement au survol */
}

.user-name {
  font-weight: bold;
  color: #000000; /* Couleur bleue pour le nom de l'utilisateur */
}

.logement-title {
  font-size: 20px; /* Taille du titre du logement */
  margin: 5px 0; /* Espace autour du titre */
}

.logement-title a {
  color: #356F37; /* Couleur du lien */
  text-decoration: none; /* Pas de soulignement par défaut */
}

.logement-title a:hover {
  text-decoration: underline; /* Souligne le lien au survol */
}

.description {
  color: #555; /* Couleur du texte de description */
  margin: 10px 0; /* Espace autour de la description */
  font-style: italic; /* Italique pour la description */
}

.note {
  font-size: 16px; /* Taille de la note */
  color: #EB9655; /* Couleur dorée pour la note */
}

.note a {
  text-decoration: none; /* Pas de soulignement par défaut */
}

.note a:hover {
  text-decoration: underline; /* Souligne le lien au survol */
}

.no-comments {
  padding: 15px;
  margin: 15px 0;
  background-color: #f8d7da; /* Couleur de fond rouge pâle */
  color: #721c24; /* Couleur du texte rouge foncé */
  border: 1px solid #f5c6cb; /* Bordure rouge pâle */
  border-radius: 8px; /* Coins arrondis */
  text-align: center; /* Centrer le texte */
  font-weight: bold; /* Texte en gras */
}


/* Styles responsives */
@media (max-width: 600px) {
  .comments-section {
    padding: 15px; /* Réduit le padding sur les petits écrans */
  }

  .comments-section h2 {
    font-size: 24px; /* Réduit la taille du titre sur les petits écrans */
  }

  .post-item {
    padding: 10px; /* Réduit l'espace autour de chaque commentaire */
  }

  .logement-title {
    font-size: 18px; /* Réduit la taille du titre du logement */
  }

  .note {
    font-size: 14px; /* Réduit la taille de la note */
  }
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

  height: 21px;
  margin-left: 500px;
}

@media (max-width: 480px) {
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
    margin-right: 110px;
    margin-top: 100px;
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
    margin-left: 10px;
  }
}

</style>
