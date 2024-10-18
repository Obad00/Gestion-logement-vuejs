<template>




    <header>
        <nav>
            <a href="#"><img src="@/assets/image/logo.png" alt="#">
            </a>
            <ul>
                <li><a href="/">Acceuil</a></li>
                <li><a href="/apropos">A propos</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/contact">Services</a></li>
            </ul>
            <div class="btn">
                <button class="btn1" style="width: 86px; height: 24px;"><a href="/login">connexion</a></button>
                <button class="btna2" style="width: 133px; height: 40px;"><a class="btna2" href="/register">inscription</a></button>
            </div>
        </nav>
        <div class="banner">
            <div>
                <div class="text">
                    <h1>Trouvez votre chez-vous <br> en toute simplicité, au cœur du Sénégal</h1>
                    <p>Sur <strong>HAUSS,</strong><br>
                    votre solution simple et rapide pour trouver et
                    gérer des logements au Sénégal. Que vous soyez étudiant, expatrié, ou résident local,
                    découvrez des options adaptées à vos besoins avec une interface intuitive et sécurisée.</p>
                    <button class="btn3"><span><a class="btn3" href="login">publier une annonce</a></span></button>
                    <button class="prev1"><i class="fas fa-chevron-right"></i></button>
                </div>
                
                <div class="rafetal"><img class="layer" src="@/assets/image/Layer_x0020_1.png" alt="" ></div>

            </div>

            <div class="image">
                <img class="grp7" src="@/assets/image/Group 7.png" alt="#">
            </div>
        </div>
    </header>

    <main style="background: #F3FFF4; padding-top: 100px;">
        <section class="section1">
            <div style="text-align:center;justify-content: center;">
                <h1>Nos services</h1>
                <span>Votre futur logement commence ici</span>
            </div>
            <div class="service">
                <div class="srvc">
                    <div class="imgsrvc">
                        <img src="@/assets/image/house 1.png" alt="">
                    </div>
                    <h3>Achat Maison/Appartement</h3>
                    <p>Rumah impian kini jadi kenyataan, Beli
                        rumah bary dengan fasilitas terbaik
                        dengan lingkungan yang nyaman.</p>
                </div>
                <div class="srvc">
                    <div class="imgsrvc">
                        <img src="@/assets/image/assets 1.png" alt="" style="padding-top: 10px;">
                    </div>
                    <h3>Location appartement</h3>
                    <p>Sewa rumah yang indah untuk keluarga
                        anda, pilihan terbaik untuk tempat
                        tinggal keluarga mu.</p>
                </div>
                <div class="srvc">
                    <div class="imgsrvc">
                        <img src="@/assets/image/town 1.png" alt="" style="padding-top: 10px;">
                    </div>
                    <h3>Location maison</h3>
                    <p>Beli Rumah sempurna dengan harga
                        terbaik kualitas terjamin dari sumber
                        terpercaya</p>
                </div>
            </div>
        </section>

     <section class="property-section">
        <div class="property-container">
            <h1>Le logement idéal, à portée de clic.</h1>
            <p>Logements adaptés à vos besoins, en un instant.</p>
            
            <div class="search-bar">
                <button class="search-button active">Tous</button>
                <button class="search-button">En vente</button>
                <button class="search-button">Location</button>
            </div>
            
    
            <!-- New line for the category and other buttons -->
            <div class="search-bar-lower">
                <div class="dropdown">
                    <button class="dropdown-toggle">
                    <i class="fas fa-home"><img src="@/assets/img/home.svg" alt=""></i> 
                    Catégorie <span>▼</span>
                    </button>
                    <ul class="dropdown-menu">
                    <!-- Boucle sur les catégories avec une fonction de sélection -->
                    <li v-for="categorie in categories" :key="categorie.id">
                        <a href="#" @click.prevent="selectCategory(categorie.id)">{{ categorie.nom }}</a>
                    </li>
                    </ul>
                </div>

                <div class="dropdown">
                    <button class="dropdown-toggle">Localisation <span>▼</span></button>
                    <ul class="dropdown-menu" v-for="logement in filteredLogements" :key="logement.id">
                    <li><a href="#" @click.prevent="selectLocation(logement.adresse)">{{ logement.adresse }}</a></li>
                    </ul>
                </div>

                <!-- Dynamique: Affichage des logements filtrés -->
                <div class="search-text">
                    <span v-if="selectedLogement">{{ selectedLogement.type }}, {{ selectedLogement.adresse }}</span>
                    <span v-else>Veuillez sélectionner une catégorie et une localisation</span>
                </div>

                <button class="search-view-button">Voir</button>
                </div>

        </div>


    </section>
      
        
        <section class="property-list-section">
            <h1 class="section-title">Jéggi sa kër ci sunugal bu baax</h1>
            <div class="property-grid">
                <!-- Card 1 -->
                <div  v-for="logement in logements" :key="logement.id" class="property-card">
                    <img src="@/assets/img/house1.png" alt="Maison à Mbour">
                    <div class="property-info">
                        <div class="property-price">
                            <span class="price">{{ logement.prix }} F</span>
                            <router-link :to="`/details/${logement.id}`" class="voir-button">Voir</router-link>
                        </div>
                        
                        <p class="location">{{ logement.adresse.regions }}</p>
                        <p class="status rent">{{ logement.statut }}</p>
                        <!-- <a href="#" class="view-link">Voir</a> -->
                        <div class="property-details">
                            <span><img src="@/assets/img/bedroom-icon.svg" alt="">{{ logement.nombre_chambre }} Chambres</span>
                            <span><img src="@/assets/img/bathroom-icon.svg" alt="">4{{ logement.nombre_toilette }}Toilettes</span>
                            <span><img src="@/assets/img/area-icon.svg" alt="">{{ logement.surface }}m²</span>
                        </div>
                    </div>
                </div>
            
            </div>
            <div class="see-more">
                <a href="#">Voir plus...</a>
            </div>
        </section>
    
         <section id="appart">
        <div class="carousel-container">
          <h2>KAAY DEUK...</h2>
        </div>
        <button class="btn-more">Voir d'autres</button>
          <div class="carousel">
            <button class="prev">&#10094;</button>
            <div  class="carousel-images">
              <div v-for="logement in logements" :key="logement.id" class="carousel-item">
                <img src="@/assets/img/image1.png" alt="Appartement 1">
                <div class="carousel-info">
                  <h3>{{ logement.type}}</h3>
                  <p>{{ logement.titre }}</p>
                  <p>{{ logement.prix }}F</p>
                  <router-link :to="`/details/${logement.id}`" class="btn-visualiser">Visualiser</router-link>

                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/image2.png" alt="Appartement 2">
                <div class="carousel-info">
                  <h3>Appartement</h3>
                  <p>Appartement simple Type-A2</p>
                  <p>100.000F</p>
                  <button class="btn-visualiser">Visualiser</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/image3.png" alt="Appartement 3">
                <div class="carousel-info">
                  <h3>Appartement</h3>
                  <p>Appartement simple Type-A2</p>
                  <p>100.000F</p>
                  <button class="btn-visualiser">Visualiser</button>
                </div>
              </div>
              <button class="next">&#10095;</button>
              </div>
            </div>
         
      </section>
        <section>
            <div class="section5" style="display: flex;">
                <div class="info">
                    <h1>Contactez-nous pour plus d'informaton !</h1>
                    <h4>Hauss</h4>
                    <img src="@/assets/image/Vector.png" alt=""> <span>Ouakam Cité Batrain</span>
                    <br> <br>
                    <img src="@/assets/image/Group.png" alt=""> <span>+221 77 142 52 49</span>
                    <br> <br>
                    <img src="@/assets/image/Vector (1).png" alt="" style="width: 25px;height: 25px;">
                    <span>Hauss@gmail.com</span>
                    <h3 class="rs">Réseaux sociaux</h3>
                    <img src="@/assets/image/Vector (2).png" alt="">
                    <img src="@/assets/image/Group (1).png" alt="" style="margin-left: 10px;">
                    <img src="@/assets/image/akar-icons_instagram-fill.png" alt="" style="margin-left: 10px;">
                </div>

                <div class="besoin">
                    <h1>Vos besoin..?</h1>
                    <label for="mail"></label>
                    <br>
                    <input type="email" id="email" name="email" required placeholder="Email...">
                    <br>
                    <label for="message"></label>
                    <textarea id="message" name="message" rows="6" required placeholder="Message..."></textarea>
                    <button>Envoyer</button>
                </div>
            </div>
        </section>
    </main>
    <hr style="background: #919291;">
    <footer>
        <div class="footer-top">
            <a href=""><img src="@/assets/image/logo.png" alt=""></a>
            <ul>
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
        <p>© 2024 Hauss. Tous droits réservés. Design par ADAMA DABO</p>
    </footer>

