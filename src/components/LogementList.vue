<template>


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="propriete.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>


    <header style="height: 90px;">
        <nav>
    <a href="#">
        <img src="@/assets/image/logo.png" alt="#" style="margin-top: 20px; margin-left: 95px; position: relative; z-index: 1;">
    </a>
    
    <img class="hamburger" src="burger-icon.png" alt="Menu" onclick="toggleMenu()" style="cursor: pointer; display: none; margin-left: auto;">
    
    <ul class="nav-menu">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Historique des demandes</a></li>
        <li><a href="#">Déconnexion</a></li>
    </ul>

    <img class="navbtn1" src="@/assets/image/notification (2) 1.png" alt="Notifications">

    <!-- Replace the image with a span for name display -->
    <span class="user-nom" style="margin-left: 10px; font-size: 16px; font-weight: bold;">
        Prenom Nom
    </span>
</nav>

</header>

    <main>
        <section>
            <div class="sect1">
                <div><img class="imglogo" src="@/assets/image/logo 1.png" alt=""></div>
                <div><button><img src="@/assets/image/Vector (1) 1.png" alt=""><span><a href="/logements/create">Publier une annonce</a> </span></button></div>
            </div>
        </section>

        <section>
            <div class="sect2">
                <h1>SAMAY BIIENS</h1>
                <div class="content">
                    <div class="icon">
                        <img src="@/assets/image/Icon.png" alt="">
                        <h5>Maison de ville</h5>
                        <span>2 propriétés</span>
                        <br>
                    </div>
                    <div class="icon1">
                        <img src="@/assets/image/Icon (1).png" alt="">
                        <h5>villa moderne</h5>
                        <span>10 propriétés</span>
                    </div>
                    <div class="icon">
                        <img src="@/assets/image/Vector (1) 2.png" alt="">
                        <h5 style="margin-bottom: -5px;">Appartement</h5>
                        <span>3 propriétés</span>
                    </div>
                    <div class="icon1">
                        <img src="@/assets/image/Vector (1) 3.png" alt="">
                        <h5 style="margin-bottom: -5px;">Bureau</h5>
                        <span>3 propriétés</span>
                    </div>
                    <div class="icon">
                        <img src="@/assets/image/Icon 1.png" alt="">
                        <h5>Famille unique</h5>
                        <span>5 propriétés</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="sect3">
                <h1>Liste de mes locataires</h1>
            </div>

            <table class="user-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flex-container">
                                    <img class="avatar" src="https://i.pravatar.cc/150?img=1" alt="">
                                    <div class="user-info">
                                        <div class="user-name">Jane Cooper</div>
                                        <div class="user-email">jane.cooper@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>Regional Paradigm Technician</td>
                            <td><span class="status active">Active</span></td>
                            <td>Admin</td>
                            <td>jane.cooper@example.com</td>
                            <td>
                                <a href="#" class="edit">Edit</a>
                                <a href="#" class="delete">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex-container">
                                    <img class="avatar" src="https://i.pravatar.cc/150?img=1" alt="">
                                    <div class="user-info">
                                        <div class="user-name">Jane Cooper</div>
                                        <div class="user-email">jane.cooper@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>Regional Paradigm Technician</td>
                            <td><span class="status active">Active</span></td>
                            <td>Admin</td>
                            <td>jane.cooper@example.com</td>
                            <td>
                                <a href="#" class="edit">Edit</a>
                                <a href="#" class="delete">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex-container">
                                    <img class="avatar" src="https://i.pravatar.cc/150?img=1" alt="">
                                    <div class="user-info">
                                        <div class="user-name">Jane Cooper</div>
                                        <div class="user-email">jane.cooper@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>Regional Paradigm Technician</td>
                            <td><span class="status active">Active</span></td>
                            <td>Admin</td>
                            <td>jane.cooper@example.com</td>
                            <td>
                                <a href="#" class="edit">Edit</a>
                                <a href="#" class="delete">Delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="flex-container">
                                    <img class="avatar" src="https://i.pravatar.cc/150?img=1" alt="">
                                    <div class="user-info">
                                        <div class="user-name">Jane Cooper</div>
                                        <div class="user-email">jane.cooper@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td>Regional Paradigm Technician</td>
                            <td><span class="status active">Active</span></td>
                            <td>Admin</td>
                            <td>jane.cooper@example.com</td>
                            <td>
                                <a href="#" class="edit">Edit</a>
                                <a href="#" class="delete">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
        </section>

        <section>
            <div class="sect">
                <div class="malish" style="margin-left: 60px;">
                    <img class="mariama" src="@/assets/image/Mask Group (3) 1.png" alt="" style="z-index: -1; ">
                    <!-- margin-left: 100px; width: 1000px; height: 550px; -->

                    <div class="content1" style="display: flex; position: relative;z-index: 1;">
                        <div style="margin-left: 50px;margin-top: 60px;">
                            <h1>No. 1 Real Estate Tool </h1>
                            <p>The leading functions for professional real estate agents. All our functions are made to
                                give
                                the individuals agents the most successful listing creation,.</p>
                            <button>En savoir plus</button>
                        </div>
                        <div class="qr-code">
                            <img src="@/assets/image/qr-code 1.png" alt="">
                        </div>
                    </div>
                </div>
                <img class="mariam" src="@/assets/image/Rectangle 868.png" alt="" style=" height: 100px;width: 100px; margin-left: 100px; z-index: 0;">

                <div style="margin-top: 50px;">
                    <img src="@/assets/image/Data-analytics-chart-laptop 1.png" alt="" style="z-index: -1; ;margin-left: 380px;">

                    <div class="content2" style="display: flex; position: relative;z-index: 1;">
                        <div style="margin-left: 50px;margin-top: 60px;">
                            <h1>No. 1 Real Estate Tool </h1>
                            <p>The leading functions for professional real estate agents. All our functions are made to
                                give
                                the individuals agents the most successful listing creation,.</p>
                            <button>En savoir plus</button>
                        </div>
                    </div>
                </div>
                <img class="mariam" src="@/assets/image/Rectangle 868.png" alt="" style=" height: 100px;width: 100px; margin-left: 84%;">
            </div>
      
            <div class="sect5">
              <div class="containers">
                    <h3>Mes maisons</h3>
                    <div class="maison-container">  <!-- Nouveau conteneur pour les maisons -->
                        <div v-for="logement in logements" :key="logement.id" class="maison">
                            <div class="image-container">
                                <img src="@/assets/image/Pict.png" alt="">
                                <section class="property-card">
                                    <div class="property-details">
                                        <div class="titre">
                                            <h2>{{ logement.titre }}</h2>
                                            <p class="price">{{ logement.prix }} FCFA</p>
                                        </div>
                                        <p class="address">{{ logement.adresse }}</p>
                                        <div class="property-info">
                                            <span>{{ logement.nombre_toilette }} Toilettes</span> |
                                            <span>{{ logement.nombre_chambre }} Chambre</span> |
                                            <span>{{ logement.surface }} m²</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
              </div>




                <div class="containers">
                    <h3>Mes appartements</h3>
                    <div class="maison-container">
                        <div v-for="logement in logements" :key="logement.id" class="maison">
                            <div class="image-container">
                                <img src="@/assets/image/Pict.png" alt="">
                                <section class="property-card">
                                    <div class="property-details">
                                        <div class="titre">
                                            <h2>{{ logement.titre }}</h2>
                                            <p class="price">{{ logement.prix }} FCFA</p>
                                        </div>
                                        <p class="address">{{ logement.adresse }}</p>
                                        <div class="property-info">
                                            <span>{{ logement.nombre_toilette }} Toilettes</span> |
                                            <span>{{ logement.nombre_chambre }} Chambre</span> |
                                            <span>{{ logement.surface }} m²</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                       
                    </div>
                </div>
                <div class="containers">
                    <h3>Annonces récentes</h3>
                    <div class="maison-container">
                        <div v-for="logement in logements" :key="logement.id" class="maison">
                            <div class="image-container">
                                <img src="@/assets/image/Pict.png" alt="">
                                <section class="property-card">
                                    <div class="property-details">
                                        <div class="titre">
                                            <h2>{{ logement.titre }}</h2>
                                            <p class="price">{{ logement.prix }} FCFA</p>
                                        </div>
                                        <p class="address">{{ logement.adresse }}</p>
                                        <div class="property-info">
                                            <span>{{ logement.nombre_toilette }} Toilettes</span> |
                                            <span>{{ logement.nombre_chambre }} Chambre</span> |
                                            <span>{{ logement.surface }} m²</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section>
            <div class="sect6">
                <div style="margin-left: 150px; padding-top: 65px;">
                    <h1>Acheter ou vendre un bien immobilier à tout moment et de n'importe où</h1>
                    <p>Il existe de nombreuses variantes de passages de Lorem Ipsum, mais la plupart d'entre eux ont été
                        altérés d'une manière ou d'une autre par l'injection d'humour dans les mots aléatoires de l'Est,
                        afin de les rendre légèrement crédibles.</p>
                        <div class="bouton">
                            <buttuon class="play-store"><img src="@/assets/image/play-store (1) 1.png" alt="">Google Play</buttuon>
                            <buttuon class="apple"><img src="@/assets/image/apple 1.png" alt=""> <span>Apple Store</span></buttuon>
                        </div>
                </div>
                <img class="imgcall" src="@/assets/image/57923-1 1.png" alt="">
            </div>
        </section>
    </main>
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
        <p>Copyright bg Creative Academy All Right Reserved.</p>
    </footer>


    
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
  

  <style scoped>

