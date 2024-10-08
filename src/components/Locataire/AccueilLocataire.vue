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
            <a href="#"><img src="@/assets/image/logo.png" alt="#"
                    style="margin-top: 20px; margin-left: 95px;position: relative;z-index: 1;"></a>
            <ul>
                <li><a href="#">Acceuil</a></li>
                <li><a href="/listreservations">Historiques demandes</a></li>
                <li @click.prevent="logout">
                    <a href="#">Déconnexion</a>
                    </li>           
             </ul>
             <span class="user-nom" style="margin-left: 300px; font-size: 16px; font-weight: bold;">
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
                          
                        </tr>
                    </tbody>
                </table>
        </section>

        

        <section>
            <div class="sect">
                <div class="malish" style="margin-left: 60px;">
                    <img src="@/assets/image/Mask Group (3) 1.png" alt="" style="z-index: -1; ;margin-left: 100px; width: 1000px; height: 550px;">

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
                <img src="@/assets/image/Rectangle 868.png" alt="" style=" height: 100px;width: 100px; margin-left: 100px; z-index: 0;">

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
                <img src="@/assets/image/Rectangle 868.png" alt="" style=" height: 100px;width: 100px; margin-left: 84%;">
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
  import Swal from 'sweetalert2';
  import axios from 'axios';
  
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
      },
    },

    logout() {
    console.log('Début de la déconnexion...');
    
    // Récupérer le token à partir de localStorage
    const token = localStorage.getItem('token');

    // Vérifier si le token existe avant d'envoyer la requête
    if (token) {
        axios.post('http://localhost:8081/auth/logout', {}, {
            headers: {
                'Authorization': `Bearer ${token}` // Inclure le token dans l'en-tête
            }
        })
        .then(response => {
            console.log(response.data);
            localStorage.removeItem('token');
            Swal.fire({
                icon: 'success',
                title: 'Déconnexion réussie',
                text: 'Vous avez été déconnecté avec succès.',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                this.$router.push('/login');
            });
        })
        .catch(error => {
            console.error('Erreur lors de la déconnexion:', error);
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Une erreur est survenue lors de la déconnexion.',
            });
        });
    } else {
        console.error('Token non trouvé. Impossible de déconnecter l\'utilisateur.');
        Swal.fire({
            icon: 'warning',
            title: 'Avertissement',
            text: 'Aucun token trouvé. Vous êtes déjà déconnecté.',
        });
    }
}

    }





    
  ;
  </script>
  

  <style scoped>

.user-nom {
    font-size: 16px;
    font-weight: bold;
    color: #e5e7eb;
    margin-top: 40px;
    
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
    width: 10%;
    height: 30%;
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
}

.sect1 button img {
    padding-right: 10px;
}

.sect1 button span {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    width: 206px;
    height: 30px;
    opacity: 0px;
    color: #356F37;
}

/*section2*/
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
    font-size: 30px;
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

/*section5*/


.containers h3 {
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    width: 291px;
    height: 30px;
    margin-left: 120px;
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