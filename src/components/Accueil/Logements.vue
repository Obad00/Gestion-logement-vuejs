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
        <section>
            <div class="sect13">
                <h1>Les logements</h1>
                <div class="content13">
    <div class="part">
      <div class="search-container">
        <input
          type="text"
          class="search-input"
          v-model="searchQuery"
          placeholder="Rechercher un logement"
        />
        <i class="fas fa-search search-icon"></i>
      </div>

      <div class="type">
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
      </div>

      <button @click="applyFilters">Appliquer les filtres</button>
    </div>

                    <hr>
                    <div class="grille">
                        <div class="containerà">
                            <h2>Vous pouvez voir toutes sortes de logments de qualités</h2>
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
      selectedZones: []
    };
  },

  computed: {
    filteredLogements() {
      return this.logements.filter(logement => {
        const matchesQuery = logement.titre.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesType = this.selectedTypes.length === 0 || this.selectedTypes.includes(logement.type);
        const matchesPropertyType = this.selectedPropertyTypes.length === 0 || this.selectedPropertyTypes.includes(logement.type);
        const matchesCity = this.selectedCities.length === 0 || this.selectedCities.includes(logement.adresse.regions);
        const matchesZone = this.selectedZones.length === 0 || this.selectedZones.includes(logement.adresse.localite);

        return matchesQuery && matchesType && matchesPropertyType && matchesCity && matchesZone;
      });
    }
  },

  mounted() {
    this.fetchLogements();
    this.fetchCategories();
  },

  methods: {
    fetchLogements() {
      logementService.getAllLogements()
        .then(response => {
          this.logements = response.data;
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

    applyFilters() {
      // Met à jour les logements affichés en fonction des filtres
      // La propriété calculée `filteredLogements` sera automatiquement mise à jour
    },

    viewLogement(id) {
      this.$router.push(`/details/${id}`);
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
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr); /* Quatre colonnes */
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
    margin-top: 20px;
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

.part {
    margin: 50px -140px 300px 110px;
}

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
.sect13 hr {
    width: 2px;
    /* Épaisseur de la ligne */
    height: 700px;
    /* Longueur de la ligne */
    background-color: #D9D9D9;
    /* Couleur de la ligne */
    border: none;
    /* Supprime les bordures par défaut */
    margin: 50px 0 0 160px;
}

.type {
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
}

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
}</style>