</template>

<script>

import logementService from '@/services/logementService';
import categorieService from '@/services/categorieService';

export default {
  data() {
    return {
      logements: [],
      categories: [],
      selectedCategory: null,
      selectedLogement: null, // Logement sélectionné pour l'affichage dans search-text
      filteredLogements: [], // Logements filtrés par catégorie
    };
  },
  mounted() {
    this.fetchLogements();
    this.fetchCategories();
  },
  methods: {
    fetchLogements() {
      logementService.getAllLogements() // Appel direct sans token
        .then(response => {
          this.logements = response.data;
          this.filteredLogements = this.logements; // Initialiser avec tous les logements
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des logements:', error);
        });
    },

    fetchCategories() {
      categorieService.getAllCategories()
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.log('Erreur lors de la récupération des catégories:', error);
        });
    },

    // Fonction pour filtrer les logements par catégorie
    selectCategory(categorieId) {
      this.selectedCategory = categorieId;
      // Filtrer les logements par catégorie
      this.filteredLogements = this.logements.filter(logement => logement.categorie_id === categorieId);
      this.selectedLogement = null; // Réinitialiser la sélection du logement lors du changement de catégorie
    },

    // Fonction pour sélectionner un logement
    selectLocation(adresse) {
      this.selectedLogement = this.filteredLogements.find(logement => logement.adresse === adresse);
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
          console.log('Erreur lors de la suppression du logement:', error);
        });
    }
  }
};

  

  

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselImages = document.querySelector('.carousel-images');
  const carouselItems = document.querySelectorAll('.carousel-item');

  let currentIndex = 0;

  // Fonction pour mettre à jour la position du carousel
  function updateCarousel() {
    const itemWidth = carouselItems[0].clientWidth; // Recalcule la largeur à chaque fois
    carouselImages.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  if (carouselItems.length > 0 && carouselImages && prevButton && nextButton) {
    // Gestion du clic sur le bouton "Précédent"
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = carouselItems.length - 1;
      }
      updateCarousel();
    });

    // Gestion du clic sur le bouton "Suivant"
    nextButton.addEventListener('click', () => {
      if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });

    // Initialiser la position du carousel
    updateCarousel();

    // Recalcule la largeur des éléments si la fenêtre est redimensionnée
    window.addEventListener('resize', updateCarousel);

  } else {
    console.error('Le carrousel ou ses éléments ne sont pas correctement définis.');
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    height: 768px;
}
.banner{
    display: flex;
    align-items: top;
    justify-content: space-between;
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
    margin-top: 30px;
}

