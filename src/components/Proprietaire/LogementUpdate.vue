<template>
    <div>
      <h1>Mettre à jour le logement</h1>
      <form @submit.prevent="updateLogement">
        <!-- Nom du logement -->
        <div>
          <label for="nom">Nom du logement:</label>
          <input v-model="logement.titre" type="text" id="nom" required />
        </div>
    
        <!-- Description -->
        <div>
          <label for="description">Description:</label>
          <textarea v-model="logement.description" id="description" required></textarea>
        </div>
    
        <!-- Adresse -->
        <div>
          <label for="adresse">Adresse:</label>
          <input v-model="logement.adresse" type="text" id="adresse" required />
        </div>
    
        <!-- Ville -->
        <div>
          <label for="ville">Ville:</label>
          <input v-model="logement.ville" type="text" id="ville" required />
        </div>
    
        <!-- Région -->
        <div>
          <label for="region">Région:</label>
          <input v-model="logement.region" type="text" id="region" required />
        </div>
    
        <!-- Quartier -->
        <div>
          <label for="quartier">Quartier:</label>
          <input v-model="logement.quartier" type="text" id="quartier" required />
        </div>
    
        <!-- Surface -->
        <div>
          <label for="surface">Surface (m²):</label>
          <input v-model="logement.surface" type="number" id="surface" required />
        </div>
    
        <!-- Nombre de chambres -->
        <div>
          <label for="nombre_chambre">Nombre de chambres:</label>
          <input v-model="logement.nombre_chambre" type="number" id="nombre_chambre" required />
        </div>
    
        <!-- Nombre de toilettes -->
        <div>
          <label for="nombre_toilette">Nombre de toilettes:</label>
          <input v-model="logement.nombre_toilette" type="number" id="nombre_toilette" required />
        </div>
    
        <!-- Nombre d'étages -->
        <div>
          <label for="nombre_etage">Nombre d'étages:</label>
          <input v-model="logement.nombre_etage" type="number" id="nombre_etage" required />
        </div>
    
        <!-- Prix -->
        <div>
          <label for="prix">Prix (€):</label>
          <input v-model="logement.prix" type="number" step="0.01" id="prix" required />
        </div>
    
        <!-- Image URL -->
        <div>
          <label for="image">URL de l'image:</label>
          <input v-model="logement.image" type="text" id="image" required />
        </div>
    
        <!-- Type de logement -->
        <div>
          <label for="type">Type de logement:</label>
          <select v-model="logement.type" id="type" required>
            <option value="APPARTEMENT">Appartement</option>
            <option value="MAISON">Maison</option>
            <option value="STUDIO">Studio</option>
          </select>
        </div>
    
        <!-- Statut du logement -->
        <div>
          <label for="statut">Statut du logement:</label>
          <select v-model="logement.statut" id="statut" required>
            <option value="EN_VENTE">En vente</option>
            <option value="EN_LOCATION">En location</option>
            <option value="DEJA_VENDU">Déjà vendu</option>
            <option value="DEJA_LOUE">Déjà loué</option>
          </select>
        </div>
    
        <!-- Catégorie -->
        <div>
          <label for="categorie">Catégorie:</label>
          <select v-model="logement.categorie.id" id="categorie" required>
            <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">
              {{ categorie.nom }}
            </option>
          </select>
        </div>
    
        <!-- Submit button -->
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  </template>
  
  <script>
  import logementService from '@/services/logementService';
  import CategorieService from '@/services/categorieService'; // Assurez-vous d'importer le service pour récupérer les catégories
  
  export default {
    data() {
      return {
        logement: {
          id: null, // Assurez-vous d'inclure l'ID si nécessaire
          titre: '',
          description: '',
          adresse: '',
          ville: '',
          region: '',
          quartier: '',
          surface: 0,
          nombre_chambre: 0,
          nombre_toilette: 0,
          nombre_etage: 0,
          prix: 0.0,
          image: '',
          type: 'APPARTEMENT',
          statut: 'EN_LOCATION',
          categorie: {
            id: 1 // Default category id
          }
        },
        categories: [] // Initialiser un tableau pour stocker les catégories
      };
    },
    mounted() {
      const logementId = this.$route.params.id;
      logementService.getLogementById(logementId)
        .then(response => {
          this.logement = response.data;
        })
        .catch(error => {
          console.log(error);
        });
      // Récupérer les catégories lors du montage du composant
      this.fetchCategories();
    },
    methods: {
      fetchCategories() {
        CategorieService.getAllCategories()
          .then(response => {
            this.categories = response.data; // Stocker les catégories dans la variable data
          })
          .catch(error => {
            console.log("Erreur lors de la récupération des catégories :", error);
          });
      },
      updateLogement() {
        const token = localStorage.getItem('token'); // Assurez-vous que le token est stocké
        const logementId = this.$route.params.id;
        logementService.updateLogement(logementId, this.logement, token)
          .then(() => {
            this.$router.push('/logements'); // Rediriger après mise à jour
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  