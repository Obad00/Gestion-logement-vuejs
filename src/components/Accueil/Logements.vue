<template>
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="logement.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
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
        <section>
            <div class="sect13">
                <h1>Les logements</h1>
                <div class="content13">
                            <!-- <div class="part"> -->
                               

  <!-- <div class="type">
    <div class="choix">
      <h4>Types</h4>
      <input type="checkbox" id="location" v-model="selectedTypes" value="location" />
      <label for="location">Location</label>
      <br>
      <input type="checkbox" id="vente" v-model="selectedTypes" value="vente" />
      <label for="vente">Vente</label>
    </div>

    <div class="choix">
      <h4>Type de propriété</h4>
      <input type="checkbox" id="appartements" v-model="selectedPropertyTypes" value="appartements" />
      <label for="appartements">Appartements</label>
      <br>
      <input type="checkbox" id="maisons" v-model="selectedPropertyTypes" value="maisons" />
      <label for="maisons">Maisons</label>
    </div>

    <div class="choix">
      <h4>Ville</h4>
      <input type="checkbox" id="dakar" v-model="selectedCities" value="Dakar" />
      <label for="dakar">Dakar</label>
      <br>
      <input type="checkbox" id="pikine" v-model="selectedCities" value="Pikine" />
      <label for="pikine">Pikine</label>
      <br>
      <input type="checkbox" id="diamnadio" v-model="selectedCities" value="Diamnadio" />
      <label for="diamnadio">Diamnadio</label>
    </div>

    <div class="choix">
      <h4>Quartier ou zone</h4>
      <input type="checkbox" id="ouakam" v-model="selectedZones" value="Ouakam" />
      <label for="ouakam">Ouakam</label>
      <br>
      <input type="checkbox" id="sacrecoeur" v-model="selectedZones" value="Sacré coeur" />
      <label for="sacrecoeur">Sacré coeur</label>
      <br>
      <input type="checkbox" id="almadies" v-model="selectedZones" value="Almadies" />
      <label for="almadies">Almadies</label>
    </div>
  </div> -->

                            <!-- <button @click="applyFilters">Appliquer les filtres</button> -->
                            <!-- </div> -->

                    <!-- <hr> -->
                    <div class="grille">
                        <div class="containerà">
                            <h2>Vous pouvez voir toutes sortes de logments de qualités</h2>
                            <div class="search-container">
                                    <input
                                    type="text"
                                    class="search-input"
                                    v-model="searchQuery"
                                    placeholder="Rechercher un logement"
                                    />
                                    <i class="fas fa-search search-icon"></i>
                                </div>
                            <div class="grid">
                            <!-- Utiliser v-for pour afficher chaque logement dans une carte -->
                            <div class="card" v-for="logement in logements" :key="logement.id">
                                <img src="@/assets/img/house1.png" alt="Handbag">
                                <div class="card-title">{{ logement.titre }}</div>
                                <div class="price">
                                <span>Prix</span>
                                <span>{{ logement.prix }} FCFA</span>
                                </div>
                                <button class="buy-button" @click="viewLogement(logement.id)">Voir</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section class="sct33">
            <div class="content33">
                <h1>Contactez-nous</h1>
                <p>Vous ne trouvez pas ce que vous cherchez, nous pouvons vous aider</p>
                <button>Envoyer un message</button>
            </div>
            <div class="pexel">
                <img src="@/assets/image/pexels-expect-best-323705__2_-removebg-preview (1) 1.png" alt="">
                <img src="@/assets/image/pexels-jared-lung-2111892-removebg-preview (1) 1.png" alt="">
            </div>
        </section>
    </main>

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
</body>

</html>
</template>

<script>
import logementService from '@/services/logementService';
import categorieService from '@/services/categorieService';