nav a {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    transition: 0.5s;
}

nav a img {
    margin-top: 30px;
    margin-left: 95px;
    position: relative;
    z-index: 1;
}

nav a:hover {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;

}

.btn {
    margin-left: 300px;
    margin-top: 39px;
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

.btna2 {
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #356F37;
    background-color: #ffffff;
}

header h1 {
    margin-top: -630px;
    width: 666px;
    margin-left: 80px;
    font-size: 52px;
    font-weight: 700;
    line-height: 72px;
    text-align: left;
    color: #ffffff;

}

header p {
    width: 596px;
    height: 144px;

    margin-left: 80px;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: #ffffff;

}

.btn3 {
    width: 237px;
    height: 70px;
    margin-left: 80px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #356F37;
    border: none;
    background-color: #ffffff;



}
.btn3 span a {
    width: 237px;
    height: 70px;
    margin-left: 0px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    color: #356F37;
    border: none;
    background-color: #ffffff;



}

.prev1 {
    background-color: transparent;
    border: none;
    width: 44px;
    height: 44px;
    padding: 9.11px 14.56px 9.16px 16.5px;
    color: #ffffff;
    font-size: 30px;
}

.layer {
    margin-top: -594px;
}

.image{
    display: flex;
    justify-content: end;
    margin-top: -36%;
}
.image img{
    width: 100%;
    height: 90%;
}
.text {
     position: relative; /* Position absolue pour superposer */
     top: 50%; 
     left: 0%;  
     z-index: 1; /* Assure que le texte est au-dessus de l'image */
}

.rafetal {
    display: block; /* Pour que l'image soit visible */
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    header {
        height: auto; /* Allow height to adjust for content */
        padding: 20px; /* Add padding for smaller screens */
    }

    .banner {
        height: 500px;
    }
   
    nav {
        flex-direction: column; /* Stack navigation items */
        align-items: center; /* Center items */
        margin-left: 0; /* Reset margin */
        margin-top: 10px; /* Add margin for spacing */
    }
    nav a img {
        margin-top: 0px;
        margin-left: 0px;
        position: relative;
        z-index: 1;
    }

    /* nav a {
        margin: 0;
        padding: 0;
    } */

    nav ul {
        flex-direction: column; /* Stack menu items vertically */
        gap: 1rem; /* Adjust spacing between items */
        margin: 0; /* Reset margin */
    }

    nav li {
        margin-top: 10px; /* Reduce space between items */
    }

    .btn {
        margin-left: 0; /* Reset button margin */
        margin-top: 20px; /* Add margin for spacing */
        display: flex; /* Allow buttons to stack */
        flex-direction: column; /* Stack buttons vertically */
        align-items: center; /* Center buttons */
    }

    .btn1,
    .btna2 {
        width: 100%; /* Make buttons full width */
        margin: 5px 0; /* Add margin between buttons */
    }

   
    header h1 {
        width: 380px;
        margin-top: 0px;
        margin-left: 0px;
        font-size: 24px;
        text-align: center;
        line-height: 48px;
    }

    header p {
        width: 90%; /* Use percentage for width */
        margin-left: 0px; /* Adjust margin */
        font-size: 14px; /* Reduce font size */
        text-align: center;
    }

    .btn3 {
        height: 60px; /* Adjust height */
        margin-left: 0px; /* Reset margin */
    }

    .prev1 {
        font-size: 24px; /* Reduce font size */
        width: 36px; /* Adjust width */
        height: 36px; /* Adjust height */
    }

    .image {
        margin-top: 10%; /* Adjust margin */
        justify-content: center; /* Center the image */
    }

    .rafetal {
        position: relative;
        z-index: -10;
    }

    .text {
        width: 450px;
        text-align: center; /* Center text */
        top: 0; /* Reset top position */
        margin-bottom: 20px; /* Add space below text */
    }
    
    

    .layer {
        margin-top: -200px; /* Adjust for smaller screens */
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 28px; /* Further reduce font size */
    }

    header p {
        font-size: 12px; /* Further reduce font size */
    }

    .btn3 {
        height: 50px; /* Adjust height */
    }

    .prev1 {
        font-size: 20px; /* Further reduce font size */
    }
}

/*style du main*/
/*section1*/
.section1 {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    margin-top: -60px;

}

.section1 h1 {
   
    font-size: 48px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
}

.section1 span {
    width: 321px;
    height: 27px;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
}

.service {
    display: flex;
    padding-top: 50px;
    justify-content: center;
    text-align: center;
    gap: 20px;
}

.srvc {
    width: 330px;
    height: 280px;
    padding: 20px;
    border-radius: 5px 0px 0px 0px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: 1s;
}

.srvc:hover {
    background: linear-gradient(135deg, #356F37, #000000); /* Fond vert au survol */
    color: #ffffff;
}

.imgsrvc {
    margin-top: 10px;
    width: 75px;
    height: 75px;
    background-color: #356F37;
    border-radius: 50px;
    margin-left: 120px;
    margin-top: 30px;
}

.srvc:hover .imgsrvc {
    background-color: #ffffff;
}

.srvc h3 {
    color: #356F37;
    margin-top: 20px;
}

.srvc p {
    margin-top: 10px;
}

.srvc:hover h3 {
    color: #ffffff;
}

button.prev, button.next {
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #EB9655;
    border: none;
    color: white;
    cursor: pointer;
}

button.prev {
    left: 10px;
}

button.next {
    right: 10px;
}

button i {
    color: #FFFFFF;
    font-size: 30px;
    
}
@media (max-width: 768px) {
    .section1 {
        width: 100%;
        height: 190vh;
        margin-top: -60px;

    }
    .service {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

}

/*section5*/
.section5 {
    width: 100%;
    background: rgba(0, 0, 0, 0.7) url(@/assets/image/image_20.png);
    background-size: cover;
    background-position: center;
    background-position: bottom;
    height: auto;
    background-repeat: no-repeat;
    background-blend-mode: darken;
}

.info h1 {
    width: 444px;
    height: 120px;
    font-family: Poppins;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    color: #FFFFFF;
    margin-left: 90px;
    margin-top: 180px;
}

.info h4 {
    width: 57px;
    height: 27px;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    margin-top: 30px;
    color: #FFFFFF;
    margin-left: 90px;
    margin-bottom: 20px;
}

.info img {
    margin-left: 90px;
}

.info span {
    color: #ffffff;

}

.rs {
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    text-align: left;
    color: #FFFFFF;
    margin-left: 90px;
    margin-top: 20px;
    height: 27px;
    width: 153px;
    margin-bottom: 20px;
}

.besoin {
    width: 580px;
    height: 445px;
    background: #FFFFFF;
    margin-top: 150px;
    margin-left: 170px;
    border-radius: 5px;

}

.besoin h1 {
    width: 287px;
    height: 60px;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    text-align: left;
    color: #EB9655;
    margin-left: 150px;
    margin-top: 50px;
}

.besoin input {
    background: #C4C4C4;
    border: none;
    width: 485px;
    height: 75px;
    margin-left: 50px;
    padding: 5px;
}

.besoin textarea {
    background: #C4C4C4;
    border: none;
    width: 485px;
    height: 75px;
    margin-top: 15px;
    margin-left: 50px;
    padding: 5px;
}

.besoin button {
    background: #EB9655;
    width: 495px;
    height: 75px;
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    margin-left: 50px;
    border: none;
    margin-top: 10px;
    text-align: center;
}

@media (max-width: 768px) {
    .section5 {
        width: 100%;
        height: 1150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .besoin {
        width: 380px;
        height: 445px;
        margin-top: 0px;
        margin-left: 0px;
        border-radius: 5px;
        padding: 25px
    }
    .besoin h1 {
        width: 150px;
        height: 60px;
        font-size: 20px;
        font-weight: 600;
        line-height: 60px;
        text-align: center;
        color: #EB9655;
        margin-left: 0px;
        margin-top: 20px;
    }

    .besoin input {
        background: #C4C4C4;
        border: none;
        width: 90%;
        height: 45px;
        margin-left: 0px;
        padding: 5px;
    }

    .besoin textarea {
        background: #C4C4C4;
        border: none;
        width: 90%;
        height: 45px;
        margin-top: 15px;
        margin-left: 0px;
        padding: 5px;
    }

    .besoin button {
        background: #EB9655;
        width: 90%;
        height: 45px;
        color: #FFFFFF;
        font-family: Poppins;
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        text-align: left;
        margin-left: 0px;
        border: none;
        margin-top: 10px;
        text-align: center;
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


/* Property section styling */
.property-section {
    position: relative;
    background-image: url('@/assets/img/background\ 2.png'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -290px;
}

.property-container {
    color: #fff;
    /* background-color: rgba(0, 0, 0, 0.5); Add a slight dark overlay */
    padding: 30px;
    border-radius: 10px;
    max-width: 800px;
    width: 100%;
}

.property-container h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.property-container p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.search-bar {
    display: flex;
    justify-content: space-between; /* Reduce space between buttons */
    background-color: rgba(255, 255, 255, 0.701);
    padding: 5px;
    border-radius: 10px 0px 0;
    width: 50%; /* Adjust the width */
    margin-left: 41px; /* Align the search bar to the left */
    transform: translateX(-10%); /* Optional: Fine-tune the left shift */
    gap: 5px; /* Control space between buttons */
    margin-bottom: 0px; /* Add space for the next section */
}

.search-bar-lower {
    display: flex;
    align-items: center;
    justify-content: space-around; /* Align content evenly */
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 0 10px;
    width: 100%; /* Larger width for the lower search bar */
    margin: 0 auto; /* Center the lower search bar */
    gap: 10px; /* Adjust spacing between elements */
}


.search-button {
    padding: 5px 10px;
    border: none;
    background-color: transparent; /* Set transparent to retain full hover effect */
    font-weight: bold;
    cursor: pointer;
    position: relative;
    color: #333; /* Text color */
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px; /* Optional: to ensure buttons have a minimum size */
}

.search-button:hover,
.search-button.active { /* Apply styles for hover and active (selected) */
    color: #fff; /* Change text color on hover and when active */
    background-color: #004019; /* Full background fill on hover */
}

.search-button::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%; /* Make the vertical line fit the button height */
    width: 1px;
    background-color: #ddd; /* Vertical line color */
}

.search-button:last-child::after {
    display: none; /* Remove the vertical line for the last button */
}

/* Remove margin between buttons to make sure dividers are aligned correctly */
.search-bar .search-button {
    margin: 0;
}

/* Keep the hover effect on the selected button */
.search-button.active {
    background-color: #00572d; /* Different background to indicate active */
    color: #fff; /* Keep text white when active */
}
.search-button {
    padding: 5px 10px;
    border: none;
    background-color: transparent; /* Set transparent to retain full hover effect */
    font-weight: bold;
    cursor: pointer;
    position: relative;
    color: #333; /* Text color */
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px; /* Optional: to ensure buttons have a minimum size */
}

.search-button:hover,
.search-button.active { /* Apply styles for hover and active (selected) */
    color: #005c08; /* Change text color on hover and when active */
    background-color: #ffffffe0; /* Full background fill on hover */
}

.search-button::after {
    /* content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0; */
    height: 100%; /* Make the vertical line fit the button height */
    width: 1px;
    background-color: #ddd; /* Vertical line color */
}

.search-button:last-child::after {
    display: none; /* Remove the vertical line for the last button */
}

/* Remove margin between buttons to make sure dividers are aligned correctly */
.search-bar .search-button {
    margin: 0;
}

/* Keep the hover effect on the selected button */
.search-button.active {
    background-color: #f5f5f5; /* Different background to indicate active */
    color: #075100; /* Keep text white when active */
    padding: 5px 10px;
    min-width: 100px;
}

/* Dropdown styling */
.dropdown {
    position: relative;
}

.dropdown-toggle {
    padding: 10px 20px;
    border: none;
    background-color: #f4f4f4;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
}

.dropdown-toggle i {
    margin-right: 8px; /* Space between the icon and text */
}

.dropdown-toggle:hover {
    background-color: #ddd;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    min-width: 150px;
    z-index: 1;
}

.dropdown-menu li {
    list-style: none;
    text-align: left;
}

.dropdown-menu li a {
    color: #333;
    padding: 10px;
    display: block;
    text-decoration: none;
}

.dropdown-menu li a:hover {
    background-color: #f4f4f4;
}

/* Show the dropdown menu when hovering over the dropdown */
.dropdown:hover .dropdown-menu {
    display: block;
}

.search-text {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #f4f4f4;
    border-radius: 5px;
    color: #00572d;
}

.search-view-button {
    padding: 10px 20px;
    background-color: #ff8c42;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.search-view-button:hover {
    background-color: #ff701e;
}

.property-list-section {
    padding: 50px 20px;
    text-align: center;
}

.section-title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 30px;
}

.property-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3 cards per row */
    gap: 20px;
    justify-items: center;
}

.property-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    max-width: 350px;
    width: 90%;
}

.property-card:hover {
    background: linear-gradient(135deg, #356F37, #000000); /* Fond vert au survol */
    color: #ffffff; /* Texte blanc au survol */
    transform: translateY(-5px); /* Légère élévation au survol */
}
/* Assure-toi que tous les éléments texte à l'intérieur de .service-card deviennent blancs */
.property-card:hover h2,
.property-card:hover h3,
.property-card:hover p,
.property-card:hover span {
    color: #ffffff; /* Texte blanc pour tous les éléments de texte */
}
.property-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.property-info {
    padding: 10px;
    text-align: left;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2E7D32;
}

.location {
    font-size: 1rem;
    color: #333;
}

.status {
    font-size: 1rem;
    margin-top: 0px;
}

.status.rent {
    color: #E53935;
}

.status.sale {
    color: #E53935;
}

.view-link {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #F78C40;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.view-link:hover {
    background-color: #E57830;
}

.property-details {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 0.9rem;
    color: #555;
}

.property-details span {
    display: flex;
    align-items: center; /* Alignement vertical des icônes et du texte */
    gap: 8px; /* Espacement entre l'icône et le texte */
}

.property-details img {
    width: 18px; /* Taille des icônes */
    height: auto;
    display: inline-block;
    vertical-align: middle;
    filter: brightness(0.4); /* Légère ombre pour correspondre au texte */
}

.property-details span:first-child img {
    filter: brightness(0.8); /* Brillance plus forte pour la première icône */
}

.property-details span:last-child img {
    filter: brightness(0.8); /* Brillance plus forte pour la dernière icône */
}

/* Optionnel: Survol des icônes */
.property-details span:hover img {
    filter: brightness(1); /* Les icônes deviennent plus claires au survol */
}

/*  */
@media (max-width: 768px) {
    .property-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr); /* 3 cards per row */
        gap: 20px;
        justify-items: center;
    }

}

/* Voir plus section */
.see-more {
    margin-top: 40px;
}
.voir-button {
    background-color: none; /* Button background color */
    color: rgb(255, 140, 0); /* Text color */
    padding: 10px 15px; /* Button padding */
    border-radius: 5px; /* Rounded corners */
    text-decoration: none; /* No underline */
    font-weight: bold; /* Bold text */
    transition: background-color 0.3s ease; /* Smooth background color change on hover */
    margin-left: 140px;
}

.voir-button:hover {
    background-color: #E57830; /* Darker shade on hover */
    color: #ffffff; /* White text color on hover */
}
.see-more a {
    color: #2E7D32;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
}

.see-more a:hover {
    text-decoration: underline;
}

#appart {
  padding: 20px;
  text-align: center;
}

.carousel-container {
    display: flex;
    justify-content: space-between; /* Space between the text and button */
    align-items: center; /* Align them vertically in the middle */
    margin-bottom: 10px;
  }
  
  .carousel-container h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0%; /* Remove margin to align vertically */
    margin-left: 150px;
    transform: translateY(-1px);
  }
  
  .btn-more {
    background-color: #ff7a2d;
    border: none;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 750px; /* Pousse la navigation vers la droite */
    transform: translateY(-45px);
  }
  
.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80%;
}

.carousel-images {
  display: flex;
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
  width: 100%;
}

.carousel-item {
  min-width: 33.333%;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  text-align: left;
}

.carousel-item img {
  width: 100%;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.carousel-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.carousel-info h3, .carousel-info p, .btn-visualiser {
  margin: 10px 0;
}

.btn-visualiser {
  background-color: #ff7a2d;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.carousel-item:hover .carousel-info {
  opacity: 1;
}

.carousel-item:hover img {
  transform: scale(1.1);
}

/* Boutons "Précédent" et "Suivant" */
.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ff7a2d;
  border: none;
  border-radius: 50%;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  z-index: 10; /* Assure que les boutons sont au-dessus des images */
}

.prev {
  left: -30px;
}

.next {
  right: -30px;
}

</style>
