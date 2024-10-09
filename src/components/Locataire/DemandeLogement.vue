<template>



<header style="height: 90px;">
        <nav>
            <a href="#"><img src="@/assets/image/logo.png" alt="#"
                    style="margin-top: 20px; margin-left: 95px;position: relative;z-index: 1;"></a>
            <ul>
                <li><a href="/Accueillocataire">Acceuil</a></li>
                <li><a href="/listreservations">Historiques demandes</a></li>
                <li>
                    <a href="/">Déconnexion</a>
                    </li>           
             </ul>
             <span class="user-nom" style="margin-left: 300px; font-size: 16px; font-weight: bold;">
                    Prenom Nom
             </span>
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
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    async submitDemande() {
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
      }
    },
  },
};

  </script>
  
  <style scoped>
  * {
      box-sizing: border-box;
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

  footer {
    background: #000000;
    height: 270px;
    margin-top: 100px;
}
  </style>
  