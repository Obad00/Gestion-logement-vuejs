<template>




    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="details.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>


    <header style="height: 90px;">
        <nav>
            <a href="#"><img src="@/assets/image/logo.png" alt="#"
                    style="margin-top: 20px; margin-left: 95px;position: relative;z-index: 1;"></a>
            <ul>
                <li><a href="/">Accueil</a></li>
            <li><a href="/apropos">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Services</a></li>
            </ul>
            <div class="btn">
                <button class="btn1" style="width: 86px; height: 24px;">connexion</button>
                <button class="btn2" style="width: 133px; height: 40px;">inscription</button>
            </div>
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

        <div class="card-container">
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/salle-bain-toilette-evier-fleurs-dessus_1021079-297020.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/photo-interieur-piece-design-moderne-illustration-3d_873793-32958.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Engage with a platform where interaction is intuitive, ensuring your journey is fluid and responsive. Description two.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/cuisine-luxe-confortable-dans-maison-elegante_305343-1063.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Discover our commitment to thoughtful design, prioritizing accessibility and user satisfaction. Description three.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://img.freepik.com/photos-premium/photo-interieur-piece-design-moderne-illustration-3d_873793-34555.jpg?ga=GA1.1.321473594.1729511875&semt=ais_hybrid');">
            <div class="overlay">
                <p>Experience innovation at every step, with forward-thinking solutions designed to enhance your daily interactions. Description four.</p>
            </div>
        </div>
        <div class="card" style="background-image: url('https://i.pinimg.com/564x/2b/b5/48/2bb548dbf4a4c57381a7b7f736b4930b.jpg');">
            <div class="overlay">
                <p>Join us in embracing sustainability, where design and functionality meet eco-conscious decisions. Description five.</p>
            </div>
        </div>
        </div>

            <!-- Section pour afficher les commentaires -->
        <div class="comments-section">
        <h2>Commentaires</h2>
        <div class="post-item" v-for="commentaire in commentaires" :key="commentaire.id">
            <p class="user-name"><strong>Utilisateur :</strong> {{ commentaire.nom_complet }}</p>
            <h4 class="logement-title">
            <a :href="'/commentaires/' + commentaire.id">Nom du logement : {{ commentaire.logement?.titre }}</a>
            </h4>
            <p class="description">{{ commentaire.description }}</p>
            <h4 class="note">
            <p :href="'/commentaires/' + commentaire.id">Note : {{ commentaire.note }}/5</p>
            </h4>
        </div>
        </div>


        <section class="sct23">
            <div class="content23">
                <h1>Contactez-nous</h1>
                <p>Vous ne trouvez pas ce que vous cherchez, nous pouvons vous aider</p>
                <button>Envoyer un message</button>
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
        <p>Copyright bg Creative Academy All Right Reserved.</p>
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
    };
  },
  mounted() {
    this.fetchLogementById();
    this.fetchCommentaires(); // Appelle la méthode pour récupérer les commentaires
  },
  methods: {
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
          let errorMessage = 'Une erreur est survenue.';
          
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
    margin-left: 210px;
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

/*style du main*/
/*section1*/
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

.mini-icon {
    margin-left: 700px;
    margin-top: -300px;
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
.rectangle1{
    margin-top: 555px;
    margin-left: 110px;
}
.rectangle2{
    margin-left: -45px;
    margin-top: -30px;
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
    color: #FFFFFF;
    margin-top: 50px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    width: 357px;
    height: 21px;
    margin-left: 500px;
}
</style>