export default {
  name: 'LogementComponent',
  data() {
    return {
      logements: [],
      categories: [],
      searchQuery: "",
      selectedTypes: [],
      selectedPropertyTypes: [],
      selectedCities: [],
      selectedZones: [],
      isMenuActive: false, // Pour gérer l'état du menu burger

    };
  },

  computed: {
    filteredLogements() {
      console.log("Filtering logements with search query:", this.searchQuery);
      return this.logements.filter(logement => {
        const matchesQuery = logement.titre.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesType = this.selectedTypes.length === 0 || this.selectedTypes.includes(logement.type);
        const matchesPropertyType = this.selectedPropertyTypes.length === 0 || this.selectedPropertyTypes.includes(logement.proprieteType);
        const matchesCity = this.selectedCities.length === 0 || this.selectedCities.includes(logement.adresse.regions);
        const matchesZone = this.selectedZones.length === 0 || this.selectedZones.includes(logement.adresse.localite);

        console.log(`Logement ${logement.id}: matchesQuery = ${matchesQuery}, matchesType = ${matchesType}, matchesPropertyType = ${matchesPropertyType}, matchesCity = ${matchesCity}, matchesZone = ${matchesZone}`);
        return matchesQuery && matchesType && matchesPropertyType && matchesCity && matchesZone;
      });
    }
  },

  mounted() {
    console.log("Component mounted. Fetching logements and categories...");
    this.fetchLogements();
    this.fetchCategories();
  },

  methods: {

    toggleMenu() {
      this.isMenuActive = !this.isMenuActive; // Inverse l'état du menu
    },
    fetchLogements() {
      console.log("Fetching logements...");
      logementService.getAllLogements()
        .then(response => {
          this.logements = response.data;
          console.log("Logements fetched successfully:", this.logements);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des logements:', error);
        });
    },

    fetchCategories() {
      console.log("Fetching categories...");
      categorieService.getAllCategories()
        .then(response => {
          this.categories = response.data;
          console.log("Categories fetched successfully:", this.categories);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des catégories:', error);
        });
    },

    viewLogement(id) {
      console.log("Navigating to logement details with ID:", id);
      this.$router.push(`/details/${id}`);
    },

    applyFilters() {
      console.log("Applying filters...");
      console.log("Selected types:", this.selectedTypes);
      console.log("Selected property types:", this.selectedPropertyTypes);
      console.log("Selected cities:", this.selectedCities);
      console.log("Selected zones:", this.selectedZones);
    }
  }
};
</script>


<style scoped>

.containerà {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.5rem;
            text-align: center;
            margin-left: 100px;
        }
        h2 {
            font-size: 2rem;
            margin: 1rem 0;
            color: #333;
        }
        .grid {
    display: grid;
    gap: 1.8rem;
    grid-template-columns: repeat(5, 1fr); /* Quatre colonnes */
}

@media (max-width: 1200px) {
    .grid {
        grid-template-columns: repeat(3, 1fr); /* Trois colonnes pour les écrans plus petits */
    }
}

@media (max-width: 900px) {
    .grid {
        grid-template-columns: repeat(2, 1fr); /* Deux colonnes pour les écrans moyens */
    }
}