.user-nom {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #e5e7eb;
    margin-top: 37px;
}

.user-table {
    margin-top: -650px;
    justify-content: center;
    margin-left: 150px;
    margin-bottom: 200px;
    width: 80%;
    border-collapse: collapse;
    overflow-x: auto;
}

.user-table thead {
    background-color: #f9fafb;
}

.user-table th,
.user-table td {
    border: 1px solid #e5e7eb;
    padding: 12px;
    text-align: left;
}

.user-table th {
    text-transform: uppercase;
    font-weight: 600;
    color: #6b7280;
}

.user-table tbody tr:nth-child(even) {
    background-color: #f9fafb;
}

.flex-container {
    display: flex;
    align-items: center;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.user-info {
    margin-left: 10px;
}

.user-name {
    font-weight: 500;
    color: #111827;
}

.user-email {
    color: #6b7280;
}

.status {
    padding: 4px 8px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 600;
}

.status.active {
    background-color: #bbf7d0;
    color: #16a34a;
}

.edit {
    color: #4f46e5;
    text-decoration: none;
}

.edit:hover {
    text-decoration: underline;
}

.delete {
    color: #ef4444;
    text-decoration: none;
    margin-left: 10px;
}

.delete:hover {
    text-decoration: underline;
}

/* Styles existants */
/* ... (votre CSS existant) ... */

/* Styles pour rendre le tableau responsive */
@media (max-width: 768px) {
    .user-table {
        padding-top: 300px;
        margin-left: 0; /* Supprime la marge à gauche pour les petits écrans */
        width: 100%; /* Utilise la pleine largeur de l'écran */
        margin-bottom: 20px; /* Ajuste la marge inférieure */
    }

    .sect3 {
        padding-top: 220px;
        background: #FFFFFF;
        border-radius: 5px 0px 0px 0px;
    }

    .sect3 h1 {
        font-size: 10px;
        font-weight: 400;
        margin-top: 50px;
    }

    .user-table th,
    .user-table td {
        font-size: 12px; /* Réduit la taille de la police */
        padding: 8px; /* Réduit le padding pour plus d'espace */
    }

    .flex-container {
        flex-direction: column; /* Aligne les éléments verticalement pour les petits écrans */
        align-items: flex-start; /* Aligne les éléments à gauche */
    }

    /* Masque les informations non désirées */
    .avatar {
        display: none; /* Masque l'avatar sur les petits écrans */
    }

    .status {
        display: none; /* Masque la colonne de statut */
    }

    .user-info {
        display: none; /* Masque toutes les informations utilisateur */
    }

    .user-name {
        display: block; /* Affiche le nom */
        font-size: 10px; /* Ajuste la taille de la police si nécessaire */
    }

    .user-email {
        display: block; /* Affiche l'adresse e-mail */
        font-size: 14px; /* Ajuste la taille de la police si nécessaire */
    }

    /* Masque la colonne complète (nom et email) */
    .user-table th:nth-child(2),
    .user-table td:nth-child(2) {
        display: none; /* Masque la colonne des e-mails */
    }

    /* Masque la colonne des noms si elle est dans la première colonne */
    .user-table th:first-child,
    .user-table td:first-child {
        display: none; /* Masque la colonne des noms */
    }

    /* Masque la colonne de statut si elle est dans la troisième colonne */
    .user-table th:nth-child(3), /* Changez l'indice si la colonne de statut est à un autre endroit */
    .user-table td:nth-child(3) {
        display: none; /* Masque la colonne de statut */
    }

    /* Optionnel : Ajustez la présentation des noms et des adresses e-mail */
}

.containers {
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.maison-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */
    gap: 15px; /* Réduisez l'espacement entre les cartes */
    padding: 0px;
    margin: 10px;
}

.maison {
    width: 100%;
    margin-top: 80px; /* Ajoutez une marge supérieure à chaque carte */
}

.image-container {
    position: relative;
}


.property-card {
    position: absolute;
    bottom: -20%; /* Positionner pour que seulement 1/3 de la carte soit sur l'image */
    left: 84px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 80%; 
    max-width: 300px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    height: auto;
}

.property-details h2 {
    font-size: 18px;
    margin-bottom: 8px;
}

.price {
    font-size: 16px;
    font-weight: bold;
    color: #2c3e50;
}

.address {
    font-size: 14px;
    margin: 8px 0;
    color: #7f8c8d;
    text-align: left;
    width: 100%;
}

.property-info {
    font-size: 12px;
    color: #95a5a6;
}

.titre {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.titre h2 {
    margin: 0;
    font-size: 18px;
}

/* Responsive : 2 cartes par ligne sur tablette */
@media (max-width: 768px) {
    .maison-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px; /* Ajustez l'espacement pour les tablettes */
    }
}


/* Responsive : 1 carte par ligne sur mobile */
@media (max-width: 576px) {
    .maison-container {
        grid-template-columns: 1fr;
        gap: 10px; /* Réduisez encore l'espacement sur mobile */
    }

    .containers h3 {
       margin-right: 100px;
       font-size: 10px;

    }

    .property-card {
    position: absolute;
    bottom: -20%; /* Positionner pour que seulement 1/3 de la carte soit sur l'image */
    left: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 80%; 
    max-width: 300px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    height: auto;
}
}


 * {
    margin: 0;
    padding: 0;
    font-family: Poppins;
    /*background: #F3FFF4;*/
}

/*style du header*/
header {
    /*background: linear-gradient(112.9deg, #356F37 0.98%, rgba(0, 0, 0, 0.84) 165.36%);*/
    width: 100%;
    height: 90px;
    background: #356F37;

}

nav {
    display: flex;
    width: 100%;
    height: 100%;
}

nav ul {
    display: flex;
    gap: 2rem;
    margin-left: 300px;
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

.navbtn1 {
    width: 27px;
    height: 27px;
    margin-top: 35px;
    margin-left: 250px;
}

.navbtn2 {
    width: 78px;
    height: 70px;
    margin-top: 10px;
    margin-left: 30px;
}






/*stylr du main*/
/*section1*/
.sect1 {
    margin-top: 3px;
    height: 247px;
    background: #356F37;
    display: flex;
}

.imglogo {
    margin-left: 50px;
    margin-top: 60px;
}

.sect1 button {
    width: 262px;
    height: 50px;
    margin-left: 610px;
    border: none;
    margin-top: 80px;
    background-color: #ffffff;
}

.sect1 button img {
    padding-right: 10px;
}

.sect1 button span a {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    width: 206px;
    height: 30px;
    opacity: 0px;
    color: #356F37;
}

/* Styles existants */
.sect2 {
    height: 288px;
    border-radius: 16px 16px 500px 500px;
    background: #356F37;
    margin-top: 3px;
}

.sect2 h1 {
    width: 362.59px;
    height: 52px;
    font-size: 40px;
    font-weight: 500;
    line-height: 52px;
    text-align: left;
    color: #FFFFFF;
    padding-top: 20px;
    padding-left: 70px;
    padding-bottom: 50px;
}

.content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Permet aux éléments de passer à la ligne si l'espace est insuffisant */
}

.content div {
    background: #ffffff;
    margin: 15px;
    width: 220px;
    height: 225px;
}

.icon {
    border-radius: 0px 0px 16px 16px;
    border: 1px solid #EB9655;
}

.icon1 {
    border-radius: 16px;
    border: 1px solid #356F37;
    margin-top: 20px;
}

.content div img {
    margin-top: 60px;
    margin-left: 80px;
}

.content div h5 {
    font-family: Roboto;
    font-size: 19px;
    font-weight: 550;
    line-height: 22.8px;
    width: 107.85px;
    height: 22.84px;
    margin-top: 15px;
    margin-left: 50px;
    text-align: center;
    margin-bottom: 20px;
}

.content div span {
    width: 70.63px;
    height: 24.7px;
    font-size: 13px;
    font-weight: 400;
    line-height: 24.7px;
    text-align: center;
    margin-left: 60px;
}

/* Styles pour rendre la section responsive */
@media (max-width: 768px) {

    .sect2 {
    height: 1000px;
    border-radius: 16px 16px 500px 500px;
    background: #356F37;
    margin-top: 3px;
}

    .sect2 h1 {
        font-size: 28px; /* Réduit la taille de la police pour les petits écrans */
        padding-left: 20px; /* Réduit le padding à gauche */
        padding-top: 10px; /* Réduit le padding supérieur */
        padding-bottom: 20px; /* Réduit le padding inférieur */
    }

    .content {
        flex-direction: column; /* Aligne les cartes verticalement */
        align-items: center; /* Centre les cartes horizontalement */
    }

    .content div {
        width: 90%; /* Utilise 90% de la largeur de l'écran */
        max-width: 220px; /* Définit une largeur maximale pour les cartes */
    }

    .content div img {
        margin-right: auto; /* Centre l'image */
        justify-content: center;
    }

    .content div h5,
    .content div span {
        margin-left: 100; /* Réinitialise la marge à gauche */
        margin-right: 0; /* Réinitialise la marge à droite */
        text-align: center;
    }
}




/*section3*/
.sect3 {
    margin-top: 140px;
    background: #FFFFFF;
    height: 782px;
    border-radius: 5px 0px 0px 0px;
}

.sect3 h1 {
    width: 506px;
    height: 28px;
    font-size: 25px;
    font-weight: 400;
    line-height: 45px;
    margin-top: 50px;
    margin-left: 80px;
}

/*section4*/

.sect4 img {
    height: 540px;
    width: 850px;

}

.content1 {
    width: 700px;
    height: 400px;
    background: #356F37;
    margin-top: -470px;
    margin-left: 550px;
}

.content1 h1 {
    width: 335px;
    height: 30px;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #FFFFFF;
}

.content1 p {
    width: 412px;
    height: 167px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #FFFFFF;
    margin-top: 30px;
}

.content1 button {
    width: 187px;
    height: 40px;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    text-align: center;
    color: #356F37;
    background: #FFFFFF;
    border: none;
    margin-top: 30px;
}

.qr-code {
    width: 170px;
    height: 180px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF;
    margin-top: 120px;
    margin-left: 30px;
}

.qr-code img {
    width: 180px;
    height: 180px;
    margin-left: 1px;
    margin-top: 1px;

}

.content2 {
    width: 640px;
    height: 400px;
    background: #356F37;
    margin-left: 110px;
    margin-top: -470px;
}

.content2 h1 {
    width: 335px;
    height: 30px;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #FFFFFF;
}

.content2 p {
    width: 412px;
    height: 167px;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: #FFFFFF;
    margin-top: 30px;
}

.content2 button {
    width: 187px;
    height: 40px;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    text-align: center;
    color: #356F37;
    background: #FFFFFF;
    border: none;
    margin-top: 30px;
}

/* Media Queries pour les écrans plus petits */
@media (max-width: 768px) {
    .content1 h1, .content2 h1 {
        font-size: 1.5em; /* Réduction de la taille de police pour les petits écrans */
    }

    .content1 p, .content2 p {
        font-size: 1em; /* Réduction de la taille de police pour les petits écrans */
    }

    .content1 button, .content2 button {
        font-size: 0.9em; /* Ajustement de la taille de police du bouton pour mobile */
    }

    .malish img {
        width: 100%; /* Assure que l'image s'ajuste à la largeur du conteneur sur mobile */
    }

    .qr-code {
        width: 70%; /* Ajuste la largeur pour les petits écrans */
        max-width: 120px; /* Largeur maximale pour le QR code */
    }
}

/* Styles pour les très petits écrans */
@media (max-width: 480px) {
    .content1, .content2 {
        width: 95%; /* Largeur presque complète pour très petits écrans */
        margin: 10px auto; /* Ajustement des marges */
    }

    .content1 h1, .content2 h1 {
        font-size: 1.2em; /* Ajuste la taille de police pour très petits écrans */
    }

    .content1 p, .content2 p {
        font-size: 0.9em; /* Ajuste la taille de police pour très petits écrans */
    }

    .content1 button, .content2 button {
        font-size: 0.8em; /* Ajustement de la taille de police pour le bouton */
    }

    .mariam{
        display: none;
    }

    .sect .mariama{
        margin-top: 40px;
        margin-left: -30000px;
        width: 100%;
    }
    .mariama{
        padding-left: 30000px;
        z-index: 1;

    }

    .content1 {
    width: 700px;
    height: 400px;
    z-index: 150px;
    margin-top: -40px;
    background: #356F37;
}

}


/*section5*/


.containers h3 {
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    width: 291px;
    height: 30px;
    margin-left: 90px;
    padding-bottom: 30px;
    padding-top: 150px;
}


.appartement,
.annonces {
    display: flex;
    margin-left: 120px;
    justify-content: space-between;
    margin-right: 120px;
    grid-template-columns: repeat(4, fr); 
    gap: 0px; 
}

.maison img,
.appartement img,
.annonces img {
    width: 350px;
    height: 274px;
}

/*section6*/
/* Current styles */
.sect6 {
    height: 512px;
    background: #356F37;
    display: flex;
    margin-top: 170px;
}

.sect6 h1 {
    width: 535px;
    height: 162px;
    font-size: 38px;
    font-weight: 700;
    line-height: 54px;
    text-align: left;
    color: white;
}

.sect6 p {
    width: 634px;
    height: 120px;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: white;
}

.bouton {
    display: flex;
}

.play-store {
    width: 189px;
    padding: 15px;
    background: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    color: #356F37;
    border-radius: 2px;
}

.apple {
    width: 189px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    border: 1px solid #ffffff;
    margin-left: 15px;
    border-radius: 2px;
    padding: 15px;
}

.imgcall {
    width: 297px;
    height: 467px;
    margin-top: 45px;
    margin-left: 130px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .sect6 {
        flex-direction: column;
        align-items: center;
        height: auto;
        margin-top: 100px;
        margin-left: -100px;
    }

    .sect6 h1 {
        width: 90%;
        text-align: center;
        font-size: 28px;
        line-height: 40px;
    }

    .sect6 p {
        width: 90%;
        text-align: center;
        font-size: 16px;
        line-height: 28px;
        margin-top: 40px;
    }

    .bouton {
        flex-direction: column;
        align-items: center;
        margin-top: 140px;
        margin-left: -50px;
    }

    .play-store, .apple {
        width: 80%;
        margin-left: 0;
        margin-bottom: 15px;
    }

    .imgcall {
        width: 70%;
        height: auto;
        margin-top: 20px;
        margin-left: -5;
    }
}

/* Style du footer - Version Desktop (pas de changement ici) */
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

/* Responsivité pour les petits écrans */
@media (max-width: 768px) {
    footer {
        height: auto; /* Hauteur automatique pour l'adaptation mobile */
    }

    footer img {
        margin: 20px auto; /* Centre l'image sur mobile */
        display: block; 
    }

    footer ul {
        flex-wrap: wrap; /* Permet aux éléments de se placer sur plusieurs lignes */
        justify-content: center;
        margin-left: 0;
        margin-top: 20px;
        gap: 1rem;
    }

    footer li {
        width: 45%; /* Deux liens par ligne */
        text-align: center;
    }

    footer p {
        margin-left: 0;
        text-align: center;
        width: 100%;
        margin-top: 30px;
    }
}

@media (max-width: 480px) {
    footer a {
        font-size: 16px;
    }

    footer p {
        font-size: 12px;
    }
}

</style>