<template>
  <header style="height: 90px;">
    <nav>
      <a href="#">
        <img src="@/assets/image/logo.png" alt="#" style="margin-top: 20px; margin-left: 95px; position: relative; z-index: 1;">
      </a>
      
      <img class="hamburger" src="burger-icon.png" alt="Menu" onclick="toggleMenu()" style="cursor: pointer; display: none; margin-left: auto;">
      
      <ul class="nav-menu">
        <li><a href="/AccueilProprietaire">Accueil</a></li>
        <li><a href="/reservations">Historique des demandes</a></li>
        <li @click.prevent="logout">
          <a href="/login">Déconnexion</a>
        </li>
      </ul>

      <!-- <img class="navbtn1" src="@/assets/image/notification (2) 1.png" alt="Notifications">

      <span class="user-nom" style="margin-left: 10px; font-size: 16px; font-weight: bold;">
        {{ currentUser ? currentUser.prenom + ' ' + currentUser.nom : 'Nom de l\'utilisateur' }} 
      </span> -->
    </nav>
  </header>

  <div class="modal">
    <div class="modal-header">
      <h3>Ajouter un logement</h3>
      <button type="button" class="close-button" @click="closeModal">
        <svg class="close-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>

    <div class="modal-body">
      <form @submit.prevent="createLogement">

        <div class="section">
          <h4>Informations Logement</h4>
          <div class="infos">
            <div class="informations_logement">
              <div class="form-group">
                <label for="type">Type de logement:</label>
                <select v-model="logement.type" id="type" required>
                  <option value="APPARTEMENT">Appartement</option>
                  <option value="MAISON">Maison</option>
                  <option value="STUDIO">Studio</option>
                </select>
              </div>

              <div class="form-group">
                <label for="categorie">Catégorie:</label>
                <select v-model="logement.categorie.id" id="categorie" required>
                  <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">
                    {{ categorie.nom }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="image">Image:</label>
                <input v-model="logement.image" type="text" id="image" required />
              </div>
            </div>

            <div class="form-group">
              <label for="description">Description:</label>
              <textarea v-model="logement.description" id="description" required></textarea>
            </div>
          </div>
        </div>

        <div class="section">
          <h4>Caractéristiques</h4>
          <div class="infos">
            <div class="informations_logement">
              <div class="form-group">
                <label for="titre">Nom du logement:</label>
                <input v-model="logement.titre" type="text" id="titre" required />
              </div>

              <div class="form-group">
                <label for="statut">Statut du logement:</label>
                <select v-model="logement.statut" id="statut" required>
                  <option value="EN_VENTE">En vente</option>
                  <option value="EN_LOCATION">En location</option>
                  <option value="DEJA_VENDU">Déjà vendu</option>
                  <option value="DEJA_LOUE">Déjà loué</option>
                </select>
              </div>

              <div class="form-group">
                <label for="prix">Prix (€):</label>
                <input v-model="logement.prix" type="number" step="0.01" id="prix" required />
              </div>
            </div>
          </div>

          <div class="infos">
            <div class="informations_logement">
              <div class="form-group">
                <label for="nombre_chambre">Nombre de chambres:</label>
                <input v-model="logement.nombre_chambre" type="number" id="nombre_chambre" required />
              </div>

              <div class="form-group">
                <label for="nombre_toilette">Nombre de toilettes:</label>
                <input v-model="logement.nombre_toilette" type="number" id="nombre_toilette" required />
              </div>

              <div class="form-group">
                <label for="nombre_etage">Nombre d'étages:</label>
                <input v-model="logement.nombre_etage" type="number" id="nombre_etage" required />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="surface">Surface (m²):</label>
            <input v-model="logement.surface" type="number" id="surface" required />
          </div>
        </div>

        <div class="section">
          <h4>Adresse</h4>
          <div class="form-grid">
            <div class="form-group">
              <label for="region">Région:</label>
              <input v-model="logement.adresse.regions" type="text" id="region" required />
            </div>

            <div class="form-group">
              <label for="localite">Localité:</label>
              <input v-model="logement.adresse.localite" type="text" id="localite" required />
            </div>
          </div>
        </div>

        <hr style="color: white">
        <button class="save-button" type="submit">Publier l'annonce</button>
      </form>
    </div>
  </div>

  <footer>
    <div style="display: flex;">
      <a href=""><img src="@/assets/image/logo.png" alt=""></a>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/apropos">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/services">Services</a></li>
      </ul>
    </div>
    <p>© 2024 Hauss. Tous droits réservés. Design par ADAMA DABO</p>
  </footer>
</template>

<script>
import logementService from '@/services/logementService';
import CategorieService from '@/services/categorieService';
import Swal from 'sweetalert2';
import axios from 'axios';


export default {
  data() {
    return {
      logement: {
        titre: '',
        description: '',
        adresse: {
          regions: '',
          localite: ''
        },
        surface: 0,
        nombre_chambre: 0,
        nombre_toilette: 0,
        nombre_etage: 0,
        prix: 0.0,
        type: 'APPARTEMENT',
        statut: 'EN_LOCATION',
        categorie: {
          id: null // Laissez ce champ vide pour le choix de la catégorie
        }
      },
      categories: []
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      CategorieService.getAllCategories()
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des catégories :', error);
        });
    },
    createLogement() {
  const token = localStorage.getItem('token'); // Récupérer le token d'authentification

  logementService.createLogement(this.logement, token)
    .then(response => {
      console.log(response.data); // Ajoutez cette ligne pour utiliser response
      Swal.fire('Succès', 'Votre logement a été ajouté avec succès !', 'success');
      this.closeModal(); // Fermer la modal après succès
      this.resetLogement(); // Réinitialiser le formulaire
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout du logement :', error);
      Swal.fire('Erreur', 'Une erreur s\'est produite lors de l\'ajout du logement.', 'error');
    });
},
    resetLogement() {
      this.logement = {
        titre: '',
        description: '',
        adresse: {
          regions: '',
          localite: ''
        },
        surface: 0,
        nombre_chambre: 0,
        nombre_toilette: 0,
        nombre_etage: 0,
        prix: 0.0,
        type: 'APPARTEMENT',
        statut: 'EN_LOCATION',
        categorie: {
          id: null
        }
      };
    },


     // Logout method
     logout() {
      console.log('Début de la déconnexion...');
      const token = localStorage.getItem('token');

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
    },

    closeModal() {
      // Implémentez votre logique pour fermer la modal ici
    },
   
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



.user-nom {
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #e5e7eb;
    margin-top: 37px;
}

.navbtn1 {
    width: 27px;
    height: 27px;
    margin-top: 35px;
    margin-left: 250px;
}


.section {
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;
  padding: 20px;
  border-radius: 5px;
}

.section h4 {
  margin: 10px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
}

.modal {
    background-color: white;
    border: 4px solid #e5e7eb;
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin: 2.5rem;
    padding: 1.25rem;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
    border-bottom: 1px solid #e5e7eb;
}

.close-button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #9ca3af; /* gris-400 */
}

.close-button:hover {
    background-color: #e5e7eb; /* gris-200 */
    color: #1f2937; /* gris-900 */
}

.modal-body {
    padding: 1.5rem;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
}

.form-group {
    grid-column: span 3;
}
.informations_logement{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.informations_logement .form-group select, .informations_logement .form-group input{
  width: 400px;
}
.infos{
  display: flex;
  flex-direction: column;
  
}
.infos textarea{
  width: 99%;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #1f2937; /* gris-900 */
}

input, textarea, select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.375rem;
    border: 1px solid #d1d5db; /* gris-300 */
    background-color: #f9fafb; /* gris-50 */
    color: #1f2937; /* gris-900 */
}

input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #3b82f6; /* bleu-600 */
}

.save-button {

  margin-top: 40px;
    background-color: #EB9655; /* bleu-600 */
    color: white;
    padding: 5px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
}

.save-button:hover {
    background-color: #356F37; /* bleu-700 */
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