@media (max-width: 600px) {
    .grid {
        grid-template-columns: 1fr; /* Une seule colonne pour les petits écrans */
        margin-left: -100px;
        margin-right: 0px;
    }

    .containerà h2 {
        font-size: 15px;
        margin-left: -80px;
        margin-right: 10px;
    }
}

        .card {
            background-color: #ffffff; /* Dark gray background */
            border-radius: 0.5rem;
            box-shadow: 0 2px 10px rgba(110, 107, 107, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .card img {
            border-radius: 0.5rem 0.5rem 0 0;
            width: 90%;
            height: 200px; /* Fixed height */
            object-fit: cover; /* Cover the image area */
        }
        .card-title {
            font-size: 1.5rem;
            color: #000000;
            margin: 0.5rem;
        }
        .price {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem;
            color: #000000;
            font-size: 1rem;
        }
        .buy-button {
            background-color: #EB9655; /* Blue background */
            color: white;
            font-size: 1.1rem;
            text-transform: uppercase;
            padding: 0.5rem;
            border: none;
            border-radius: 0.5rem;
            width: 100%;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .buy-button:hover {
            background-color: #356F37; /* Darker blue on hover */
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

nav img {
    display: flex;
    gap: 2rem;
    margin-left: 50px;
    margin-top: 20px;
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
    margin-top: 27px;
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

    .sect13 hr {
        display: none;
    }

    

}

/*section1*/
.sect13 h1 {
    width: 410px;
    height: 72px;
    font-size: 48px;
    font-weight: 400;
    line-height: 72px;
    margin-left: 360px;
    margin-top: 60px;

}

.content13 {
    display: flex;
}

/* .part {
    margin: 50px -140px 300px 110px;
} */

.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.search-input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.search-icon {
  margin-left: -2rem;
  cursor: pointer;
}
/* .sect13 hr {
    width: 2px; */
    /* Épaisseur de la ligne */
    /* height: 700px; */
    /* Longueur de la ligne */
    /* background-color: #D9D9D9; */
    /* Couleur de la ligne */
    /* border: none; */
    /* Supprime les bordures par défaut */
    /* margin: 50px 0 0 160px; */
/* } */

/* .type {
    margin-top: 23px;
    display: block;
    margin-bottom: 20px;
}

.choix {
    margin-bottom: 20px;
}

.choix h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 24.2px;
}

.choix label {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    margin-left: 20px;

}

.choix input {
    margin-left: 20px;
} */

.part button {
    background: #EB9655;
    width: 242px;
    height: 50px;
    border-radius: 10px 0px 10px 0px;
    font-size: 24px;
    font-weight: 400;
    line-height: 29.04px;
    text-align: left;
color: #ffffff;
    text-align: center;
    border: none;
}

.grille1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(-70px, 1fr));
    margin-top: 100px;
    margin-left: 25px;
}

.grille img {
    padding: 10px;
}

/*section2*/
.sect23{
    margin: 60px 0 120px 0;
    background: #EEEEEE;
    height: 550px;
}
.sect23 h1{
    font-family: Fredoka;
font-size: 48px;
font-weight: 400;
line-height: 58.08px;
text-align: left;
color: #356F37;
padding-left: 115px;
padding-top: 75px;


}
.traits{
margin-top: -100px;
}
.grille2 {
   
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(-70px, 1fr));
    gap: 30px;
    
}



/*section3*/
.sct33 {
    
    margin-left: 200px;

}
.content33 {
    width: 1120px;
    height: 420px;
    border-radius: 20px;
    background: #356F37;
    margin-top: 100px;
    margin-left: 110px;

}

.content33 h1 {
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

.content33 p {
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

.content33 button {
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
  .sct33 {
    margin-left: 50px; /* Réduire la marge gauche */
    margin-top: 80px; /* Ajuster la marge supérieure */
  }

  .content33 {
    width: 90%; /* Ajuster la largeur pour occuper 90% de l'écran */
    height: auto; /* Laissez la hauteur s'adapter au contenu */
    margin: 0 auto; /* Centrer la section */
  }

  .content33 h1 {
    font-size: 48px; /* Réduction de la taille de la police */
    line-height: 1.2; /* Ajuster l'interligne */
    padding-top: 20px;
  }

  .content33 p {
    width: 80%; /* Ajuster la largeur pour mieux s'adapter */
    font-size: 24px; /* Réduction de la taille de la police */
    margin: 0 auto; /* Centrer le texte */
    line-height: 1.4;
  }

  .content33 button {
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
  .sct33 {
    margin-left: 10px; /* Réduction supplémentaire des marges */
    margin-top: 60px;
    margin-bottom: 50px;
  }

  .content33 {
    width: 95%; /* Laissez presque toute la largeur disponible */
    margin: 0 auto; /* Centrez la section */
    border-radius: 10px; /* Réduisez l'arrondi des bords */
  }

  .content33 h1 {
    font-size: 36px; /* Réduction supplémentaire de la police */
    line-height: 1.2;
  }

  .content33 p {
    width: 100%; /* Utilisation complète de la largeur disponible */
    font-size: 18px; /* Réduction supplémentaire de la taille de la police */
    margin: 10px auto; /* Ajustement des marges */
  }

  .content33 button {
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

  .sect13 h1 {
    width: 410px;
    height: 72px;
    font-size: 34px;
    font-weight: 400;
    line-height: 72px;
    margin-left: 70px;
    margin-top: 10px;

}

.search-container {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-left: -100px;
  margin-right: 15px;
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
    margin-left: 0px;
  }
}
</style>
