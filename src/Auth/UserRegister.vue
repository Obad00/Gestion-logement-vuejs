<template>
  <div class="body">
    <div class="containers">
      <div class="form-section">
        <h1 class="login-title">Bienvenue chez <img src="@/assets/image/Rectangle 87.png">!</h1>
        <p class="login-description">Vous avez deja un compte?  <a href="/login">Se connecter</a></p>
        <form @submit.prevent="registerUser" class="form-fields">
          <div class="flex">
            <div>
              <label for="">Nom</label>
              <input type="text" v-model="user.nom" placeholder="Nom" class="form-field" required />
            </div>
            <div>
              <label for="">Prénom</label>
              <input type="text" v-model="user.prenom" placeholder="Prénom" class="form-field" required />
            </div>
          </div>
          <div class="flex">
            <div>
              <label class="flex-label" for="">Adresse</label>
              <input type="text" v-model="user.adresse" placeholder="Adresse" class="form-field" required />
            </div>
            <div>
              <label class="flex-label"  for="">Téléphone</label>
              <input type="text" v-model="user.telephone" placeholder="Téléphone" class="form-field" required />
            </div>
          </div>

          <div class="flex">
            <div class="form-field role-selection">
              <input class="flex-label"  type="radio" id="locataire" value="LOCATAIRE" v-model="user.role" />
              <label for="locataire">Locataire</label>
            </div>
            <div  class="form-field role-selection">
              <input type="radio" id="proprietaire" value="PROPRIETAIRE" v-model="user.role" />
              <label class="flex-label"  for="proprietaire">Propriétaire</label>
            </div>
          </div>

          <div class="pad">
            <div class="padd">
              <label class="flex-label"  for="">Email</label>
              <input type="email" v-model="user.email" placeholder="Email" class="form-field" required />
            </div>

            <div>
              <label class="flex-label"  for="">Mot de passe</label>
              <input type="password" v-model="user.password" placeholder="Mot de passe" class="form-field" required />
            </div>
          </div>
          <button type="submit" class="submit-button">S'inscrire</button>
        </form>

        <p class="terms">{{ message }}</p>
      </div>

      <div class="image-section">
        <div class="login-image-container">
          <img class="register-image" src="@/assets/image/Group 3.svg" alt="login form image">
          <div class="register">
            <p>HAUSS</p>
            <p>Le logement idéal, à portée de clic.</p>
            <img class="register-imag" src="@/assets/image/Group 301.svg" alt="login form image">

          </div>
          <div class="register">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      user: {
        nom: '',
        prenom: '',
        adresse: '',
        email: '',
        password: '',
        telephone: '',
        role: '', // Assurez-vous que cela commence comme une chaîne vide
      },
      message: '',
    };
  },
  methods: {
    async registerUser() {
  if (!this.user.role) {
    this.message = "Veuillez sélectionner un rôle.";
    Swal.fire({
      title: 'Erreur!',
      text: this.message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return;
  }

  try {
    const response = await axios.post('http://localhost:8081/auth/register', {
      ...this.user,
      roles: [this.user.role],  // Envoi le rôle sélectionné dans un tableau
    });

    this.message = response.data;

    // Affichage d'une alerte de succès
    Swal.fire({
      title: 'Inscription réussie!',
      text: this.message,
      icon: 'success',
      confirmButtonText: 'OK'
    });

  } catch (error) {
    // Gestion des erreurs
    this.message = error.response.data;

    // Affichage d'une alerte d'erreur
    Swal.fire({
      title: 'Erreur!',
      text: this.message,
      icon: 'error',
      confirmButtonText: 'Réessayer'
    });
  }
},
  },
};
</script>

<style scoped>
.body {
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.containers {
  display: flex;
  width: 100%;
  height: 100%;
}

.form-section {
  width: 40%;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%; /* Occupe toute la hauteur */
}

.form-section h1 {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-fields {
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
}

.role-selection {
  padding: 10px;
  display: flex;
  gap: 35px;
  align-items: center;
}

.role-selection div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.role-selection label {
  font-size: 16px;
}

/* Style quand une case est cochée */
.role-selection input[type="checkbox"]:checked + label {
  color: #356F37;
  font-weight: bold;
}

.role-selection input[type="checkbox"]:checked {
  accent-color: #356F37;
}


.flex {
  display: flex;
  gap: 35px;
  padding: 10px;
}

.flex label{
  padding: 5px;
}

.pad {
  padding: 10px;
}

.padd{
  margin-bottom: 10px;
}

.form-field {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  background-color: #edf2f7;
  border: 1px solid #e2e8f0;
  margin-bottom: 1px;
  font-size: 16px;
}

.form-field:focus {
  border-color: #356F37;
  background-color: white;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 12px;
  margin-left: 13px;
  background-color: #EB9655;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #356F37;
}

.terms {
  margin-top: 20px;
  font-size: 12px;
  text-align: center;
}

.image-section {
  width: 60%;
  background: linear-gradient(to right, #ecffed, #ecffed);
  justify-content: center;
  align-items: center;
}

.login-image-container {
  text-align: center;
}

.register-image, .logor-image {
  width: 700px;
  display: block;
  margin-left: 100px;
}

.register {
  text-align: center;
  margin-left: 50px;
  margin-right: -400px;
  margin-top: -100px;
}

/* Écrans moyens (768px et moins) */
@media (max-width: 768px) {
  .containers {
    flex-direction: column; /* Empiler les sections verticalement */
  }

  .form-section, 
  .image-section {
    width: 100%; /* Chaque section prend toute la largeur */
    height: auto; /* Ajuste automatiquement la hauteur */
  }

  .form-fields {
    padding: 20px; /* Réduire les paddings */
    max-width: 90%; /* Réduction de la largeur maximale */
  }

  .role-selection {
    flex-wrap: wrap; /* Permet aux éléments de se casser sur plusieurs lignes */
    gap: 15px;
  }

  .submit-button {
    margin-left: 0; /* Centrer le bouton de soumission */
  }

  .register-image,
  .logor-image {
    width: 100%; /* L'image occupe toute la largeur */
    margin-left: 0; /* Supprimez les décalages latéraux */
  }

  .register {
    margin: 0 auto; /* Centrer la section */
    text-align: center;
  }
}

/* Écrans petits (480px et moins) */
@media (max-width: 480px) {
  .form-section h1 {
    font-size: 20px; /* Réduction de la taille de la police du titre */
  }

  .form-fields {
    padding: 15px; /* Réduire encore les paddings */
  }

  .form-field {
    padding: 10px; /* Ajuster les paddings des champs */
    font-size: 14px; /* Réduire la taille de la police */
  }

  .submit-button {
    padding: 10px; /* Ajuster la taille du bouton */
    font-size: 14px;
  }

  .role-selection {
    gap: 10px; /* Réduire l'espacement entre les éléments */
  }

  .terms {
    font-size: 10px; /* Réduire la taille de la police des termes */
  }

  .register-image, 
  .logor-image {
    width: 100%; /* Adapter l'image à l'écran */
  }

  .register {
    margin: 0 auto; /* Centrer la section */
    text-align: center;
  }
}

</style>
