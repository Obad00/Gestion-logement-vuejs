<template>



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


    <div class="container">
      <div class="header">
        <h1>Demande de Logement</h1>
        <p>Veuillez remplir le formulaire ci-dessous pour soumettre votre demande.</p>
      </div>
      <div class="contact-details">
        <div class="contact-info">
          <h2>Contactez-nous</h2>
          <p><i class="bi bi-telephone-fill"></i> + 77  142 52 49</p>
          <p><i class="bi bi-envelope-at-fill"></i> teamhauss@gmail.com</p>
          <p><i class="bi bi-geo-alt-fill"></i> Ouakam Cité Batrain</p>
        </div>
      </div>
      <div class="form-container">
        <form @submit.prevent="submitDemande">
          <div class="form-group">
            <label for="sujet">Sujet :</label>
            <input
              type="text"
              id="sujet"
              v-model="demande.sujet"
              required
            />
          </div>
          <div class="form-group">
            <label for="message">Message :</label>
            <textarea
              id="message"
              v-model="demande.message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer la demande</button>
          <div v-if="isLoading" class="loader">Chargement...</div> <!-- Vous pouvez personnaliser le loader -->
        </form>
        <div v-if="successMessage" id="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="errorMessage" id="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>
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
        <p>Copyright bg Creative Academy All Right Reserved.</p>
    </footer>
  </template>
  
  <script>
 import axios from 'axios';
import Swal from 'sweetalert2'; // Importer SweetAlert

export default {
  data() {
    return {
      demande: {
        sujet: '',
        message: '',
      },
      isMenuActive: false, // Pour gérer l'état du menu burger
      successMessage: '',
      errorMessage: '',
      isLoading: false, // Indicateur de chargement
    };
  },
  methods: {
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive; // Inverse l'état du menu
  },
  async submitDemande() {
    this.isLoading = true; // Active le loader

    try {
      // Récupérer le token du localStorage
      const token = localStorage.getItem('token'); // Assurez-vous d'utiliser la clé correcte

      const response = await axios.post('http://localhost:8081/notifications', this.demande, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      // Afficher un message de succès avec SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Demande envoyée avec succès : ' + response.data.message,
      });

      // Réinitialiser le formulaire
      this.demande.sujet = '';
      this.demande.message = '';
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la demande:', error);

      // Afficher un message d'erreur avec SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Erreur lors de l\'envoi de la demande.',
      });
    } finally {
      this.isLoading = false; // Désactive le loader après la réponse
    }
  },
},
  
};

  </script>
  
  <style scoped>
  * {
      box-sizing: border-box;
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

.loader {
  border: 4px solid #f3f3f3; /* Couleur de fond du cercle */
  border-top: 4px solid #3498db; /* Couleur de la barre de chargement */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

  
  body {
      font-family: 'Arial', sans-serif;
      background-color: #e0f7fa; /* Couleur de fond */
      padding: 20px;
      margin: 0;
  }
  
  .user-nom {
    font-size: 16px;
    font-weight: bold;
    color: #e5e7eb;
    margin-top: 40px;
    
}

  .container {
      max-width: 1000px; /* Largeur maximum du conteneur */
      margin: 0 auto; /* Centrer le conteneur */
      background-color: #ffffff; /* Couleur de fond du conteneur */
      border-radius: 8px; /* Coins arrondis */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre */
      padding: 20px; /* Espacement interne */
      margin-top: 150px;
  }
  
  .header {
      text-align: center; /* Centrer le texte */
      margin-bottom: 20px; /* Espacement inférieur */
  }
  
  .header h1 {
      font-size: 2rem; /* Taille du titre */
      color: #00796b; /* Couleur du titre */
  }
  
  .header p {
      color: #000000; /* Couleur de la description */
      font-size: 20px;
      text-align: center;
      margin-left: 10px;
      margin-top: 60px;
  }
  
  .contact-details {
      margin-bottom: 20px; /* Espacement inférieur */
  }
  
  .contact-info {
      background-color: #004d40; /* Couleur de fond des informations de contact */
      color: white; /* Couleur du texte */
      padding: 15px; /* Espacement interne */
      border-radius: 8px; /* Coins arrondis */
  }
  
  .contact-info h2 {
      margin-top: 0; /* Enlever la marge supérieure */
      text-align: center;
  }

  .contact-info p {
      color: #ffffff;
  }
  
  .form-container {
      background-color: #f1f8e9; /* Couleur de fond du formulaire */
      padding: 20px; /* Espacement interne */
      border-radius: 8px; /* Coins arrondis */
  }
  
  .form-group {
      margin-bottom: 15px; /* Espacement inférieur */
  }
  
  label {
      display: block; /* Afficher le label comme un bloc */
      margin-bottom: 5px; /* Espacement inférieur */
      font-weight: bold; /* Écriture en gras */
      color: #00796b; /* Couleur des étiquettes */
  }
  
  input[type="text"],
  textarea {
      width: 100%; /* Largeur complète */
      padding: 10px; /* Espacement interne */
      border: 1px solid #ccc; /* Bordure grise */
      border-radius: 4px; /* Coins arrondis */
      transition: border 0.3s; /* Transition de la bordure */
  }
  
  input[type="text"]:focus,
  textarea:focus {
      border-color: #00796b; /* Couleur de la bordure au focus */
      outline: none; /* Enlève l'outline par défaut */
  }
  
  button {
      background-color: #00796b; /* Couleur du bouton */
      color: white; /* Couleur du texte du bouton */
      padding: 10px 15px; /* Espacement interne */
      border: none; /* Pas de bordure */
      border-radius: 5px; /* Coins arrondis */
      cursor: pointer; /* Curseur de main */
      transition: background-color 0.3s; /* Transition de couleur */
  }
  
  button:hover {
      background-color: #004d40; /* Couleur du bouton au survol */
  }
  
  .success-message {
      color: green; /* Couleur du message de succès */
      margin-top: 10px; /* Espacement supérieur */
  }
  
  .error-message {
      color: red; /* Couleur du message d'erreur */
      margin-top: 10px; /* Espacement supérieur */
  }
  
  /* Styles responsives */
  @media (max-width: 600px) {
      .container {
          padding: 10px; /* Espacement interne réduit sur petits écrans */
      }
  
      .header h1 {
          font-size: 1.5rem; /* Réduire la taille du titre sur petits écrans */
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
  